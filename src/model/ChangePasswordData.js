/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.00.813
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.ChangePasswordData = factory(root.ProvisioningApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ChangePasswordData model module.
   * @module model/ChangePasswordData
   * @version 9.0.000.00.813
   */

  /**
   * Constructs a new <code>ChangePasswordData</code>.
   * @alias module:model/ChangePasswordData
   * @class
   * @param domainUsername {String} User unique login in form: domain.com\\login 
   * @param newPassword {String} New password as plain text. 
   * @param oldPassword {String} Old password as plain text. 
   */
  var exports = function(domainUsername, newPassword, oldPassword) {
    var _this = this;

    _this['domain_username'] = domainUsername;
    _this['newPassword'] = newPassword;
    _this['oldPassword'] = oldPassword;
  };

  /**
   * Constructs a <code>ChangePasswordData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChangePasswordData} obj Optional instance to populate.
   * @return {module:model/ChangePasswordData} The populated <code>ChangePasswordData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('domain_username')) {
        obj['domain_username'] = ApiClient.convertToType(data['domain_username'], 'String');
      }
      if (data.hasOwnProperty('newPassword')) {
        obj['newPassword'] = ApiClient.convertToType(data['newPassword'], 'String');
      }
      if (data.hasOwnProperty('oldPassword')) {
        obj['oldPassword'] = ApiClient.convertToType(data['oldPassword'], 'String');
      }
    }
    return obj;
  }

  /**
   * User unique login in form: domain.com\\login 
   * @member {String} domain_username
   */
  exports.prototype['domain_username'] = undefined;
  /**
   * New password as plain text. 
   * @member {String} newPassword
   */
  exports.prototype['newPassword'] = undefined;
  /**
   * Old password as plain text. 
   * @member {String} oldPassword
   */
  exports.prototype['oldPassword'] = undefined;



  return exports;
}));


