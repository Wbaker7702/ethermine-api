'use strict'
const request = require('request')
var browser = request.defaults({
  headers: {'User-Agent': 'The Botfather NodeJS module (https://www.npmjs.com/package/ethermine-api)'}
})
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
     * @param {function(boolean, object): void} callback - The callback function.
     * @memberof Ethermine
     */
    getPoolStats(callback) {
	browser(this.apiurl + '/poolStats', { json: true }, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
	})
    }
    /**
     * Gets the block history.
     * @param {function(boolean, object): void} callback - The callback function.
     * @memberof Ethermine
     */
    getBlockHistory(callback){
	browser(this.apiurl + '/blocks/history', { json: true }, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
	})
    }
    /**
     * Gets the network statistics.
     * @param {function(boolean, object): void} callback - The callback function.
     * @memberof Ethermine
     */
    getNetworkStats(callback){
	browser(this.apiurl + '/networkStats', { json: true }, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
	})
    }
    /**
     * Gets the servers' history.
     * @param {function(boolean, object): void} callback - The callback function.
     * @memberof Ethermine
     */
    getServersHistory(callback){
	browser(this.apiurl + '/servers/history', { json: true }, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
	})
    }
    /**
     * Gets the Ethpool credits.
     * @param {function(boolean, object): void} callback - The callback function.
     * @memberof Ethermine
     */
    getEthpoolCredits(callback){
      if (this.apiurl != 'https://api.ethpool.org') {
        return callback(true, 'Only works on ethpool.api')
      };
      browser(this.apiurl + '/credits', { json: true }, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
      })
    }
    /**
     * Gets the miner's dashboard.
     * @param {string} miner - The miner's address.
     * @param {function(boolean, object): void} callback - The callback function.
     * @memberof Ethermine
     */
    getMinerDashboard(miner, callback){
      if (!miner) {
        throw new Error("No miner specified");
      }
      browser(this.apiurl + '/miner/'+miner+'/dashboard', { json: true }, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
	})
    }
    /**
     * Gets the miner's history.
     * @param {string} miner - The miner's address.
     * @param {function(boolean, object): void} callback - The callback function.
     * @memberof Ethermine
     */
    getMinerHistory(miner, callback){
      if (!miner) {
        throw new Error("No miner specified");
      }
      browser(this.apiurl + '/miner/'+miner+'/history', { json: true }, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
	})
    }
    /**
     * Gets the miner's payouts.
     * @param {string} miner - The miner's address.
     * @param {function(boolean, object): void} callback - The callback function.
     * @memberof Ethermine
     */
    getMinerPayouts(miner, callback){
      if (!miner) {
        throw new Error("No miner specified");
      }
      browser(this.apiurl + '/miner/'+miner+'/payouts', { json: true }, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
	})
    }
    /**
     * Gets the miner's rounds.
     * @param {string} miner - The miner's address.
     * @param {function(boolean, object): void} callback - The callback function.
     * @memberof Ethermine
     */
    getMinerRounds(miner, callback){
      if (!miner) {
        throw new Error("No miner specified");
      }
      browser(this.apiurl + '/miner/'+miner+'/rounds', { json: true }, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
	})
    }
    /**
     * Gets the miner's settings.
     * @param {string} miner - The miner's address.
     * @param {function(boolean, object): void} callback - The callback function.
     * @memberof Ethermine
     */
    getMinerSettings(miner, callback){
      if (!miner) {
        throw new Error("No miner specified");
      }
      browser(this.apiurl + '/miner/'+miner+'/settings', { json: true }, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
	})
    }
    /**
     * Gets the miner's current statistics.
     * @param {string} miner - The miner's address.
     * @param {function(boolean, object): void} callback - The callback function.
     * @memberof Ethermine
     */
    getMinerCurrentStats(miner, callback){
      if (!miner) {
        throw new Error("No miner specified");
      }
      browser(this.apiurl + '/miner/'+miner+'/currentStats', { json: true }, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
	})
    }
    /**
     * Gets the miner's workers.
     * @param {string} miner - The miner's address.
     * @param {function(boolean, object): void} callback - The callback function.
     * @memberof Ethermine
     */
    getMinerWorkers(miner, callback){
      if (!miner) {
        throw new Error("No miner specified");
      }
      browser(this.apiurl + '/miner/'+miner+'/workers', { json: true }, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
	})
    }
    /**
     * Gets the worker's history.
     * @param {string} miner - The miner's address.
     * @param {string} worker - The worker's name.
     * @param {function(boolean, object): void} callback - The callback function.
     * @memberof Ethermine
     */
    getWorkerHistory(miner, worker, callback){
      if (!miner) {
        throw new Error("No miner specified");
      }
      if (!worker) {
        throw new Error("No worker specified")
      }
      browser(this.apiurl + '/miner/'+miner+'/worker/'+worker+'/history', { json: true }, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
	})
    }
    /**
     * Gets the worker's current statistics.
     * @param {string} miner - The miner's address.
     * @param {string} worker - The worker's name.
     * @param {function(boolean, object): void} callback - The callback function.
     * @memberof Ethermine
     */
    getWorkerCurrentStats(miner, worker, callback){
      if (!miner) {
        throw new Error("No miner specified");
      }
      if (!worker) {
        throw new Error("No worker specified")
      }
      browser(this.apiurl + '/miner/'+miner+'/worker/'+worker+'/currentStats', { json: true }, function(error, res, body) {
            if (!error && res.statusCode == 200) {
                callback(false, body)
            } else {
                callback(true, "")
            }
      })
    }
    /**
     * Sets the API URL.
     * @param {string} [url='https://api.ethermine.org'] - The API URL to use.
     * @param {function(boolean, string): void} callback - The callback function.
     * @memberof Ethermine
     */
    setAPIurl(url = 'https://api.ethermine.org', callback){
      const urlLib = require('url');
      let validHosts = ['api-ergo.flypool.org', 'api-etc.ethermine.org', 'api-zcash.flypool.org', 'api-ycash.flypool.org', 'api-beam.flypool.org', 'api-ravencoin.flypool.org', 'api.ethpool.org'];
      let parsedUrl = urlLib.parse(url);
      if (validHosts.includes(parsedUrl.host)) {
        this.apiurl = url;
        callback(false, 'API URL set to: ' + url);
      } else {
        callback(true, 'API not supported');
      }
    }
}