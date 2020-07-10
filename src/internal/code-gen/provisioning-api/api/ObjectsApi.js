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
    define(['ApiClient', 'model/AddUserData', 'model/ApiErrorResponse', 'model/ApiSuccessResponse', 'model/CreateUserSuccessResponse', 'model/GetObjectsSuccessResponse', 'model/GetPermissionsSuccessResponse', 'model/GetUsersSuccessResponse', 'model/PostPermissionsData', 'model/UpdateUserData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddUserData'), require('../model/ApiErrorResponse'), require('../model/ApiSuccessResponse'), require('../model/CreateUserSuccessResponse'), require('../model/GetObjectsSuccessResponse'), require('../model/GetPermissionsSuccessResponse'), require('../model/GetUsersSuccessResponse'), require('../model/PostPermissionsData'), require('../model/UpdateUserData'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningApi) {
      root.ProvisioningApi = {};
    }
    root.ProvisioningApi.ObjectsApi = factory(root.ProvisioningApi.ApiClient, root.ProvisioningApi.AddUserData, root.ProvisioningApi.ApiErrorResponse, root.ProvisioningApi.ApiSuccessResponse, root.ProvisioningApi.CreateUserSuccessResponse, root.ProvisioningApi.GetObjectsSuccessResponse, root.ProvisioningApi.GetPermissionsSuccessResponse, root.ProvisioningApi.GetUsersSuccessResponse, root.ProvisioningApi.PostPermissionsData, root.ProvisioningApi.UpdateUserData);
  }
}(this, function(ApiClient, AddUserData, ApiErrorResponse, ApiSuccessResponse, CreateUserSuccessResponse, GetObjectsSuccessResponse, GetPermissionsSuccessResponse, GetUsersSuccessResponse, PostPermissionsData, UpdateUserData) {
  'use strict';

  /**
   * Objects service.
   * @module api/ObjectsApi
   * @version 9.0.000.85.4562
   */

  /**
   * Constructs a new ObjectsApi. 
   * @alias module:api/ObjectsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a user
     * Create a user ([CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson)) with the specified attributes.
     * @param {module:model/AddUserData} body Body Data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateUserSuccessResponse} and HTTP response
     */
    this.addUserObjectWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addUserObject");
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
      var returnType = CreateUserSuccessResponse;

      return this.apiClient.callApi(
        '/objects/users', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a user
     * Create a user ([CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson)) with the specified attributes.
     * @param {module:model/AddUserData} body Body Data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateUserSuccessResponse}
     */
    this.addUserObject = function(body) {
      return this.addUserObjectWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove a user
     * Remove the specified user, along with their associated login, places, and DNs. This removes the [CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson) object and any associated [CfgAgentLogin](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgAgentLogin), [CfgPlace](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPlace), [CfgDN](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgDN) objects. 
     * @param {String} dbid The user&#39;s DBID.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.keepPlaces If &#x60;true&#x60; or absent, the user&#39;s places and DNs are not deleted. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.deleteUserObjectWithHttpInfo = function(dbid, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'dbid' is set
      if (dbid === undefined || dbid === null) {
        throw new Error("Missing the required parameter 'dbid' when calling deleteUserObject");
      }


      var pathParams = {
        'dbid': dbid
      };
      var queryParams = {
        'keep_places': opts['keepPlaces'],
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
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/objects/users/{dbid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove a user
     * Remove the specified user, along with their associated login, places, and DNs. This removes the [CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson) object and any associated [CfgAgentLogin](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgAgentLogin), [CfgPlace](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPlace), [CfgDN](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgDN) objects. 
     * @param {String} dbid The user&#39;s DBID.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.keepPlaces If &#x60;true&#x60; or absent, the user&#39;s places and DNs are not deleted. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.deleteUserObject = function(dbid, opts) {
      return this.deleteUserObjectWithHttpInfo(dbid, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the logged in user
     * Get the [CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson) object for the currently logged in user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetUsersSuccessResponse} and HTTP response
     */
    this.getCurrentUserObjectWithHttpInfo = function() {
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
      var returnType = GetUsersSuccessResponse;

      return this.apiClient.callApi(
        '/objects/users/me', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the logged in user
     * Get the [CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson) object for the currently logged in user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetUsersSuccessResponse}
     */
    this.getCurrentUserObject = function() {
      return this.getCurrentUserObjectWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get DNs or agent groups
     * Get DNs (directory numbers) or agent groups from Configuration Server with the specified filters.
     * @param {String} objectType The type of object. Possible values are &#x60;dns&#x60;, &#x60;skills&#x60;, &#x60;dn-groups&#x60;, &#x60;access-groups&#x60; or &#x60;agent-groups&#x60;.
     * @param {Object} opts Optional parameters
     * @param {String} opts.dnType If the **object_type** is &#x60;dns&#x60;, specify the DN type (for example, CFGRoutingPoint). For possible values, see [CfgDNType](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgDNType) in the Platform SDK documentation. 
     * @param {Array.<String>} opts.dnGroups If the **object_type** is &#x60;dns&#x60;, specify a list of DN group names to filter DNs.
     * @param {module:model/String} opts.groupType If the **object_type** is &#x60;agent-groups&#x60;, specify the agent group type.
     * @param {Number} opts.limit The number of objects the Provisioning API should return (up to 100).
     * @param {Number} opts.offset The number of matches the Provisioning API should skip in the returned objects.
     * @param {String} opts.searchTerm The term you want to search for in the object keys. The Provisioning API searches for this term in the value of the key you specify in **search_key**. 
     * @param {String} opts.searchKey The key you want the Provisioning API to use when searching for the term you specified in **search_term**. You can find valid key names in the Platform SDK documentation for [CfgDN](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgDN) and [CfgAgentGroup](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgAgentGroup). 
     * @param {String} opts.matchMethod The method the Provisioning API should use to match the **search_term**. Possible values are &#x60;includes&#x60;, &#x60;startsWith&#x60;, &#x60;endsWith&#x60;, and &#x60;isEqual&#x60;.  (default to includes)
     * @param {String} opts.sortKey A key in [CfgDN](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgDN), [CfgSkill](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgSkill) or [CfgAgentGroup](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgAgentGroup) to sort the search results. 
     * @param {Boolean} opts.sortAscending Specifies whether to sort the search results in ascending or descending order.  (default to true)
     * @param {String} opts.sortMethod Specifies the sort method. Possible values are &#x60;caseSensitive&#x60;, &#x60;caseInsensitive&#x60; or &#x60;numeric&#x60;.  (default to caseSensitive)
     * @param {String} opts.dbids Comma-separated list of DNs to fetch. 
     * @param {Boolean} opts.inUse Specifies whether to return only skills actually assigned to agents.  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetObjectsSuccessResponse} and HTTP response
     */
    this.getObjectWithHttpInfo = function(objectType, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'objectType' is set
      if (objectType === undefined || objectType === null) {
        throw new Error("Missing the required parameter 'objectType' when calling getObject");
      }


      var pathParams = {
        'object_type': objectType
      };
      var queryParams = {
        'dn_type': opts['dnType'],
        'group_type': opts['groupType'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'search_term': opts['searchTerm'],
        'search_key': opts['searchKey'],
        'match_method': opts['matchMethod'],
        'sort_key': opts['sortKey'],
        'sort_ascending': opts['sortAscending'],
        'sort_method': opts['sortMethod'],
        'dbids': opts['dbids'],
        'in_use': opts['inUse'],
      };
      var collectionQueryParams = {
        'dn_groups': {
          value: opts['dnGroups'],
          collectionFormat: 'csv'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetObjectsSuccessResponse;

      return this.apiClient.callApi(
        '/objects/{object_type}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get DNs or agent groups
     * Get DNs (directory numbers) or agent groups from Configuration Server with the specified filters.
     * @param {String} objectType The type of object. Possible values are &#x60;dns&#x60;, &#x60;skills&#x60;, &#x60;dn-groups&#x60;, &#x60;access-groups&#x60; or &#x60;agent-groups&#x60;.
     * @param {Object} opts Optional parameters
     * @param {String} opts.dnType If the **object_type** is &#x60;dns&#x60;, specify the DN type (for example, CFGRoutingPoint). For possible values, see [CfgDNType](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgDNType) in the Platform SDK documentation. 
     * @param {Array.<String>} opts.dnGroups If the **object_type** is &#x60;dns&#x60;, specify a list of DN group names to filter DNs.
     * @param {module:model/String} opts.groupType If the **object_type** is &#x60;agent-groups&#x60;, specify the agent group type.
     * @param {Number} opts.limit The number of objects the Provisioning API should return (up to 100).
     * @param {Number} opts.offset The number of matches the Provisioning API should skip in the returned objects.
     * @param {String} opts.searchTerm The term you want to search for in the object keys. The Provisioning API searches for this term in the value of the key you specify in **search_key**. 
     * @param {String} opts.searchKey The key you want the Provisioning API to use when searching for the term you specified in **search_term**. You can find valid key names in the Platform SDK documentation for [CfgDN](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgDN) and [CfgAgentGroup](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgAgentGroup). 
     * @param {String} opts.matchMethod The method the Provisioning API should use to match the **search_term**. Possible values are &#x60;includes&#x60;, &#x60;startsWith&#x60;, &#x60;endsWith&#x60;, and &#x60;isEqual&#x60;.  (default to includes)
     * @param {String} opts.sortKey A key in [CfgDN](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgDN), [CfgSkill](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgSkill) or [CfgAgentGroup](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgAgentGroup) to sort the search results. 
     * @param {Boolean} opts.sortAscending Specifies whether to sort the search results in ascending or descending order.  (default to true)
     * @param {String} opts.sortMethod Specifies the sort method. Possible values are &#x60;caseSensitive&#x60;, &#x60;caseInsensitive&#x60; or &#x60;numeric&#x60;.  (default to caseSensitive)
     * @param {String} opts.dbids Comma-separated list of DNs to fetch. 
     * @param {Boolean} opts.inUse Specifies whether to return only skills actually assigned to agents.  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetObjectsSuccessResponse}
     */
    this.getObject = function(objectType, opts) {
      return this.getObjectWithHttpInfo(objectType, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get permissions for a list of objects.
     * Get permissions from Configuration Server for objects identified by their type and DBIDs.
     * @param {String} objectType The type of object. Any type supported by the Config server (folders, business-attributes etc).
     * @param {String} dbids Comma-separated list of object DBIDs to query permissions. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.dnType If the object_type is &#39;dns&#39;, then you may specify the DN type (for example, CFGRoutingPoint). This parameter does not affect request results but may increase performance For possible values, see [CfgDNType](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgDNType) in the Platform SDK documentation. 
     * @param {String} opts.folderType If the object_type is &#39;folders&#39;, then you may specify the object type of the folders  (for example, CFGPerson). This parameter does not affect request results but may increase performance For possible values, see [CfgObjectType](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgObjectType) in the Platform SDK documentation. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetPermissionsSuccessResponse} and HTTP response
     */
    this.getPermissionsWithHttpInfo = function(objectType, dbids, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'objectType' is set
      if (objectType === undefined || objectType === null) {
        throw new Error("Missing the required parameter 'objectType' when calling getPermissions");
      }

      // verify the required parameter 'dbids' is set
      if (dbids === undefined || dbids === null) {
        throw new Error("Missing the required parameter 'dbids' when calling getPermissions");
      }


      var pathParams = {
        'object_type': objectType
      };
      var queryParams = {
        'dn_type': opts['dnType'],
        'folder_type': opts['folderType'],
        'dbids': dbids,
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
      var returnType = GetPermissionsSuccessResponse;

      return this.apiClient.callApi(
        '/objects/{object_type}/permissions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get permissions for a list of objects.
     * Get permissions from Configuration Server for objects identified by their type and DBIDs.
     * @param {String} objectType The type of object. Any type supported by the Config server (folders, business-attributes etc).
     * @param {String} dbids Comma-separated list of object DBIDs to query permissions. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.dnType If the object_type is &#39;dns&#39;, then you may specify the DN type (for example, CFGRoutingPoint). This parameter does not affect request results but may increase performance For possible values, see [CfgDNType](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgDNType) in the Platform SDK documentation. 
     * @param {String} opts.folderType If the object_type is &#39;folders&#39;, then you may specify the object type of the folders  (for example, CFGPerson). This parameter does not affect request results but may increase performance For possible values, see [CfgObjectType](https://docs.genesys.com/Documentation/PSDK/9.0.x/ConfigLayerRef/CfgObjectType) in the Platform SDK documentation. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetPermissionsSuccessResponse}
     */
    this.getPermissions = function(objectType, dbids, opts) {
      return this.getPermissionsWithHttpInfo(objectType, dbids, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get permissions for a list of objects.
     * Get permissions from Configuration Server for objects identified by their type and DBIDs.
     * @param {String} objectType The type of object. Any type supported by the Config server (folders, business-attributes etc).
     * @param {Object} opts Optional parameters
     * @param {module:model/PostPermissionsData} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetPermissionsSuccessResponse} and HTTP response
     */
    this.getPermissionsPostWithHttpInfo = function(objectType, opts) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'objectType' is set
      if (objectType === undefined || objectType === null) {
        throw new Error("Missing the required parameter 'objectType' when calling getPermissionsPost");
      }


      var pathParams = {
        'object_type': objectType
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
      var returnType = GetPermissionsSuccessResponse;

      return this.apiClient.callApi(
        '/objects/{object_type}/permissions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get permissions for a list of objects.
     * Get permissions from Configuration Server for objects identified by their type and DBIDs.
     * @param {String} objectType The type of object. Any type supported by the Config server (folders, business-attributes etc).
     * @param {Object} opts Optional parameters
     * @param {module:model/PostPermissionsData} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetPermissionsSuccessResponse}
     */
    this.getPermissionsPost = function(objectType, opts) {
      return this.getPermissionsPostWithHttpInfo(objectType, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a user
     * Get the specified [CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson) object.
     * @param {String} dbid The user&#39;s DBID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetUsersSuccessResponse} and HTTP response
     */
    this.getUserObjectWithHttpInfo = function(dbid) {
      var postBody = null;

      // verify the required parameter 'dbid' is set
      if (dbid === undefined || dbid === null) {
        throw new Error("Missing the required parameter 'dbid' when calling getUserObject");
      }


      var pathParams = {
        'dbid': dbid
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
      var returnType = GetUsersSuccessResponse;

      return this.apiClient.callApi(
        '/objects/users/{dbid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a user
     * Get the specified [CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson) object.
     * @param {String} dbid The user&#39;s DBID.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetUsersSuccessResponse}
     */
    this.getUserObject = function(dbid) {
      return this.getUserObjectWithHttpInfo(dbid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get users
     * Get [CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson) objects based on the specified filters.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of users the Provisioning API returns. (default to 100)
     * @param {Number} opts.offset The number of matches the Provisioning API skips in the returned users. (default to 0)
     * @param {module:model/String} opts.order The sort order.
     * @param {String} opts.sortBy A comma-separated list of fields to sort on. Possible values are &#x60;firstName&#x60;, &#x60;lastName&#x60;, and &#x60;userName&#x60;. 
     * @param {module:model/String} opts.filterName The name of a filter to use on the results.
     * @param {String} opts.filterParameters A part of the user&#39;s first or last name, if you use the &#x60;FirstNameOrLastNameMatches&#x60; filter. 
     * @param {String} opts.roles Return only users who have the Workspace Web Edition roles. The roles can be specified in a comma-separated list. Possible values are ROLE_AGENT and ROLE_ADMIN,ROLE_SUPERVISOR. 
     * @param {String} opts.skills Return only users who have these skills. The skills can be specified in a comma-separated list. 
     * @param {Boolean} opts.userEnabled Return only enabled or disabled users.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetUsersSuccessResponse} and HTTP response
     */
    this.getUserObjectsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'order': opts['order'],
        'sortBy': opts['sortBy'],
        'filterName': opts['filterName'],
        'filterParameters': opts['filterParameters'],
        'roles': opts['roles'],
        'skills': opts['skills'],
        'userEnabled': opts['userEnabled'],
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
      var returnType = GetUsersSuccessResponse;

      return this.apiClient.callApi(
        '/objects/users', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get users
     * Get [CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson) objects based on the specified filters.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The number of users the Provisioning API returns. (default to 100)
     * @param {Number} opts.offset The number of matches the Provisioning API skips in the returned users. (default to 0)
     * @param {module:model/String} opts.order The sort order.
     * @param {String} opts.sortBy A comma-separated list of fields to sort on. Possible values are &#x60;firstName&#x60;, &#x60;lastName&#x60;, and &#x60;userName&#x60;. 
     * @param {module:model/String} opts.filterName The name of a filter to use on the results.
     * @param {String} opts.filterParameters A part of the user&#39;s first or last name, if you use the &#x60;FirstNameOrLastNameMatches&#x60; filter. 
     * @param {String} opts.roles Return only users who have the Workspace Web Edition roles. The roles can be specified in a comma-separated list. Possible values are ROLE_AGENT and ROLE_ADMIN,ROLE_SUPERVISOR. 
     * @param {String} opts.skills Return only users who have these skills. The skills can be specified in a comma-separated list. 
     * @param {Boolean} opts.userEnabled Return only enabled or disabled users.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetUsersSuccessResponse}
     */
    this.getUserObjects = function(opts) {
      return this.getUserObjectsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a user
     * Update a user ([CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson)) with the specified attributes.
     * @param {String} dbid The user&#39;s DBID.
     * @param {module:model/UpdateUserData} updateUserData Update user data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.updateUserObjectWithHttpInfo = function(dbid, updateUserData) {
      var postBody = updateUserData;

      // verify the required parameter 'dbid' is set
      if (dbid === undefined || dbid === null) {
        throw new Error("Missing the required parameter 'dbid' when calling updateUserObject");
      }

      // verify the required parameter 'updateUserData' is set
      if (updateUserData === undefined || updateUserData === null) {
        throw new Error("Missing the required parameter 'updateUserData' when calling updateUserObject");
      }


      var pathParams = {
        'dbid': dbid
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
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/objects/users/{dbid}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a user
     * Update a user ([CfgPerson](https://docs.genesys.com/Documentation/PSDK/latest/ConfigLayerRef/CfgPerson)) with the specified attributes.
     * @param {String} dbid The user&#39;s DBID.
     * @param {module:model/UpdateUserData} updateUserData Update user data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.updateUserObject = function(dbid, updateUserData) {
      return this.updateUserObjectWithHttpInfo(dbid, updateUserData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
