/**
 * Provisioning API
 * The provisioning service will be used to create objects in configuration server in a way that is consistent with the BEC model. The \"users\" resource will be used to perform CRUD operations on config server person objects. Note that this API will extend the low level configuration server API to add additional functionality that will allow persons to be created in a way that makes them immediately useable in BEC. Operations on this resource may result in other configuration objects being modified as well. 
 *
 * OpenAPI spec version: 9.0.000.79.4215
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
    root.ProvisioningApi.GetObjectsSuccessResponseData = factory(root.ProvisioningApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetObjectsSuccessResponseData model module.
   * @module model/GetObjectsSuccessResponseData
   * @version 9.0.000.79.4215
   */

  /**
   * Constructs a new <code>GetObjectsSuccessResponseData</code>.
   * @alias module:model/GetObjectsSuccessResponseData
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>GetObjectsSuccessResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetObjectsSuccessResponseData} obj Optional instance to populate.
   * @return {module:model/GetObjectsSuccessResponseData} The populated <code>GetObjectsSuccessResponseData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('skills')) {
        obj['skills'] = ApiClient.convertToType(data['skills'], [Object]);
      }
      if (data.hasOwnProperty('dns')) {
        obj['dns'] = ApiClient.convertToType(data['dns'], [Object]);
      }
      if (data.hasOwnProperty('agent-groups')) {
        obj['agent-groups'] = ApiClient.convertToType(data['agent-groups'], [Object]);
      }
      if (data.hasOwnProperty('access-groups')) {
        obj['access-groups'] = ApiClient.convertToType(data['access-groups'], [Object]);
      }
      if (data.hasOwnProperty('dn-groups')) {
        obj['dn-groups'] = ApiClient.convertToType(data['dn-groups'], [Object]);
      }
      if (data.hasOwnProperty('totalCount')) {
        obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * A list of skill objects.
   * @member {Array.<Object>} skills
   */
  exports.prototype['skills'] = undefined;
  /**
   * A list of DN objects.
   * @member {Array.<Object>} dns
   */
  exports.prototype['dns'] = undefined;
  /**
   * A list of agent group objects.
   * @member {Array.<Object>} agent-groups
   */
  exports.prototype['agent-groups'] = undefined;
  /**
   * A list of access group objects.
   * @member {Array.<Object>} access-groups
   */
  exports.prototype['access-groups'] = undefined;
  /**
   * A list of DN group objects.
   * @member {Array.<Object>} dn-groups
   */
  exports.prototype['dn-groups'] = undefined;
  /**
   * The total number of objects (DNs and agent groups) included in the result.
   * @member {Number} totalCount
   */
  exports.prototype['totalCount'] = undefined;



  return exports;
}));


