/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model.  The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.00.708
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Extension', 'model/Skill', 'model/UsersPutWwe'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Extension'), require('./Skill'), require('./UsersPutWwe'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.UsersPut = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.Extension, root.ProvisioningApi.Skill, root.ProvisioningApi.UsersPutWwe);
  }
}(this, function(ApiClient, Extension, Skill, UsersPutWwe) {
  'use strict';




  /**
   * The UsersPut model module.
   * @module model/UsersPut
   * @version 9.0.000.00.708
   */

  /**
   * Constructs a new <code>UsersPut</code>.
   * @alias module:model/UsersPut
   * @class
   * @param userName {String} User unique login. Controls the value of the corresponding CfgPerson attribute 
   * @param firstName {String} User's first name.  Effect: Controls the value of the corresponding CfgPerson attribute 
   * @param lastName {String} User's last name.  Effect: Controls the value of the corresponding CfgPerson attribute 
   * @param password {String} Password as plain text.  Effect: Controls the value of the corresponding CfgPerson attribute 
   */
  var exports = function(userName, firstName, lastName, password) {
    var _this = this;






    _this['userName'] = userName;
    _this['firstName'] = firstName;
    _this['lastName'] = lastName;

    _this['password'] = password;















  };

  /**
   * Constructs a <code>UsersPut</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsersPut} obj Optional instance to populate.
   * @return {module:model/UsersPut} The populated <code>UsersPut</code> instance.
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
      if (data.hasOwnProperty('wwe')) {
        obj['wwe'] = UsersPutWwe.constructFromObject(data['wwe']);
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
    }
    return obj;
  }

  /**
   * if 'true', user will be asked to change password on first login.  Effect: Controls the value of the corresponding CfgPerson attribute 
   * @member {Boolean} changePasswordOnNextLogin
   */
  exports.prototype['changePasswordOnNextLogin'] = undefined;
  /**
   * User's email.  Effect: Controls the value of the corresponding CfgPerson attribute 
   * @member {String} emailAddress
   */
  exports.prototype['emailAddress'] = undefined;
  /**
   * user's Employee ID.  Effect: Controls the value of the corresponding CfgPerson attribute 
   * @member {String} employeeID
   */
  exports.prototype['employeeID'] = undefined;
  /**
   * External ID.  Effect: Controls the value of the corresponding CfgPerson attribute 
   * @member {String} externalID
   */
  exports.prototype['externalID'] = undefined;
  /**
   * User is enabled or disabled.  Effect: Controls the value of the corresponding CfgPerson attribute 
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * User unique login. Controls the value of the corresponding CfgPerson attribute 
   * @member {String} userName
   */
  exports.prototype['userName'] = undefined;
  /**
   * User's first name.  Effect: Controls the value of the corresponding CfgPerson attribute 
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * User's last name.  Effect: Controls the value of the corresponding CfgPerson attribute 
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * The user's login code.  Effect: A corresponding CfgAgentLogin will be created on all switches in the \"switchNames\" collection. It will then be assigned to the CfgPerson that's being modified. 
   * @member {String} loginCode
   */
  exports.prototype['loginCode'] = undefined;
  /**
   * Password as plain text.  Effect: Controls the value of the corresponding CfgPerson attribute 
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * A list of places available to the user (for multimedia only users).  Effect: The list is written to the current CfgPerson's \"htcc\" annex. e.g. CfgPerson/userProperties/htcc/place = p1, p2, p3 
   * @member {Array.<String>} placeNames
   */
  exports.prototype['placeNames'] = undefined;
  /**
   * @member {module:model/UsersPutWwe} wwe
   */
  exports.prototype['wwe'] = undefined;
  /**
   * The switch names that the user will work on.  Effect: A list of switches where the user's telephony objects will be created (i.e. dns, agent logins) 
   * @member {Array.<String>} switchNames
   */
  exports.prototype['switchNames'] = undefined;
  /**
   * The switch names that the user will NOT work on.  Effect: A list of switches where the user's telephony objects will NOT be created (i.e. dns, agent logins) 
   * @member {Array.<String>} deletedSwitchNames
   */
  exports.prototype['deletedSwitchNames'] = undefined;
  /**
   * A list of phone number descriptors used to create the user's DNs.  Effect: For each phone number, a corresponding DN will be created on all of the switches specified by \"switchNames\" and assigned to the specified place. 
   * @member {Array.<module:model/Extension>} phones
   */
  exports.prototype['phones'] = undefined;
  /**
   * Enable SIP Phone, true/false.  Effect: Writes corresponding information to the TServer annex of the created DNs (see sipPhoneType) 
   * @member {Boolean} supportSoftPhone
   */
  exports.prototype['supportSoftPhone'] = undefined;
  /**
   * Specifies the sip phone typed if supportSoftPhone = true.  Effect: Specifies  the sip phone type and corresponding annex to be written to the DN's \"TServer\" section 
   * @member {module:model/UsersPut.SipPhoneTypeEnum} sipPhoneType
   */
  exports.prototype['sipPhoneType'] = undefined;
  /**
   * List of Skills to assign to the user.  Effect: The list contains a collection of skill descriptors. If the corresponding skill is found, it is assigned to the user with the specified level. If it is not found, the skill is created and then assigned. 
   * @member {Array.<module:model/Skill>} skills
   */
  exports.prototype['skills'] = undefined;
  /**
   * List of Skills to delete from the user.  Effect: The list contains a collection of skill names. If the corresponding skill is found, it is deleted from the user. 
   * @member {Array.<String>} deletedSkills
   */
  exports.prototype['deletedSkills'] = undefined;
  /**
   * List of agent groups that the user should be assigned to.  Effect: The user will be assigned to each group that already exists. If a particular group is not already in the system it will be created. 
   * @member {Array.<String>} agentGroups
   */
  exports.prototype['agentGroups'] = undefined;
  /**
   * List of agent groups that the user should be deleted from.  Effect: The user will be deleted from each group that already exists. 
   * @member {Array.<String>} deletedAgentGroups
   */
  exports.prototype['deletedAgentGroups'] = undefined;
  /**
   * List of access groups that the user should belong to.  Effect: The user will be assigned to each group that can be located. If a group does not already exist, it will NOT be created. 
   * @member {Array.<String>} accessGroups
   */
  exports.prototype['accessGroups'] = undefined;
  /**
   * List of access groups that the user should be deleted from.  Effect: The user will be deleted from each group that can be located. 
   * @member {Array.<String>} deletedAccessGroups
   */
  exports.prototype['deletedAccessGroups'] = undefined;
  /**
   * User's Voice Mail.  Effect: Written to the user's CfgAgentLogin.userProperties.TServer.gvm_mailbox 
   * @member {Number} voiceMail
   */
  exports.prototype['voiceMail'] = undefined;
  /**
   * User's Wrap Up Time.  Effect: Configured for each CfgAgentLogin 
   * @member {String} wrapUpTime
   */
  exports.prototype['wrapUpTime'] = undefined;


  /**
   * Allowed values for the <code>sipPhoneType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SipPhoneTypeEnum = {
    /**
     * value: "Disable CTI"
     * @const
     */
    "CTI": "Disable CTI"  };


  return exports;
}));


