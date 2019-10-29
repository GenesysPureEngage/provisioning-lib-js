/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.67.3932
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AddUserDataDataWwe', 'model/Extension', 'model/Skill'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AddUserDataDataWwe'), require('./Extension'), require('./Skill'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.AddUserDataData = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.AddUserDataDataWwe, root.ProvisioningApi.Extension, root.ProvisioningApi.Skill);
  }
}(this, function(ApiClient, AddUserDataDataWwe, Extension, Skill) {
  'use strict';




  /**
   * The AddUserDataData model module.
   * @module model/AddUserDataData
   * @version 9.0.000.67.3932
   */

  /**
   * Constructs a new <code>AddUserDataData</code>.
   * @alias module:model/AddUserDataData
   * @class
   * @param userName {String} The user's unique login. 
   * @param firstName {String} The user's first name. 
   * @param lastName {String} The user's last name. 
   * @param password {String} The user's password as plain text. 
   */
  var exports = function(userName, firstName, lastName, password) {
    var _this = this;







    _this['userName'] = userName;
    _this['firstName'] = firstName;
    _this['lastName'] = lastName;

    _this['password'] = password;















  };

  /**
   * Constructs a <code>AddUserDataData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddUserDataData} obj Optional instance to populate.
   * @return {module:model/AddUserDataData} The populated <code>AddUserDataData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('changePasswordOnNextLogin')) {
        obj['changePasswordOnNextLogin'] = ApiClient.convertToType(data['changePasswordOnNextLogin'], 'Boolean');
      }
      if (data.hasOwnProperty('emailAddress')) {
        obj['emailAddress'] = ApiClient.convertToType(data['emailAddress'], 'String');
      }
      if (data.hasOwnProperty('employeeID')) {
        obj['employeeID'] = ApiClient.convertToType(data['employeeID'], 'String');
      }
      if (data.hasOwnProperty('externalID')) {
        obj['externalID'] = ApiClient.convertToType(data['externalID'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('folder')) {
        obj['folder'] = ApiClient.convertToType(data['folder'], 'String');
      }
      if (data.hasOwnProperty('userName')) {
        obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('loginCode')) {
        obj['loginCode'] = ApiClient.convertToType(data['loginCode'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('placeNames')) {
        obj['placeNames'] = ApiClient.convertToType(data['placeNames'], ['String']);
      }
      if (data.hasOwnProperty('isAgent')) {
        obj['isAgent'] = ApiClient.convertToType(data['isAgent'], 'Boolean');
      }
      if (data.hasOwnProperty('callRecording')) {
        obj['callRecording'] = ApiClient.convertToType(data['callRecording'], 'Boolean');
      }
      if (data.hasOwnProperty('wwe')) {
        obj['wwe'] = AddUserDataDataWwe.constructFromObject(data['wwe']);
      }
      if (data.hasOwnProperty('switchNames')) {
        obj['switchNames'] = ApiClient.convertToType(data['switchNames'], ['String']);
      }
      if (data.hasOwnProperty('phones')) {
        obj['phones'] = ApiClient.convertToType(data['phones'], [Extension]);
      }
      if (data.hasOwnProperty('supportSoftPhone')) {
        obj['supportSoftPhone'] = ApiClient.convertToType(data['supportSoftPhone'], 'Boolean');
      }
      if (data.hasOwnProperty('sipPhoneType')) {
        obj['sipPhoneType'] = ApiClient.convertToType(data['sipPhoneType'], 'String');
      }
      if (data.hasOwnProperty('skills')) {
        obj['skills'] = ApiClient.convertToType(data['skills'], [Skill]);
      }
      if (data.hasOwnProperty('agentGroups')) {
        obj['agentGroups'] = ApiClient.convertToType(data['agentGroups'], ['String']);
      }
      if (data.hasOwnProperty('accessGroups')) {
        obj['accessGroups'] = ApiClient.convertToType(data['accessGroups'], ['String']);
      }
      if (data.hasOwnProperty('voiceMail')) {
        obj['voiceMail'] = ApiClient.convertToType(data['voiceMail'], 'Number');
      }
      if (data.hasOwnProperty('wrapUpTime')) {
        obj['wrapUpTime'] = ApiClient.convertToType(data['wrapUpTime'], 'String');
      }
      if (data.hasOwnProperty('capacityRule')) {
        obj['capacityRule'] = ApiClient.convertToType(data['capacityRule'], 'String');
      }
      if (data.hasOwnProperty('recordingHierarchy')) {
        obj['recordingHierarchy'] = ApiClient.convertToType(data['recordingHierarchy'], 'String');
      }
    }
    return obj;
  }

  /**
   * Specifies whether to ask the user to change their password the first time they login. The default is `false`. 
   * @member {Boolean} changePasswordOnNextLogin
   */
  exports.prototype['changePasswordOnNextLogin'] = undefined;
  /**
   * The user's email address. 
   * @member {String} emailAddress
   */
  exports.prototype['emailAddress'] = undefined;
  /**
   * The user's employee ID. 
   * @member {String} employeeID
   */
  exports.prototype['employeeID'] = undefined;
  /**
   * The user's external ID. 
   * @member {String} externalID
   */
  exports.prototype['externalID'] = undefined;
  /**
   * Specifies whether the user is enabled. 
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * The location where the Provisioning API should create the user. This is also where the API creates DNs, places, agent logins and so on. If not specified, the API creates the user in a root folder. 
   * @member {String} folder
   */
  exports.prototype['folder'] = undefined;
  /**
   * The user's unique login. 
   * @member {String} userName
   */
  exports.prototype['userName'] = undefined;
  /**
   * The user's first name. 
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * The user's last name. 
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * The user's login code. This creates a corresponding [CfgAgentLogin](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgAgentLogin) on all switches in the **switchNames** collection. It's then assigned to the CfgPerson being created. 
   * @member {String} loginCode
   */
  exports.prototype['loginCode'] = undefined;
  /**
   * The user's password as plain text. 
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * A list of places (phones) available to the user (for multimedia only users). The list is written to the current [CfgPerson's](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson) \"htcc\" annex. For example, CfgPerson/userProperties/htcc/place = p1, p2, p3. 
   * @member {Array.<String>} placeNames
   */
  exports.prototype['placeNames'] = undefined;
  /**
   * Specifies if the user is an agent (default `true`). 
   * @member {Boolean} isAgent
   */
  exports.prototype['isAgent'] = undefined;
  /**
   * Specifies if call recording is enabled for the user in a SIP Cluster environment. 
   * @member {Boolean} callRecording
   */
  exports.prototype['callRecording'] = undefined;
  /**
   * @member {module:model/AddUserDataDataWwe} wwe
   */
  exports.prototype['wwe'] = undefined;
  /**
   * The switch names the user works on (where their DNs, agent logins and so on are created). 
   * @member {Array.<String>} switchNames
   */
  exports.prototype['switchNames'] = undefined;
  /**
   * A list of phone number descriptors used to create the user's DNs. For each phone number, a corresponding DN is created on all switches specified by **switchNames** and assigned to the specified place. 
   * @member {Array.<module:model/Extension>} phones
   */
  exports.prototype['phones'] = undefined;
  /**
   * Specifies whether to enable a SIP phone. This writes the corresponding information to the T-Server annex of the created DNs (see **sipPhoneType** below). 
   * @member {Boolean} supportSoftPhone
   */
  exports.prototype['supportSoftPhone'] = undefined;
  /**
   * The SIP phone type if you set the **supportSoftPhone** parameter to `true`. This specifies the SIP phone type and corresponding annex to be written to the DN's \"TServer\" section. * Disable CTI * Genesys SoftPhone (sip-cti-control: talk, hold, dtmf) * Genesys 420HT / AudioCodes 4xxHD (sip-cti-control: talk, hold) * Generic Phone (sip-cti-control: talk) * Genesys SoftPhone with WebRTC (sip-cti-control: talk,dtmf, dual-dialog-enabled: false) 
   * @member {module:model/AddUserDataData.SipPhoneTypeEnum} sipPhoneType
   */
  exports.prototype['sipPhoneType'] = undefined;
  /**
   * A list of skills to assign to the user. If the Provisioning API finds the corresponding skill, it assigns it to the user with the specified level. If not found, the API creates the skill and assigns it to the user. 
   * @member {Array.<module:model/Skill>} skills
   */
  exports.prototype['skills'] = undefined;
  /**
   * A list of agent groups to assign to the user. If a group doesn't exist, it is created by the Provisioning API. 
   * @member {Array.<String>} agentGroups
   */
  exports.prototype['agentGroups'] = undefined;
  /**
   * A list of access groups to assign to the user. If a group doesn't exist, it is **NOT** created by the Provisioning API. 
   * @member {Array.<String>} accessGroups
   */
  exports.prototype['accessGroups'] = undefined;
  /**
   * The user's voice mail. This is written to the user's CfgAgentLogin.userProperties.TServer.gvm_mailbox. 
   * @member {Number} voiceMail
   */
  exports.prototype['voiceMail'] = undefined;
  /**
   * The user's Wrap Up Time. This is configured for each [CfgAgentLogin](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgAgentLogin). 
   * @member {String} wrapUpTime
   */
  exports.prototype['wrapUpTime'] = undefined;
  /**
   * The name of a [CfgScript](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgScript) object of type 'Capacity Rule'. The Provisioning API assigns this object to the capacityRuleDBID attribute on the CfgPerson object. 
   * @member {String} capacityRule
   */
  exports.prototype['capacityRule'] = undefined;
  /**
   * The recording hierarchy for an agent specifies the access control applied to recordings of calls handled by that agent. See [Access control for Recording users](https://docs.genesys.com/Documentation/PSAAS/Public/Administrator/AccessControl) in the ***PureEngage Cloud Administrator's Guide*** for more information about Recording agent hierarchy, access groups, and partitioning. 
   * @member {String} recordingHierarchy
   */
  exports.prototype['recordingHierarchy'] = undefined;


  /**
   * Allowed values for the <code>sipPhoneType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SipPhoneTypeEnum = {
    /**
     * value: "DISABLE_CTI"
     * @const
     */
    "DISABLE_CTI": "DISABLE_CTI",
    /**
     * value: "GENESYS_SOFTPHONE"
     * @const
     */
    "GENESYS_SOFTPHONE": "GENESYS_SOFTPHONE",
    /**
     * value: "GENESYS_420HT_AUDIOCODES_4xxHD"
     * @const
     */
    "GENESYS_420HT_AUDIOCODES_4xxHD": "GENESYS_420HT_AUDIOCODES_4xxHD",
    /**
     * value: "GENERIC_PHONE"
     * @const
     */
    "GENERIC_PHONE": "GENERIC_PHONE",
    /**
     * value: "GENESYS_SOFTPHONE_WEBRTC"
     * @const
     */
    "GENESYS_SOFTPHONE_WEBRTC": "GENESYS_SOFTPHONE_WEBRTC"  };


  return exports;
}));


