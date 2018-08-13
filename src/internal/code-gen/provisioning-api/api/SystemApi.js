/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.25.2540
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
    define(['ApiClient', 'model/ApiErrorResponse', 'model/ServiceProxyData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiErrorResponse'), require('../model/ServiceProxyData'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.SystemApi = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.ApiErrorResponse, root.ProvisioningApi.ServiceProxyData);
  }
}(this, function(ApiClient, ApiErrorResponse, ServiceProxyData) {
  'use strict';

  /**
   * System service.
   * @module api/SystemApi
   * @version 9.0.000.25.2540
   */

  /**
   * Constructs a new SystemApi. 
   * @alias module:api/SystemApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * execute service method on Node to avoid excessive requests from client
     * This operation will execute service method on Node
     * @param {String} serviceName Service name, just for human-readability of URL
     * @param {module:model/ServiceProxyData} body Body data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.executeServiceMethodWithHttpInfo = function(serviceName, body) {
      var postBody = body;

      // verify the required parameter 'serviceName' is set
      if (serviceName === undefined || serviceName === null) {
        throw new Error("Missing the required parameter 'serviceName' when calling executeServiceMethod");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling executeServiceMethod");
      }


      var pathParams = {
        'serviceName': serviceName
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
      var returnType = null;

      return this.apiClient.callApi(
        '/service-proxy/{serviceName}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * execute service method on Node to avoid excessive requests from client
     * This operation will execute service method on Node
     * @param {String} serviceName Service name, just for human-readability of URL
     * @param {module:model/ServiceProxyData} body Body data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.executeServiceMethod = function(serviceName, body) {
      return this.executeServiceMethodWithHttpInfo(serviceName, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
