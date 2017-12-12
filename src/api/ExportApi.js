/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.05.1220
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiErrorResponse', 'model/ExportFileData', 'model/ExportFileResponse', 'model/ExportStatusResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiErrorResponse'), require('../model/ExportFileData'), require('../model/ExportFileResponse'), require('../model/ExportStatusResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.ExportApi = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.ApiErrorResponse, root.ProvisioningApi.ExportFileData, root.ProvisioningApi.ExportFileResponse, root.ProvisioningApi.ExportStatusResponse);
  }
}(this, function(ApiClient, ApiErrorResponse, ExportFileData, ExportFileResponse, ExportStatusResponse) {
  'use strict';

  /**
   * Export service.
   * @module api/ExportApi
   * @version 9.0.000.05.1220
   */

  /**
   * Constructs a new ExportApi. 
   * @alias module:api/ExportApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Export users.
     * Export the specified users with the properties you list in the **fields** parameter.
     * @param {module:model/ExportFileData} exportFileData Export File Data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ExportFileResponse} and HTTP response
     */
    this.exportFileWithHttpInfo = function(exportFileData) {
      var postBody = exportFileData;

      // verify the required parameter 'exportFileData' is set
      if (exportFileData === undefined || exportFileData === null) {
        throw new Error("Missing the required parameter 'exportFileData' when calling exportFile");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ExportFileResponse;

      return this.apiClient.callApi(
        '/export_users', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Export users.
     * Export the specified users with the properties you list in the **fields** parameter.
     * @param {module:model/ExportFileData} exportFileData Export File Data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ExportFileResponse}
     */
    this.exportFile = function(exportFileData) {
      return this.exportFileWithHttpInfo(exportFileData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get export status.
     * Check the status of the specified export and return the percentage complete.
     * @param {Number} id The ID of a previously started export.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ExportStatusResponse} and HTTP response
     */
    this.getExportStatusWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getExportStatus");
      }


      var pathParams = {
      };
      var queryParams = {
        'id': id,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ExportStatusResponse;

      return this.apiClient.callApi(
        '/export_users', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get export status.
     * Check the status of the specified export and return the percentage complete.
     * @param {Number} id The ID of a previously started export.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ExportStatusResponse}
     */
    this.getExportStatus = function(id) {
      return this.getExportStatusWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
