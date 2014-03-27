var express = require('express'),
  echonest = require('./controllers/echonest');

module.exports = function (app, config) {
  app.get('/api/search', echonest.search);
  app.get('/api/top', echonest.top);
  app.get('/api/playlist', echonest.getPlaylist);
  app.get('/api/artists/similar', echonest.getSimilarArtists);
  app.get('/api/artists/profile', echonest.getProfile);

  console.log('Dist folder: %s', config.server.distFolder);
  app.use('/', function (req, res, next) {
    console.log('Handing request for %s', req.path);
    next();
  });
  app.use('/', express.static(config.server.distFolder));
};