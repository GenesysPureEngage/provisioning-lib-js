/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model.  The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.00.722
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
    root.ProvisioningApi.GetImportStatusResponseData = factory(root.ProvisioningApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetImportStatusResponseData model module.
   * @module model/GetImportStatusResponseData
   * @version 9.0.000.00.722
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
        obj['failed'] = ApiClient.convertToType(data['failed'], ['String']);
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
   * Active importers IDs.
   * @member {Array.<String>} activeImporters
   */
  exports.prototype['activeImporters'] = undefined;
  /**
   * Admin login.
   * @member {String} adminName
   */
  exports.prototype['adminName'] = undefined;
  /**
   * Array of errors during import.
   * @member {Array.<String>} failed
   */
  exports.prototype['failed'] = undefined;
  /**
   * Last object name processed.
   * @member {String} lastEntity
   */
  exports.prototype['lastEntity'] = undefined;
  /**
   * Current operation.
   * @member {String} operation
   */
  exports.prototype['operation'] = undefined;
  /**
   * Sheet name processed.
   * @member {String} sheetName
   */
  exports.prototype['sheetName'] = undefined;
  /**
   * true if user pressed Stop Import
   * @member {Boolean} stopRequested
   */
  exports.prototype['stopRequested'] = undefined;
  /**
   * true if import stopped.
   * @member {Boolean} stopped
   */
  exports.prototype['stopped'] = undefined;
  /**
   * Number of records processed successfully.
   * @member {Number} succeedCount
   */
  exports.prototype['succeedCount'] = undefined;
  /**
   * Number of records processed total.
   * @member {Number} totalCount
   */
  exports.prototype['totalCount'] = undefined;



  return exports;
}));

