/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.85.4562
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.GetStateResponseData = factory(root.ProvisioningApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetStateResponseData model module.
   * @module model/GetStateResponseData
   * @version 9.0.000.85.4562
   */

  /**
   * Constructs a new <code>GetStateResponseData</code>.
   * @alias module:model/GetStateResponseData
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>GetStateResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetStateResponseData} obj Optional instance to populate.
   * @return {module:model/GetStateResponseData} The populated <code>GetStateResponseData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sessionId')) {
        obj['sessionId'] = ApiClient.convertToType(data['sessionId'], 'String');
      }
      if (data.hasOwnProperty('fastAPIEnabled')) {
        obj['fastAPIEnabled'] = ApiClient.convertToType(data['fastAPIEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('objectCacheEnabled')) {
        obj['objectCacheEnabled'] = ApiClient.convertToType(data['objectCacheEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('multiIdpSupport')) {
        obj['multiIdpSupport'] = ApiClient.convertToType(data['multiIdpSupport'], 'Boolean');
      }
      if (data.hasOwnProperty('cometEngine')) {
        obj['cometEngine'] = ApiClient.convertToType(data['cometEngine'], 'String');
      }
      if (data.hasOwnProperty('asyncIOEnabled')) {
        obj['asyncIOEnabled'] = ApiClient.convertToType(data['asyncIOEnabled'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Current session ID
   * @member {String} sessionId
   */
  exports.prototype['sessionId'] = undefined;
  /**
   * The provisioning service uses Fast API features of the configuration service
   * @member {Boolean} fastAPIEnabled
   */
  exports.prototype['fastAPIEnabled'] = undefined;
  /**
   * The provisioning service uses internal cache for configuration objects
   * @member {Boolean} objectCacheEnabled
   */
  exports.prototype['objectCacheEnabled'] = undefined;
  /**
   * Multiple IDP SAML authorization is enabled
   * @member {Boolean} multiIdpSupport
   */
  exports.prototype['multiIdpSupport'] = undefined;
  /**
   * Name of cometEngine
   * @member {String} cometEngine
   */
  exports.prototype['cometEngine'] = undefined;
  /**
   * Returns is enabled asyncIO
   * @member {Boolean} asyncIOEnabled
   */
  exports.prototype['asyncIOEnabled'] = undefined;



  return exports;
}));


