angular.module('myApp', ['myControllers'])
.config(function() {
  console.log('Configuring the application');
});

angular.module('myControllers',[])
.controller('MyController', function($scope, $http, $log) {
  $scope.getPlaylist = function(artist) {
    $http.get('/api/playlist', {
      params: {
        artist: artist
      }
    }).then(function(response) {
      $scope.playlist = response.data.response.songs;
    }, function(err) {
      $log.error('Error loading tracks', err);
    });
  };
});