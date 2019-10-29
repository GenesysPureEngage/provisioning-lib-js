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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.GetStatisticDefinitionsResponseData = factory(root.ProvisioningApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetStatisticDefinitionsResponseData model module.
   * @module model/GetStatisticDefinitionsResponseData
   * @version 9.0.000.67.3932
   */

  /**
   * Constructs a new <code>GetStatisticDefinitionsResponseData</code>.
   * @alias module:model/GetStatisticDefinitionsResponseData
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>GetStatisticDefinitionsResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetStatisticDefinitionsResponseData} obj Optional instance to populate.
   * @return {module:model/GetStatisticDefinitionsResponseData} The populated <code>GetStatisticDefinitionsResponseData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('statusCode')) {
        obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Number');
      }
      if (data.hasOwnProperty('statisticDefinitions')) {
        obj['statisticDefinitions'] = ApiClient.convertToType(data['statisticDefinitions'], Object);
      }
    }
    return obj;
  }

  /**
   * Returns status coed of operation.
   * @member {Number} statusCode
   */
  exports.prototype['statusCode'] = undefined;
  /**
   * Returns statistic.
   * @member {Object} statisticDefinitions
   */
  exports.prototype['statisticDefinitions'] = undefined;



  return exports;
}));


