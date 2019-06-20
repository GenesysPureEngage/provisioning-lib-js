/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.53.3367
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
    define(['ApiClient', 'model/ApiErrorResponse', 'model/CheckPostMigrateStatistic', 'model/DeleteAgentStatisticResponse', 'model/DeleteQueueStatisticResponse', 'model/GetExportStatisticDefinitions', 'model/GetStatisticDefinitionsResponse', 'model/GetSubResponse', 'model/PostImportStatisticDefinitions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiErrorResponse'), require('../model/CheckPostMigrateStatistic'), require('../model/DeleteAgentStatisticResponse'), require('../model/DeleteQueueStatisticResponse'), require('../model/GetExportStatisticDefinitions'), require('../model/GetStatisticDefinitionsResponse'), require('../model/GetSubResponse'), require('../model/PostImportStatisticDefinitions'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.StatisticsApi = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.ApiErrorResponse, root.ProvisioningApi.CheckPostMigrateStatistic, root.ProvisioningApi.DeleteAgentStatisticResponse, root.ProvisioningApi.DeleteQueueStatisticResponse, root.ProvisioningApi.GetExportStatisticDefinitions, root.ProvisioningApi.GetStatisticDefinitionsResponse, root.ProvisioningApi.GetSubResponse, root.ProvisioningApi.PostImportStatisticDefinitions);
  }
}(this, function(ApiClient, ApiErrorResponse, CheckPostMigrateStatistic, DeleteAgentStatisticResponse, DeleteQueueStatisticResponse, GetExportStatisticDefinitions, GetStatisticDefinitionsResponse, GetSubResponse, PostImportStatisticDefinitions) {
  'use strict';

  /**
   * Statistics service.
   * @module api/StatisticsApi
   * @version 9.0.000.53.3367
   */

  /**
   * Constructs a new StatisticsApi. 
   * @alias module:api/StatisticsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get migrate check for conflicts.
     * Get migrate check for conflicts
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetSubResponse} and HTTP response
     */
    this.checkMigrateConflictsWithHttpInfo = function() {
      var postBody = null;


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
      var returnType = GetSubResponse;

      return this.apiClient.callApi(
        '/statistic-definitions/migrate-check-for-conflicts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get migrate check for conflicts.
     * Get migrate check for conflicts
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetSubResponse}
     */
    this.checkMigrateConflicts = function() {
      return this.checkMigrateConflictsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Post statistic migrate.
     * Post statistic migrate
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CheckPostMigrateStatistic} and HTTP response
     */
    this.checkPostMigrateStatisticWithHttpInfo = function() {
      var postBody = null;


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
      var returnType = CheckPostMigrateStatistic;

      return this.apiClient.callApi(
        '/statistic-definitions/migrate', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Post statistic migrate.
     * Post statistic migrate
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CheckPostMigrateStatistic}
     */
    this.checkPostMigrateStatistic = function() {
      return this.checkPostMigrateStatisticWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete agent object statistic.
     * Delete agent object statistic
     * @param {String} _object The name of object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteAgentStatisticResponse} and HTTP response
     */
    this.deleteAgentStatisticWithHttpInfo = function(_object) {
      var postBody = null;

      // verify the required parameter '_object' is set
      if (_object === undefined || _object === null) {
        throw new Error("Missing the required parameter '_object' when calling deleteAgentStatistic");
      }


      var pathParams = {
        'object': _object
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
      var returnType = DeleteAgentStatisticResponse;

      return this.apiClient.callApi(
        '/statistic-definitions/Agent/{object}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete agent object statistic.
     * Delete agent object statistic
     * @param {String} _object The name of object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteAgentStatisticResponse}
     */
    this.deleteAgentStatistic = function(_object) {
      return this.deleteAgentStatisticWithHttpInfo(_object)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete queue statistic.
     * Delete queue statistic
     * @param {String} _object The name of object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteQueueStatisticResponse} and HTTP response
     */
    this.deleteQueueStatisticWithHttpInfo = function(_object) {
      var postBody = null;

      // verify the required parameter '_object' is set
      if (_object === undefined || _object === null) {
        throw new Error("Missing the required parameter '_object' when calling deleteQueueStatistic");
      }


      var pathParams = {
        'object': _object
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
      var returnType = DeleteQueueStatisticResponse;

      return this.apiClient.callApi(
        '/statistic-definitions/Queue/{object}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete queue statistic.
     * Delete queue statistic
     * @param {String} _object The name of object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteQueueStatisticResponse}
     */
    this.deleteQueueStatistic = function(_object) {
      return this.deleteQueueStatisticWithHttpInfo(_object)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get export statistic definitions.
     * Get export statistic definitions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetExportStatisticDefinitions} and HTTP response
     */
    this.getExportStatisticDefinitionsWithHttpInfo = function() {
      var postBody = null;


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
      var returnType = GetExportStatisticDefinitions;

      return this.apiClient.callApi(
        '/export-statistic-definitions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get export statistic definitions.
     * Get export statistic definitions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetExportStatisticDefinitions}
     */
    this.getExportStatisticDefinitions = function() {
      return this.getExportStatisticDefinitionsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get statistic definitions.
     * Returns statistic definitions records.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetStatisticDefinitionsResponse} and HTTP response
     */
    this.getStatisticDefinitionsWithHttpInfo = function() {
      var postBody = null;


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
      var returnType = GetStatisticDefinitionsResponse;

      return this.apiClient.callApi(
        '/statistic-definitions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get statistic definitions.
     * Returns statistic definitions records.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetStatisticDefinitionsResponse}
     */
    this.getStatisticDefinitions = function() {
      return this.getStatisticDefinitionsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Post import statistic definitions.
     * Post import statistic definitions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostImportStatisticDefinitions} and HTTP response
     */
    this.postImportStatisticDefinitionsWithHttpInfo = function() {
      var postBody = null;


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
      var returnType = PostImportStatisticDefinitions;

      return this.apiClient.callApi(
        '/import-statistic-definitions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Post import statistic definitions.
     * Post import statistic definitions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostImportStatisticDefinitions}
     */
    this.postImportStatisticDefinitions = function() {
      return this.postImportStatisticDefinitionsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Post statistic definitions.
     * Returns statistic definitions records.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetStatisticDefinitionsResponse} and HTTP response
     */
    this.postStatisticDefinitionsWithHttpInfo = function() {
      var postBody = null;


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
      var returnType = GetStatisticDefinitionsResponse;

      return this.apiClient.callApi(
        '/statistic-definitions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Post statistic definitions.
     * Returns statistic definitions records.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetStatisticDefinitionsResponse}
     */
    this.postStatisticDefinitions = function() {
      return this.postStatisticDefinitionsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
