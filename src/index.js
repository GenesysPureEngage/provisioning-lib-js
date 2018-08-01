const { adapt: adaptCometDClientForNode } = require('./cometd-nodejs-client');
const CometDLib = require('cometd');

const provisioning = require('./internal/code-gen/provisioning-api');

const UsersApi = require('./internal/users.js');
const ObjectsApi = require('./internal/objects.js');
const OptionsApi = require('./internal/options.js');
const ExportApi = require('./internal/export.js');
const ImportApi = require('./internal/import.js');
const SystemApi = require('./internal/system.js');
const OperationsApi = require('./internal/operations.js');

const Promise = require('promise');

adaptCometDClientForNode();

class ProvisioningApi {
	
	constructor(apiKey, provisioningUrl, debugEnabled) {
		this._apiKey = apiKey;
		this._provisioningUrl = provisioningUrl;
		
		
		this._client = new provisioning.ApiClient();
		this._client.basePath = provisioningUrl;
		this._client.enableCookies = true;
		this._cookieJar = this._client.agent.jar;
		
		if (apiKey) {
		  	this._client.defaultHeaders = { 'x-api-key': apiKey };
		}
		
		this._sessionApi = new provisioning.SessionApi(this._client);
		
		if(debugEnabled) {
			this._loggerFunction = (msg) => {
				console.log(msg);
			};
		} else {
			this._loggerFunction = (msg) => {}
		}
		
	}
	
	_log(msg) {
		this._loggerFunction(msg);
	}
	
	async _initializeCometd() {
		this._log('Initializing cometd...');
		this._cometd = new CometDLib.CometD();
		const transport = this._cometd.findTransport('long-polling');
		
		transport.context = { cookieJar: this._cookieJar };
		this._cometd.configure({
		  url: `${this._provisioningUrl}/notifications-cometd`,
		  requestHeaders: {
			'x-api-key': this._apiKey,
		  }
		});
		this._log('Starting cometd handshake...');
		
		await new Promise((resolve, reject) =>{
			this._cometd.handshake(reply =>{
			    reply.successful
					? resolve(reply)
					: reject(reply)
			})
        });
        
		this._log('Handshake successful');
		const onCometdMessage = this._onCometdMessage.bind(this);
		await new Promise((resolve, reject) => {
			this._cometd.subscribe(
			  '/*',
			  msg => { 
			  	
			  	onCometdMessage(msg) 
			  },
			  result => {
				const status = result.successful
				  ? 'successful'
				  : 'failed';
				this._log(`${'/*'} subscription ${status}.`);
				if(result.successful) resolve()
				else reject(result)
			  }
			);
		});
		
  	}
  	
  	_onCometdMessage(msg) {
  		msg = msg.data;
		if(msg.channel == 'aio') {
			this.operations._onAsyncResponse(msg.data.id, msg.data.data);
		}
		this._log(`CometD Message on channel: ${msg.channel} with data: ${msg.data}`);
  	}
	
	async initialize({token, code, redirectUri}) {
		
		let options = {};
		
		if (code) {
			options.code = authCode;
			options.redirectUri = redirectUri;
		} else if (token) {
		 	 options.authorization = 'Bearer ' + token;
		}
		
		this._log('Initializing provisioning...');
		let resp = await this._sessionApi.initializeProvisioningWithHttpInfo(options);
		
		this._sessionCookie = resp.response.header['set-cookie'].find(v => v.startsWith('PROVISIONING_SESSIONID'));
		this._cookieJar.setCookie(this._sessionCookie);
		this._log('Provisioning SESSIONID is: ' + this._sessionCookie);
		
		
		await this._initializeCometd();
		
		this._initialized = true;
		this._log("Initialization Complete");
		
		this.users = new UsersApi(this._client, this._log.bind(this));
		this.objects = new ObjectsApi(this._client, this._log.bind(this));
		this.options = new OptionsApi(this._client, this._log.bind(this));
		this.export = new ExportApi(this._client, this._log.bind(this), this.apiKey, this._sessionCookie);
		this.import = new ImportApi(this._client, this._log.bind(this));
		this.system = new SystemApi(this._client, this._log.bind(this));
		this.operations = new OperationsApi(this._client, this._log.bind(this));
	}
	
	setLogger(logger) {
		if(typeof logger == "function") this._loggerFunction = logger;
	}
	
	async done() {
		if(this._initialized) {
			this._log('Disconnecting CometD');
			await new Promise((resolve, reject) => this._cometd.disconnect((reply) => {
				if(reply.successful) resolve();
				else reject(reply);
			}));
			this._log('Logging Out');
			await this._sessionApi.logout();
		}
	}
	
}

module.exports = Object.assign({
	ProvisioningApi : ProvisioningApi
}, provisioning);
