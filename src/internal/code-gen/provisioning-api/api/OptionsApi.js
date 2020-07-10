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
    define(['ApiClient', 'model/OptionsGetResponseError', 'model/OptionsGetResponseSuccess', 'model/OptionsPost', 'model/OptionsPostResponseStatusError', 'model/OptionsPostResponseStatusSuccess', 'model/OptionsPut', 'model/OptionsPutResponseError', 'model/OptionsPutResponseStatusSuccess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OptionsGetResponseError'), require('../model/OptionsGetResponseSuccess'), require('../model/OptionsPost'), require('../model/OptionsPostResponseStatusError'), require('../model/OptionsPostResponseStatusSuccess'), require('../model/OptionsPut'), require('../model/OptionsPutResponseError'), require('../model/OptionsPutResponseStatusSuccess'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.OptionsApi = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.OptionsGetResponseError, root.ProvisioningApi.OptionsGetResponseSuccess, root.ProvisioningApi.OptionsPost, root.ProvisioningApi.OptionsPostResponseStatusError, root.ProvisioningApi.OptionsPostResponseStatusSuccess, root.ProvisioningApi.OptionsPut, root.ProvisioningApi.OptionsPutResponseError, root.ProvisioningApi.OptionsPutResponseStatusSuccess);
  }
}(this, function(ApiClient, OptionsGetResponseError, OptionsGetResponseSuccess, OptionsPost, OptionsPostResponseStatusError, OptionsPostResponseStatusSuccess, OptionsPut, OptionsPutResponseError, OptionsPutResponseStatusSuccess) {
  'use strict';

  /**
   * Options service.
   * @module api/OptionsApi
   * @version 9.0.000.85.4562
   */

  /**
   * Constructs a new OptionsApi. 
   * @alias module:api/OptionsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Receive existing options.
     * The GET operation will fetch CloudCluster/Options and merges it with person and sgent groups annexes.
     * @param {Object} opts Optional parameters
     * @param {String} opts.personDbid DBID of a person. Options will be merged with the Person&#39;s annex and annexes of it&#39;s agent groups. Mutual with agent_group_dbid.
     * @param {String} opts.agentGroupDbid DBID of a person. Options will be merged with the Agent Groups&#39;s annex. Mutual with person_dbid.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OptionsGetResponseSuccess} and HTTP response
     */
    this.optionsGetWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'person_dbid': opts['personDbid'],
        'agent_group_dbid': opts['agentGroupDbid'],
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
      var returnType = OptionsGetResponseSuccess;

      return this.apiClient.callApi(
        '/options', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Receive existing options.
     * The GET operation will fetch CloudCluster/Options and merges it with person and sgent groups annexes.
     * @param {Object} opts Optional parameters
     * @param {String} opts.personDbid DBID of a person. Options will be merged with the Person&#39;s annex and annexes of it&#39;s agent groups. Mutual with agent_group_dbid.
     * @param {String} opts.agentGroupDbid DBID of a person. Options will be merged with the Agent Groups&#39;s annex. Mutual with person_dbid.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OptionsGetResponseSuccess}
     */
    this.optionsGet = function(opts) {
      return this.optionsGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace old options with new.
     * The POST operation will replace CloudCluster/Options with new values
     * @param {module:model/OptionsPost} body Body Data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OptionsPostResponseStatusSuccess} and HTTP response
     */
    this.optionsPostWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling optionsPost");
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
      var returnType = OptionsPostResponseStatusSuccess;

      return this.apiClient.callApi(
        '/options', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replace old options with new.
     * The POST operation will replace CloudCluster/Options with new values
     * @param {module:model/OptionsPost} body Body Data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OptionsPostResponseStatusSuccess}
     */
    this.optionsPost = function(body) {
      return this.optionsPostWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Add/Change/Delete options.
     * The PUT operation will add, change or delete values in CloudCluster/Options.
     * @param {module:model/OptionsPut} body Body Data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OptionsPutResponseStatusSuccess} and HTTP response
     */
    this.optionsPutWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling optionsPut");
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
      var returnType = OptionsPutResponseStatusSuccess;

      return this.apiClient.callApi(
        '/options', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add/Change/Delete options.
     * The PUT operation will add, change or delete values in CloudCluster/Options.
     * @param {module:model/OptionsPut} body Body Data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OptionsPutResponseStatusSuccess}
     */
    this.optionsPut = function(body) {
      return this.optionsPutWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
