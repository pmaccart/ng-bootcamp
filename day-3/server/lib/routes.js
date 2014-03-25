var express = require('express'),
  echonest = require('./controllers/echonest');

module.exports = function (app, config) {
  app.get('/api/search', echonest.search);
  app.get('/api/top', echonest.top);
  app.get('/api/playlist', echonest.getPlaylist);

  console.log('Dist folder: %s', config.server.distFolder);
  app.use('/', express.static(config.server.distFolder));
};