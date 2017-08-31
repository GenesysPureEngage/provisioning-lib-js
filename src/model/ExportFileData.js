/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.00.869
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ExportFileDataFilterParameters'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ExportFileDataFilterParameters'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.ExportFileData = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.ExportFileDataFilterParameters);
  }
}(this, function(ApiClient, ExportFileDataFilterParameters) {
  'use strict';




  /**
   * The ExportFileData model module.
   * @module model/ExportFileData
   * @version 9.0.000.00.869
   */

  /**
   * Constructs a new <code>ExportFileData</code>.
   * @alias module:model/ExportFileData
   * @class
   * @param fields {Array.<String>} Array of user property names to include  Effect: Only these names will be included in exported user structure 
   * @param fileName {String} File Name to save exported users.  Effect: Controls the file name to save. 
   * @param personDBIDs {Array.<String>} List of User IDs to export  Effect: Controls which users will be exported. 
   */
  var exports = function(fields, fileName, personDBIDs) {
    var _this = this;

    _this['fields'] = fields;
    _this['fileName'] = fileName;
    _this['personDBIDs'] = personDBIDs;

  };

  /**
   * Constructs a <code>ExportFileData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExportFileData} obj Optional instance to populate.
   * @return {module:model/ExportFileData} The populated <code>ExportFileData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fields')) {
        obj['fields'] = ApiClient.convertToType(data['fields'], ['String']);
      }
      if (data.hasOwnProperty('fileName')) {
        obj['fileName'] = ApiClient.convertToType(data['fileName'], 'String');
      }
      if (data.hasOwnProperty('personDBIDs')) {
        obj['personDBIDs'] = ApiClient.convertToType(data['personDBIDs'], ['String']);
      }
      if (data.hasOwnProperty('filterParameters')) {
        obj['filterParameters'] = ExportFileDataFilterParameters.constructFromObject(data['filterParameters']);
      }
    }
    return obj;
  }

  /**
   * Array of user property names to include  Effect: Only these names will be included in exported user structure 
   * @member {Array.<String>} fields
   */
  exports.prototype['fields'] = undefined;
  /**
   * File Name to save exported users.  Effect: Controls the file name to save. 
   * @member {String} fileName
   * @default 'users.csv'
   */
  exports.prototype['fileName'] = 'users.csv';
  /**
   * List of User IDs to export  Effect: Controls which users will be exported. 
   * @member {Array.<String>} personDBIDs
   */
  exports.prototype['personDBIDs'] = undefined;
  /**
   * @member {module:model/ExportFileDataFilterParameters} filterParameters
   */
  exports.prototype['filterParameters'] = undefined;



  return exports;
}));


