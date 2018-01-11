/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.06.1357
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiAsyncSuccessResponse', 'model/ApiErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiAsyncSuccessResponse'), require('../model/ApiErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.OperationsApi = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.ApiAsyncSuccessResponse, root.ProvisioningApi.ApiErrorResponse);
  }
}(this, function(ApiClient, ApiAsyncSuccessResponse, ApiErrorResponse) {
  'use strict';

  /**
   * Operations service.
   * @module api/OperationsApi
   * @version 9.0.000.06.1357
   */

  /**
   * Constructs a new OperationsApi. 
   * @alias module:api/OperationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get used skills.
     * Get all [CfgSkill](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgSkill) that are linked to existing [CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson) objects.
     * @param {Object} opts Optional parameters
     * @param {String} opts.aioId A unique ID generated on the client (browser) when sending an API request that returns an asynchronous response.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiAsyncSuccessResponse} and HTTP response
     */
    this.getUsedSkillsAsyncWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        '_aioId': opts['aioId'],
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
      var returnType = ApiAsyncSuccessResponse;

      return this.apiClient.callApi(
        '/operations/get-used-skills', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get used skills.
     * Get all [CfgSkill](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgSkill) that are linked to existing [CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson) objects.
     * @param {Object} opts Optional parameters
     * @param {String} opts.aioId A unique ID generated on the client (browser) when sending an API request that returns an asynchronous response.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiAsyncSuccessResponse}
     */
    this.getUsedSkillsAsync = function(opts) {
      return this.getUsedSkillsAsyncWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get users.
     * Get [CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson) objects based on the specified filters.
     * @param {Object} opts Optional parameters
     * @param {String} opts.aioId A unique ID generated on the client (browser) when sending an API request that returns an asynchronous response.
     * @param {Number} opts.limit Limit the number of users the Provisioning API should return.
     * @param {Number} opts.offset The number of matches the Provisioning API should skip in the returned users.
     * @param {module:model/String} opts.order The sort order.
     * @param {String} opts.sortBy A comma-separated list of fields to sort on. Possible values are firstName, lastName, and userName. 
     * @param {module:model/String} opts.filterName The name of a filter to use on the results.
     * @param {String} opts.filterParameters A part of the users first or last name, if you use the FirstNameOrLastNameMatches filter. 
     * @param {String} opts.roles Return only return users who have these Workspace Web Edition roles. The roles can be specified in a comma-separated list. Possible values are ROLE_AGENT and ROLE_ADMIN,ROLE_SUPERVISOR. 
     * @param {String} opts.skills Return only users who have these skills. The skills can be specified in a comma-separated list. 
     * @param {Boolean} opts.userEnabled Return only enabled or disabled users.
     * @param {module:model/String} opts.userValid Return only valid or invalid users.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiAsyncSuccessResponse} and HTTP response
     */
    this.getUsersAsyncWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        '_aioId': opts['aioId'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'order': opts['order'],
        'sortBy': opts['sortBy'],
        'filterName': opts['filterName'],
        'filterParameters': opts['filterParameters'],
        'roles': opts['roles'],
        'skills': opts['skills'],
        'userEnabled': opts['userEnabled'],
        'userValid': opts['userValid'],
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
      var returnType = ApiAsyncSuccessResponse;

      return this.apiClient.callApi(
        '/operations/get-users', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get users.
     * Get [CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson) objects based on the specified filters.
     * @param {Object} opts Optional parameters
     * @param {String} opts.aioId A unique ID generated on the client (browser) when sending an API request that returns an asynchronous response.
     * @param {Number} opts.limit Limit the number of users the Provisioning API should return.
     * @param {Number} opts.offset The number of matches the Provisioning API should skip in the returned users.
     * @param {module:model/String} opts.order The sort order.
     * @param {String} opts.sortBy A comma-separated list of fields to sort on. Possible values are firstName, lastName, and userName. 
     * @param {module:model/String} opts.filterName The name of a filter to use on the results.
     * @param {String} opts.filterParameters A part of the users first or last name, if you use the FirstNameOrLastNameMatches filter. 
     * @param {String} opts.roles Return only return users who have these Workspace Web Edition roles. The roles can be specified in a comma-separated list. Possible values are ROLE_AGENT and ROLE_ADMIN,ROLE_SUPERVISOR. 
     * @param {String} opts.skills Return only users who have these skills. The skills can be specified in a comma-separated list. 
     * @param {Boolean} opts.userEnabled Return only enabled or disabled users.
     * @param {module:model/String} opts.userValid Return only valid or invalid users.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiAsyncSuccessResponse}
     */
    this.getUsersAsync = function(opts) {
      return this.getUsersAsyncWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
