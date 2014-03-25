'use strict';

var express = require('express'),
    path = require('path'),
    fs = require('fs');

/**
 * Main application file
 */

// Default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Application Config
var config = require('./lib/config/config');

var app = express();

// Express settings
require('./lib/config/express')(app);

// Routing
require('./lib/routes')(app, config);

// Start server
app.listen(config.server.port, function () {
  console.log('Express server listening on port %d in %s mode', config.server.port, app.get('env'));
});

// Expose app
exports = module.exports = app;