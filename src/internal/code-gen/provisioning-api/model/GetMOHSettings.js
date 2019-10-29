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
    define(['ApiClient', 'model/GetConfigResponseStatus', 'model/GetMOHSettingsData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetConfigResponseStatus'), require('./GetMOHSettingsData'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.GetMOHSettings = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.GetConfigResponseStatus, root.ProvisioningApi.GetMOHSettingsData);
  }
}(this, function(ApiClient, GetConfigResponseStatus, GetMOHSettingsData) {
  'use strict';




  /**
   * The GetMOHSettings model module.
   * @module model/GetMOHSettings
   * @version 9.0.000.67.3932
   */

  /**
   * Constructs a new <code>GetMOHSettings</code>.
   * @alias module:model/GetMOHSettings
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>GetMOHSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetMOHSettings} obj Optional instance to populate.
   * @return {module:model/GetMOHSettings} The populated <code>GetMOHSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = GetConfigResponseStatus.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = GetMOHSettingsData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/GetConfigResponseStatus} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/GetMOHSettingsData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


