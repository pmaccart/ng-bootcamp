'use strict';

var path = require('path');

var rootPath = path.normalize(__dirname + '/../../..');

module.exports = {
  root: rootPath,
  server: {
    port: process.env.PORT || 3000,
    staticUrl: '/static',
    distFolder: path.resolve(rootPath + '/../client'),
    sessionSecret: 'oursupersecretkey',
    sessionCookieName: 'NGB_TOKEN'
  },
  keys: {
    echonest: {
      apiKey: null
    }
  }
};