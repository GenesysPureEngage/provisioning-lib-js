/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.26.2572
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Extension', 'model/Skill', 'model/UpdateUserDataDataWwe'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Extension'), require('./Skill'), require('./UpdateUserDataDataWwe'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.UpdateUserDataData = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.Extension, root.ProvisioningApi.Skill, root.ProvisioningApi.UpdateUserDataDataWwe);
  }
}(this, function(ApiClient, Extension, Skill, UpdateUserDataDataWwe) {
  'use strict';




  /**
   * The UpdateUserDataData model module.
   * @module model/UpdateUserDataData
   * @version 9.0.000.26.2572
   */

  /**
   * Constructs a new <code>UpdateUserDataData</code>.
   * @alias module:model/UpdateUserDataData
   * @class
   * @param userName {String} The user's unique login. 
   * @param firstName {String} The user's first name. 
   * @param lastName {String} User's last name. 
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
   * Constructs a <code>UpdateUserDataData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateUserDataData} obj Optional instance to populate.
   * @return {module:model/UpdateUserDataData} The populated <code>UpdateUserDataData</code> instance.
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
      if (data.hasOwnProperty('callRecording')) {
        obj['callRecording'] = ApiClient.convertToType(data['callRecording'], 'Boolean');
      }
      if (data.hasOwnProperty('wwe')) {
        obj['wwe'] = UpdateUserDataDataWwe.constructFromObject(data['wwe']);
      }
      if (data.hasOwnProperty('switchNames')) {
        obj['switchNames'] = ApiClient.convertToType(data['switchNames'], ['String']);
      }
      if (data.hasOwnProperty('deletedSwitchNames')) {
        obj['deletedSwitchNames'] = ApiClient.convertToType(data['deletedSwitchNames'], ['String']);
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
      if (data.hasOwnProperty('deletedSkills')) {
        obj['deletedSkills'] = ApiClient.convertToType(data['deletedSkills'], ['String']);
      }
      if (data.hasOwnProperty('agentGroups')) {
        obj['agentGroups'] = ApiClient.convertToType(data['agentGroups'], ['String']);
      }
      if (data.hasOwnProperty('deletedAgentGroups')) {
        obj['deletedAgentGroups'] = ApiClient.convertToType(data['deletedAgentGroups'], ['String']);
      }
      if (data.hasOwnProperty('accessGroups')) {
        obj['accessGroups'] = ApiClient.convertToType(data['accessGroups'], ['String']);
      }
      if (data.hasOwnProperty('deletedAccessGroups')) {
        obj['deletedAccessGroups'] = ApiClient.convertToType(data['deletedAccessGroups'], ['String']);
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
    }
    return obj;
  }

  /**
   * If `true`, the user is asked to change their password on first login. 
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
   * User's last name. 
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * The user's login code. This creates a corresponding [CfgAgentLogin](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgAgentLogin) on all switches in the **switchNames** collection. It's then assigned to the CfgPerson being modified. 
   * @member {String} loginCode
   */
  exports.prototype['loginCode'] = undefined;
  /**
   * The user's password as plain text. 
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * A list of places available to the user (for multimedia only users). The list is written to the current ([CfgPerson's](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson)) \"htcc\" annex. For example, CfgPerson/userProperties/htcc/place = p1, p2, p3. 
   * @member {Array.<String>} placeNames
   */
  exports.prototype['placeNames'] = undefined;
  /**
   * Specifies if call recording is enabled for the user in a SIP Cluster environment. 
   * @member {Boolean} callRecording
   */
  exports.prototype['callRecording'] = undefined;
  /**
   * @member {module:model/UpdateUserDataDataWwe} wwe
   */
  exports.prototype['wwe'] = undefined;
  /**
   * The switch names the user will work on (where their DNs, agent logins and so on are created). 
   * @member {Array.<String>} switchNames
   */
  exports.prototype['switchNames'] = undefined;
  /**
   * The switch names the user will not work on (where their DNs, agent logins and so on are not created). 
   * @member {Array.<String>} deletedSwitchNames
   */
  exports.prototype['deletedSwitchNames'] = undefined;
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
   * Specifies the SIP phone type if you set the **supportSoftPhone** parameter to `true`. This specifies the SIP phone type and corresponding annex to be written to the DN's \"TServer\" section. * Disable CTI * Genesys SoftPhone (sip-cti-control: talk, hold, dtmf) * Genesys 420HT / AudioCodes 4xxHD (sip-cti-control: talk, hold) * Generic Phone (sip-cti-control: talk) 
   * @member {module:model/UpdateUserDataData.SipPhoneTypeEnum} sipPhoneType
   */
  exports.prototype['sipPhoneType'] = undefined;
  /**
   * A list of skills to assign to the user. If the Provisioning API finds the corresponding skill, it assigns it to the user with the specified level. If not found, the API creates the skill and assigns it to the user. 
   * @member {Array.<module:model/Skill>} skills
   */
  exports.prototype['skills'] = undefined;
  /**
   * A list of skills to delete from the user. 
   * @member {Array.<String>} deletedSkills
   */
  exports.prototype['deletedSkills'] = undefined;
  /**
   * A list of agent groups that the user should be assigned to. If a group doesn't exist, it's created by the Provisioning API. 
   * @member {Array.<String>} agentGroups
   */
  exports.prototype['agentGroups'] = undefined;
  /**
   * A list of agent groups that the user should be deleted from. 
   * @member {Array.<String>} deletedAgentGroups
   */
  exports.prototype['deletedAgentGroups'] = undefined;
  /**
   * A list of access groups that the user should belong to. If a group doesn't exist, it is **NOT** created by the Provisioning API. 
   * @member {Array.<String>} accessGroups
   */
  exports.prototype['accessGroups'] = undefined;
  /**
   * A list of access groups that the user should be deleted from. 
   * @member {Array.<String>} deletedAccessGroups
   */
  exports.prototype['deletedAccessGroups'] = undefined;
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
   * Name of CfgScript object of type Capacity Rule that will be assigned to  assigns to capacityRuleDBID in CfgPerson 
   * @member {String} capacityRule
   */
  exports.prototype['capacityRule'] = undefined;


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
    "GENERIC_PHONE": "GENERIC_PHONE"  };


  return exports;
}));


