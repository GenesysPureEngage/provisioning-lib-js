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
    root.ProvisioningApi.Extension = factory(root.ProvisioningApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Extension model module.
   * @module model/Extension
   * @version 9.0.000.00.813
   */

  /**
   * Constructs a new <code>Extension</code>.
   * @alias module:model/Extension
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Extension</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Extension} obj Optional instance to populate.
   * @return {module:model/Extension} The populated <code>Extension</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('placeName')) {
        obj['placeName'] = ApiClient.convertToType(data['placeName'], 'String');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('isDefault')) {
        obj['isDefault'] = ApiClient.convertToType(data['isDefault'], 'Boolean');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
    }
    return obj;
  }

  /**
   * Name of the corresponding place name
   * @member {String} placeName
   */
  exports.prototype['placeName'] = undefined;
  /**
   * Phone number
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * true/false
   * @member {Boolean} isDefault
   */
  exports.prototype['isDefault'] = undefined;
  /**
   * Desrciption (Mobile, Office)
   * @member {String} description
   */
  exports.prototype['description'] = undefined;



  return exports;
}));


