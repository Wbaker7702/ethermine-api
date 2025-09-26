# ethermine-api

[![Actions Status](https://github.com/SloRunner/ethermine-api/workflows/Node.js%20CI/badge.svg)](https://github.com/SloRunner/ethermine-api/actions)
[![Actions Status](https://github.com/SloRunner/ethermine-api/workflows/Node.js%20Package%20Publish/badge.svg)](https://github.com/SloRunner/ethermine-api/actions)
[![Monthly Downloads](https://img.shields.io/npm/dm/ethermine-api.svg)](https://www.npmjs.com/package/ethermine-api)

A Node.js wrapper for the Ethermine and Flypool APIs, allowing you to easily retrieve data about mining pools, miners, and workers.

## Installation

Install the package using npm:

```bash
npm install ethermine-api
```

## Usage

First, import and instantiate the `Ethermine` class:

```javascript
const Ethermine = require('ethermine-api');
const ethermine = new Ethermine();
```

You can also specify an API URL for other pools:

```javascript
const ethermine = new Ethermine('https://api-zcash.flypool.org');
```

All methods use a callback function with the format `(error, data)`.

### API Reference

#### `getPoolStats(callback)`

Get the pool's statistics.

```javascript
ethermine.getPoolStats((err, data) => {
  if (!err) {
    console.log(data);
  }
});
```

#### `getBlockHistory(callback)`

Get the block history.

```javascript
ethermine.getBlockHistory((err, data) => {
  if (!err) {
    console.log(data);
  }
});
```

#### `getNetworkStats(callback)`

Get the network statistics.

```javascript
ethermine.getNetworkStats((err, data) => {
  if (!err) {
    console.log(data);
  }
});
```

#### `getServersHistory(callback)`

Get the servers' history.

```javascript
ethermine.getServersHistory((err, data) => {
  if (!err) {
    console.log(data);
  }
});
```

#### `getMinerDashboard(miner, callback)`

Get the miner's dashboard.

```javascript
ethermine.getMinerDashboard('0x...', (err, data) => {
  if (!err) {
    console.log(data);
  }
});
```

#### `getMinerHistory(miner, callback)`

Get the miner's history.

```javascript
ethermine.getMinerHistory('0x...', (err, data) => {
  if (!err) {
    console.log(data);
  }
});
```

#### `getMinerPayouts(miner, callback)`

Get the miner's payouts.

```javascript
ethermine.getMinerPayouts('0x...', (err, data) => {
  if (!err) {
    console.log(data);
  }
});
```

#### `getMinerRounds(miner, callback)`

Get the miner's rounds.

```javascript
ethermine.getMinerRounds('0x...', (err, data) => {
  if (!err) {
    console.log(data);
  }
});
```

#### `getMinerSettings(miner, callback)`

Get the miner's settings.

```javascript
ethermine.getMinerSettings('0x...', (err, data) => {
  if (!err) {
    console.log(data);
  }
});
```

#### `getMinerCurrentStats(miner, callback)`

Get the miner's current statistics.

```javascript
ethermine.getMinerCurrentStats('0x...', (err, data) => {
  if (!err) {
    console.log(data);
  }
});
```

#### `getMinerWorkers(miner, callback)`

Get the miner's workers.

```javascript
ethermine.getMinerWorkers('0x...', (err, data) => {
  if (!err) {
    console.log(data);
  }
});
```

#### `getWorkerHistory(miner, worker, callback)`

Get the worker's history.

```javascript
ethermine.getWorkerHistory('0x...', 'workerName', (err, data) => {
  if (!err) {
    console.log(data);
  }
});
```

#### `getWorkerCurrentStats(miner, worker, callback)`

Get the worker's current statistics.

```javascript
ethermine.getWorkerCurrentStats('0x...', 'workerName', (err, data) => {
  if (!err) {
    console.log(data);
  }
});
```

#### `setAPIurl(url, callback)`

Set a new API URL.

```javascript
ethermine.setAPIurl('https://api.ethpool.org', (err, result) => {
  if (!err) {
    console.log(result); // 'API URL set to: https://api.ethpool.org'
  }
});
```

### Supported Pools

You can use the `setAPIurl` method to switch to any of the following supported pools:

-   `api-ergo.flypool.org`
-   `api-etc.ethermine.org`
-   `api-zcash.flypool.org`
-   `api-ycash.flypool.org`
-   `api-beam.flypool.org`
-   `api-ravencoin.flypool.org`
-   `api.ethpool.org`