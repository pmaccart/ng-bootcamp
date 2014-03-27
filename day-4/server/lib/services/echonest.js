var restler = require('restler'),
  Q = require('q');

var API = function(apiKey) {
  this._apiKey = apiKey;
  this._baseUrl = 'http://developer.echonest.com/api/v4';
};

/**
 * Search by artist, song, or album
 * 
 * @param params
 *  @param params.type {string} ['artist' | 'song' | 'album']
 *  @param params.query {string} 
 */
API.prototype.search = function(params) {
  var deferred = Q.defer();
  restler.get(this._baseUrl + '/' + params.type + '/search', {
    query: {
      api_key: this._apiKey,
      format: 'json',
      name: params.query,
      results: 100
    }
  }).on('complete', function(result) {
    if (result instanceof Error) {
      deferred.reject(result);
    }
    else {
      deferred.resolve(result);
    }
  });

  return deferred.promise;
};

/*
 * Get the most popular artists currently
 */
API.prototype.top = function() {
  var deferred = Q.defer();
  restler.get(this._baseUrl + '/artist/top_hottt', {
    query: {
      api_key: this._apiKey,
      format: 'json',
      results: 100,
      start: 0,
      bucket: 'hotttnesss'
    }
  }).on('complete', function(result) {
     if (result instanceof Error) {
      deferred.reject(result);
    }
    else {
      deferred.resolve(result);
    }
  });

  return deferred.promise;
};

/**
 * Create a playlist based on an artist
 * 
 * @param params
 *  @param params.artist {string} Artist to create a playlist for
 */
API.prototype.getPlaylist = function(params) {
  var deferred = Q.defer();

  restler.get(this._baseUrl + '/playlist/static?api_key=' + this._apiKey 
    + '&artist=' + params.artist + '&format=json&results=20&type=artist-radio')
  .on('complete', function(result) {
     if (result instanceof Error) {
      deferred.reject(result);
    }
    else {
      deferred.resolve(result);
    }
  });

  return deferred.promise;
};

/**
 * Find similar artists
 * 
 * @param params
 *  @param params.artist {string} Artist to create a playlist for
 */
API.prototype.getSimilarArtists = function(params) {
  var deferred = Q.defer();

  restler.get(this._baseUrl + '/artist/similar?api_key=' + this._apiKey 
    + '&name=' + params.artist + '&format=json&results=10&bucket=songs&bucket=images'
    ).on('complete', function(result) {
     if (result instanceof Error) {
      deferred.reject(result);
    }
    else {
      deferred.resolve(result);
    }
  });

  return deferred.promise;
};

module.exports = API;


