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
    root.ProvisioningApi.GetImportStatusResponseData = factory(root.ProvisioningApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetImportStatusResponseData model module.
   * @module model/GetImportStatusResponseData
   * @version 9.0.000.85.4562
   */

  /**
   * Constructs a new <code>GetImportStatusResponseData</code>.
   * @alias module:model/GetImportStatusResponseData
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>GetImportStatusResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetImportStatusResponseData} obj Optional instance to populate.
   * @return {module:model/GetImportStatusResponseData} The populated <code>GetImportStatusResponseData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('activeImporters')) {
        obj['activeImporters'] = ApiClient.convertToType(data['activeImporters'], ['String']);
      }
      if (data.hasOwnProperty('adminName')) {
        obj['adminName'] = ApiClient.convertToType(data['adminName'], 'String');
      }
      if (data.hasOwnProperty('failed')) {
        obj['failed'] = ApiClient.convertToType(data['failed'], [Object]);
      }
      if (data.hasOwnProperty('lastEntity')) {
        obj['lastEntity'] = ApiClient.convertToType(data['lastEntity'], 'String');
      }
      if (data.hasOwnProperty('operation')) {
        obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
      }
      if (data.hasOwnProperty('sheetName')) {
        obj['sheetName'] = ApiClient.convertToType(data['sheetName'], 'String');
      }
      if (data.hasOwnProperty('stopRequested')) {
        obj['stopRequested'] = ApiClient.convertToType(data['stopRequested'], 'Boolean');
      }
      if (data.hasOwnProperty('stopped')) {
        obj['stopped'] = ApiClient.convertToType(data['stopped'], 'Boolean');
      }
      if (data.hasOwnProperty('succeedCount')) {
        obj['succeedCount'] = ApiClient.convertToType(data['succeedCount'], 'Number');
      }
      if (data.hasOwnProperty('totalCount')) {
        obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The IDs (usernames) of all administrators currently running a bulk import.
   * @member {Array.<String>} activeImporters
   */
  exports.prototype['activeImporters'] = undefined;
  /**
   * The login name of an administrator for the tenant.
   * @member {String} adminName
   */
  exports.prototype['adminName'] = undefined;
  /**
   * An array of errors that occurred during the import.
   * @member {Array.<Object>} failed
   */
  exports.prototype['failed'] = undefined;
  /**
   * The name of the last object processed.
   * @member {String} lastEntity
   */
  exports.prototype['lastEntity'] = undefined;
  /**
   * The name of the current operation.
   * @member {String} operation
   */
  exports.prototype['operation'] = undefined;
  /**
   * The name of the sheet currently being processed in the CSV/XLS file.
   * @member {String} sheetName
   */
  exports.prototype['sheetName'] = undefined;
  /**
   * This value is set to `true` if the user pressed **Stop Import**.
   * @member {Boolean} stopRequested
   */
  exports.prototype['stopRequested'] = undefined;
  /**
   * This value is set to `true` if the import is stopped.
   * @member {Boolean} stopped
   */
  exports.prototype['stopped'] = undefined;
  /**
   * The number of successfully processed records.
   * @member {Number} succeedCount
   */
  exports.prototype['succeedCount'] = undefined;
  /**
   * The total number of processed records.
   * @member {Number} totalCount
   */
  exports.prototype['totalCount'] = undefined;



  return exports;
}));


