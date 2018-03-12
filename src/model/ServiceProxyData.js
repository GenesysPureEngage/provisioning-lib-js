/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.08.1664
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.ServiceProxyData = factory(root.ProvisioningApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ServiceProxyData model module.
   * @module model/ServiceProxyData
   * @version 9.0.000.08.1664
   */

  /**
   * Constructs a new <code>ServiceProxyData</code>.
   * @alias module:model/ServiceProxyData
   * @class
   * @param service {String} Service name
   * @param method {String} Method name
   */
  var exports = function(service, method) {
    var _this = this;

    _this['service'] = service;
    _this['method'] = method;

  };

  /**
   * Constructs a <code>ServiceProxyData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ServiceProxyData} obj Optional instance to populate.
   * @return {module:model/ServiceProxyData} The populated <code>ServiceProxyData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('service')) {
        obj['service'] = ApiClient.convertToType(data['service'], 'String');
      }
      if (data.hasOwnProperty('method')) {
        obj['method'] = ApiClient.convertToType(data['method'], 'String');
      }
      if (data.hasOwnProperty('args')) {
        obj['args'] = ApiClient.convertToType(data['args'], Object);
      }
    }
    return obj;
  }

  /**
   * Service name
   * @member {String} service
   */
  exports.prototype['service'] = undefined;
  /**
   * Method name
   * @member {String} method
   */
  exports.prototype['method'] = undefined;
  /**
   * Optional method arguments array
   * @member {Object} args
   */
  exports.prototype['args'] = undefined;



  return exports;
}));


