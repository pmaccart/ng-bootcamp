var Echonest = require('../services/echonest'),
  config = require('../config/config');

var echonest = new Echonest(config.keys.echonest.apiKey);

module.exports = {
  search:function(req, res) {
    var params = {
      type: req.query.type,
      query: req.query.query
    };

    echonest.search(params).then(function(resp) {
      res.json(resp);
    }, function(err) {
      res.json(500, err);
    });
  },

  top:function(req, res) {
    echonest.top().then(function(resp) {
      res.json(resp);
    }, function(err) {
      res.json(500, err);
    });
  },

  getPlaylist: function(req, res) {
    var params = {
      artist: req.query.artist
    };

    echonest.getPlaylist(params).then(function(resp) {
      res.json(resp);
    }, function(err) {
      res.json(500, err);
    });
  }
};