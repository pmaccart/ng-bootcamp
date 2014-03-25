'use strict';

var express = require('express'),
    path = require('path'),
    config = require('./config');


/**
 * Express configuration
 */
module.exports = function(app) {
  app.configure('development', function(){
//    app.use(require('connect-livereload')());

    // Disable caching of scripts for easier testing
    app.use(function noCache(req, res, next) {
      if (req.url.indexOf('/scripts/') === 0) {
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.header('Pragma', 'no-cache');
        res.header('Expires', 0);
      }
      next();
    });

    app.use(express.errorHandler());
    app.set('views', config.root + '/app/views');

    console.log('Configuring Express Sessions for dev');
    app.use(express.cookieParser());
    app.use(express.cookieSession({
      key: 'app.sess',
      secret: 'SUPERsekret'
    }));
  });

  app.configure('production', function(){
    app.set('views', config.root + '/views');

    // Persist sessions with mongoStore
    console.log('Configuring Express Sessions.');
    app.use(express.cookieParser());
    app.use(express.cookieSession({
        key: 'app.sess',
        secret: 'SUPERsekret'
      }));
  });

  app.configure(function(){
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
//    app.use(express.cookieParser());

    // Server static resources from the compiled client application folder (either build or dist,
    // depending on environment)
    app.use(config.server.staticUrl, express.compress());
    app.use(config.server.staticUrl, express.static(config.server.distFolder));

    // Router needs to be last
    app.use(app.router);
  });
};