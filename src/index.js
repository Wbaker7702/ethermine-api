'use strict'

// Use native fetch (Node 18+) or require node-fetch for older versions
let fetch;
if (typeof globalThis !== 'undefined' && typeof globalThis.fetch === 'function') {
  // Use native fetch (Node 18+)
  fetch = globalThis.fetch;
} else if (typeof require !== 'undefined') {
  // Fallback: require node-fetch if native fetch not available
  try {
    fetch = require('node-fetch');
  } catch (e) {
    // If node-fetch is not installed, throw a helpful error
    throw new Error('Neither native fetch (Node.js 18+) nor node-fetch is available. Please use Node.js 18+ or install node-fetch: npm install node-fetch@2');
  }
} else {
  throw new Error('fetch is not available in this environment');
}

const USER_AGENT = 'ethermine-api NodeJS module (https://www.npmjs.com/package/ethermine-api)';
/**
 * The main class for the Ethermine API.
 * @class Ethermine
 */
module.exports = class Ethermine {
    /**
     * Creates an instance of Ethermine.
     * @param {string} [apilink='https://api.ethermine.org'] - The API URL to use.
     * @param {boolean} [debugit=false] - Whether to enable debug logging.
     * @memberof Ethermine
     */
    constructor(apilink, debugit = false) {
	this.apiurl = apilink || 'https://api.ethermine.org';
      if (!this.apiurl || this.apiurl.length == 0) {
        throw new Error("API url is not defined");
      }
      if (debugit) {
        console.log("API URL: " + this.apiurl)
      }
    }
    /**
     * Gets the pool's statistics.
     * @param {function(boolean, object): void} [callback] - The callback function (optional if using Promises).
     * @returns {Promise<object>} Promise that resolves with pool stats if no callback provided.
     * @memberof Ethermine
     */
    getPoolStats(callback) {
        return this._makeRequest('/poolStats', callback);
    }
    /**
     * Gets the block history.
     * @param {function(boolean, object): void} [callback] - The callback function (optional if using Promises).
     * @returns {Promise<object>} Promise that resolves with block history if no callback provided.
     * @memberof Ethermine
     */
    getBlockHistory(callback){
        return this._makeRequest('/blocks/history', callback);
    }
    /**
     * Gets the network statistics.
     * @param {function(boolean, object): void} [callback] - The callback function (optional if using Promises).
     * @returns {Promise<object>} Promise that resolves with network stats if no callback provided.
     * @memberof Ethermine
     */
    getNetworkStats(callback){
        return this._makeRequest('/networkStats', callback);
    }
    /**
     * Gets the servers' history.
     * @param {function(boolean, object): void} [callback] - The callback function (optional if using Promises).
     * @returns {Promise<object>} Promise that resolves with servers history if no callback provided.
     * @memberof Ethermine
     */
    getServersHistory(callback){
        return this._makeRequest('/servers/history', callback);
    }
    /**
     * Gets the Ethpool credits.
     * @param {function(boolean, object): void} [callback] - The callback function (optional if using Promises).
     * @returns {Promise<object>} Promise that resolves with ethpool credits if no callback provided.
     * @memberof Ethermine
     */
    getEthpoolCredits(callback){
      if (this.apiurl != 'https://api.ethpool.org') {
        const error = new Error('Only works on ethpool.api');
        if (callback) {
          return callback(true, error.message);
        }
        return Promise.reject(error);
      }
      return this._makeRequest('/credits', callback);
    }
    /**
     * Gets the miner's dashboard.
     * @param {string} miner - The miner's address.
     * @param {function(boolean, object): void} [callback] - The callback function (optional if using Promises).
     * @returns {Promise<object>} Promise that resolves with miner dashboard if no callback provided.
     * @memberof Ethermine
     */
    getMinerDashboard(miner, callback){
      if (!miner) {
        const error = new Error("No miner specified");
        if (callback) {
          return callback(true, error.message);
        }
        return Promise.reject(error);
      }
      return this._makeRequest('/miner/'+miner+'/dashboard', callback);
    }
    /**
     * Gets the miner's history.
     * @param {string} miner - The miner's address.
     * @param {function(boolean, object): void} [callback] - The callback function (optional if using Promises).
     * @returns {Promise<object>} Promise that resolves with miner history if no callback provided.
     * @memberof Ethermine
     */
    getMinerHistory(miner, callback){
      if (!miner) {
        const error = new Error("No miner specified");
        if (callback) {
          return callback(true, error.message);
        }
        return Promise.reject(error);
      }
      return this._makeRequest('/miner/'+miner+'/history', callback);
    }
    /**
     * Gets the miner's payouts.
     * @param {string} miner - The miner's address.
     * @param {function(boolean, object): void} [callback] - The callback function (optional if using Promises).
     * @returns {Promise<object>} Promise that resolves with miner payouts if no callback provided.
     * @memberof Ethermine
     */
    getMinerPayouts(miner, callback){
      if (!miner) {
        const error = new Error("No miner specified");
        if (callback) {
          return callback(true, error.message);
        }
        return Promise.reject(error);
      }
      return this._makeRequest('/miner/'+miner+'/payouts', callback);
    }
    /**
     * Gets the miner's rounds.
     * @param {string} miner - The miner's address.
     * @param {function(boolean, object): void} [callback] - The callback function (optional if using Promises).
     * @returns {Promise<object>} Promise that resolves with miner rounds if no callback provided.
     * @memberof Ethermine
     */
    getMinerRounds(miner, callback){
      if (!miner) {
        const error = new Error("No miner specified");
        if (callback) {
          return callback(true, error.message);
        }
        return Promise.reject(error);
      }
      return this._makeRequest('/miner/'+miner+'/rounds', callback);
    }
    /**
     * Gets the miner's settings.
     * @param {string} miner - The miner's address.
     * @param {function(boolean, object): void} [callback] - The callback function (optional if using Promises).
     * @returns {Promise<object>} Promise that resolves with miner settings if no callback provided.
     * @memberof Ethermine
     */
    getMinerSettings(miner, callback){
      if (!miner) {
        const error = new Error("No miner specified");
        if (callback) {
          return callback(true, error.message);
        }
        return Promise.reject(error);
      }
      return this._makeRequest('/miner/'+miner+'/settings', callback);
    }
    /**
     * Gets the miner's current statistics.
     * @param {string} miner - The miner's address.
     * @param {function(boolean, object): void} [callback] - The callback function (optional if using Promises).
     * @returns {Promise<object>} Promise that resolves with miner current stats if no callback provided.
     * @memberof Ethermine
     */
    getMinerCurrentStats(miner, callback){
      if (!miner) {
        const error = new Error("No miner specified");
        if (callback) {
          return callback(true, error.message);
        }
        return Promise.reject(error);
      }
      return this._makeRequest('/miner/'+miner+'/currentStats', callback);
    }
    /**
     * Gets the miner's workers.
     * @param {string} miner - The miner's address.
     * @param {function(boolean, object): void} [callback] - The callback function (optional if using Promises).
     * @returns {Promise<object>} Promise that resolves with miner workers if no callback provided.
     * @memberof Ethermine
     */
    getMinerWorkers(miner, callback){
      if (!miner) {
        const error = new Error("No miner specified");
        if (callback) {
          return callback(true, error.message);
        }
        return Promise.reject(error);
      }
      return this._makeRequest('/miner/'+miner+'/workers', callback);
    }
    /**
     * Gets the worker's history.
     * @param {string} miner - The miner's address.
     * @param {string} worker - The worker's name.
     * @param {function(boolean, object): void} [callback] - The callback function (optional if using Promises).
     * @returns {Promise<object>} Promise that resolves with worker history if no callback provided.
     * @memberof Ethermine
     */
    getWorkerHistory(miner, worker, callback){
      if (!miner) {
        const error = new Error("No miner specified");
        if (callback) {
          return callback(true, error.message);
        }
        return Promise.reject(error);
      }
      if (!worker) {
        const error = new Error("No worker specified");
        if (callback) {
          return callback(true, error.message);
        }
        return Promise.reject(error);
      }
      return this._makeRequest('/miner/'+miner+'/worker/'+worker+'/history', callback);
    }
    /**
     * Gets the worker's current statistics.
     * @param {string} miner - The miner's address.
     * @param {string} worker - The worker's name.
     * @param {function(boolean, object): void} [callback] - The callback function (optional if using Promises).
     * @returns {Promise<object>} Promise that resolves with worker current stats if no callback provided.
     * @memberof Ethermine
     */
    getWorkerCurrentStats(miner, worker, callback){
      if (!miner) {
        const error = new Error("No miner specified");
        if (callback) {
          return callback(true, error.message);
        }
        return Promise.reject(error);
      }
      if (!worker) {
        const error = new Error("No worker specified");
        if (callback) {
          return callback(true, error.message);
        }
        return Promise.reject(error);
      }
      return this._makeRequest('/miner/'+miner+'/worker/'+worker+'/currentStats', callback);
    }
    /**
     * Sets the API URL.
     * @param {string} [url='https://api.ethermine.org'] - The API URL to use.
     * @param {function(boolean, string): void} [callback] - The callback function (optional if using Promises).
     * @returns {Promise<string>} Promise that resolves with success message if no callback provided.
     * @memberof Ethermine
     */
    setAPIurl(url = 'https://api.ethermine.org', callback){
      const urlLib = require('url');
      let validHosts = ['api-ergo.flypool.org', 'api-etc.ethermine.org', 'api-zcash.flypool.org', 'api-ycash.flypool.org', 'api-beam.flypool.org', 'api-ravencoin.flypool.org', 'api.ethpool.org'];
      let parsedUrl = urlLib.parse(url);
      if (validHosts.includes(parsedUrl.host)) {
        this.apiurl = url;
        const message = 'API URL set to: ' + url;
        if (callback) {
          return callback(false, message);
        }
        return Promise.resolve(message);
      } else {
        const error = new Error('API not supported');
        if (callback) {
          return callback(true, error.message);
        }
        return Promise.reject(error);
      }
    }

    /**
     * Internal method to make HTTP requests.
     * @private
     * @param {string} endpoint - The API endpoint to call.
     * @param {function(boolean, object): void} [callback] - Optional callback function.
     * @returns {Promise<object>} Promise that resolves with response data if no callback provided.
     * @memberof Ethermine
     */
    _makeRequest(endpoint, callback) {
      const url = this.apiurl + endpoint;
      const promise = fetch(url, {
        headers: {
          'User-Agent': USER_AGENT,
          'Accept': 'application/json'
        }
      })
      .then(async (response) => {
        if (!response.ok) {
          const errorText = await response.text().catch(() => 'Unknown error');
          throw new Error(`HTTP ${response.status}: ${errorText}`);
        }
        return response.json();
      })
      .then((data) => {
        if (callback) {
          callback(false, data);
        }
        return data;
      })
      .catch((error) => {
        const errorMessage = error.message || 'Request failed';
        if (callback) {
          callback(true, errorMessage);
        } else {
          throw error;
        }
      });

      // Return promise only if no callback provided
      if (!callback) {
        return promise;
      }
    }
}