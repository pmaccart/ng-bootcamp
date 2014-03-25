'use strict';

var express = require('express'),
    path = require('path'),
    config = require('./config');


/**
 * Express configuration
 */
module.exports = function(app) {
  app.configure('development', function(){

    app.use(express.errorHandler());

    console.log('Configuring Express Sessions for dev');
    app.use(express.cookieParser());
    app.use(express.cookieSession({
      key: 'app.sess',
      secret: 'SUPERsekret'
    }));
  });

  app.configure('production', function(){

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

    // Router needs to be last
    app.use(app.router);
  });
};