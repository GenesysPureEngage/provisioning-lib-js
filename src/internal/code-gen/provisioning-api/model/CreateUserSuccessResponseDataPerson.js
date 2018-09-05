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
    define(['ApiClient', 'model/CreateUserSuccessResponseDataPersonCfgAgentInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateUserSuccessResponseDataPersonCfgAgentInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.CreateUserSuccessResponseDataPerson = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.CreateUserSuccessResponseDataPersonCfgAgentInfo);
  }
}(this, function(ApiClient, CreateUserSuccessResponseDataPersonCfgAgentInfo) {
  'use strict';




  /**
   * The CreateUserSuccessResponseDataPerson model module.
   * @module model/CreateUserSuccessResponseDataPerson
   * @version 9.0.000.26.2572
   */

  /**
   * Constructs a new <code>CreateUserSuccessResponseDataPerson</code>.
   * @alias module:model/CreateUserSuccessResponseDataPerson
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>CreateUserSuccessResponseDataPerson</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateUserSuccessResponseDataPerson} obj Optional instance to populate.
   * @return {module:model/CreateUserSuccessResponseDataPerson} The populated <code>CreateUserSuccessResponseDataPerson</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('DBID')) {
        obj['DBID'] = ApiClient.convertToType(data['DBID'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('isAdmin')) {
        obj['isAdmin'] = ApiClient.convertToType(data['isAdmin'], 'String');
      }
      if (data.hasOwnProperty('isAgent')) {
        obj['isAgent'] = ApiClient.convertToType(data['isAgent'], 'String');
      }
      if (data.hasOwnProperty('isExternalAuth')) {
        obj['isExternalAuth'] = ApiClient.convertToType(data['isExternalAuth'], 'String');
      }
      if (data.hasOwnProperty('passwordHashAlgorithm')) {
        obj['passwordHashAlgorithm'] = ApiClient.convertToType(data['passwordHashAlgorithm'], 'String');
      }
      if (data.hasOwnProperty('PasswordUpdatingDate')) {
        obj['PasswordUpdatingDate'] = ApiClient.convertToType(data['PasswordUpdatingDate'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('employeeID')) {
        obj['employeeID'] = ApiClient.convertToType(data['employeeID'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('userName')) {
        obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
      }
      if (data.hasOwnProperty('emailAddress')) {
        obj['emailAddress'] = ApiClient.convertToType(data['emailAddress'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('tenantDBID')) {
        obj['tenantDBID'] = ApiClient.convertToType(data['tenantDBID'], 'String');
      }
      if (data.hasOwnProperty('changePasswordOnNextLogin')) {
        obj['changePasswordOnNextLogin'] = ApiClient.convertToType(data['changePasswordOnNextLogin'], 'String');
      }
      if (data.hasOwnProperty('CfgAgentInfo')) {
        obj['CfgAgentInfo'] = CreateUserSuccessResponseDataPersonCfgAgentInfo.constructFromObject(data['CfgAgentInfo']);
      }
    }
    return obj;
  }

  /**
   * @member {String} DBID
   */
  exports.prototype['DBID'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} isAdmin
   */
  exports.prototype['isAdmin'] = undefined;
  /**
   * @member {String} isAgent
   */
  exports.prototype['isAgent'] = undefined;
  /**
   * @member {String} isExternalAuth
   */
  exports.prototype['isExternalAuth'] = undefined;
  /**
   * @member {String} passwordHashAlgorithm
   */
  exports.prototype['passwordHashAlgorithm'] = undefined;
  /**
   * @member {String} PasswordUpdatingDate
   */
  exports.prototype['PasswordUpdatingDate'] = undefined;
  /**
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {String} employeeID
   */
  exports.prototype['employeeID'] = undefined;
  /**
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * @member {String} userName
   */
  exports.prototype['userName'] = undefined;
  /**
   * @member {String} emailAddress
   */
  exports.prototype['emailAddress'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {String} tenantDBID
   */
  exports.prototype['tenantDBID'] = undefined;
  /**
   * @member {String} changePasswordOnNextLogin
   */
  exports.prototype['changePasswordOnNextLogin'] = undefined;
  /**
   * @member {module:model/CreateUserSuccessResponseDataPersonCfgAgentInfo} CfgAgentInfo
   */
  exports.prototype['CfgAgentInfo'] = undefined;



  return exports;
}));


