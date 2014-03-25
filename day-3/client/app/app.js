angular.module('myApp', ['myControllers'])
.config(function() {
  console.log('Configuring the application');
});

angular.module('myControllers',['myServices'])
.controller('MyController', function($scope, echonest) {
  $scope.getPlaylist = function(artist) {
    echonest.getPlaylistByArtist(artist).then(function(playlist) {
      $scope.playlist = playlist;
    }, function(err) {
      $log.error('Error loading tracks', err);
    });
  };
});

angular.module('myServices', [])
.factory('echonest', function($http, $q) {

  return {
    getPlaylistByArtist: function(artist) {
      var deferred = $q.defer();
      $http.get('/api/playlist', {
        params: { artist: artist }
      }).then(function (response) {
        deferred.resolve(response.data.response.songs);
      }, function(error) {
        deferred.reject(error);
      });
      return deferred.promise;
    }
  };
})