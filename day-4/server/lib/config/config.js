'use strict';

var _ = require('lodash');

var privateConfig = {};
try {
  privateConfig = require('./private.js');
}
catch(err) {
}

/**
 * Load environment configuration
 */
module.exports = _.extend(
    require('./env/all.js'),
    require('./env/' + process.env.NODE_ENV + '.js') || {},
    privateConfig);

if (module.exports.keys.echonest.apiKey === null) {
  console.error('\n\n**************************\n'
    + 'ERROR: Echonest API Key is not defined!!!\n' 
    + 'Obtain a key at developer.echonest.com, then add the key to server/lib/config/env/all.js!\n' 
    + '**************************\n\n');
}