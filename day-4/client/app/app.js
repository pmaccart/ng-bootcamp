angular.module('myApp', ['myControllers', 'myDirectives'])
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

  $scope.getSimilarArtists = function(artist) {
    $scope.isLoading = true;
    $scope.artists = null;
    echonest.getSimilarArtists(artist).then(function(artists) {
      $scope.artists = artists;
      $scope.isLoading = false;
    }, function(err) {
      $log.error('Error getting similar artists', err);
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
    },

    getSimilarArtists: function(artist) {
      var deferred = $q.defer();
      $http.get('/api/artists/similar', {
        params: { artist: artist }
      }).then(function (response) {
        deferred.resolve(response.data.response.artists);
      }, function(error) {
        deferred.reject(error);
      });
      return deferred.promise;
    }
  };
});

angular.module('myDirectives', [])
.directive('myArtist', function() {
  return {
    templateUrl: 'app/templates/artist.html',
    restrict: 'AE',
    scope: {
      artist: "=artist",
      imageSize: "=imageSize"
    }
  };
})
.directive('myLoadable', function() {
  return {
    restrict: 'A',
    template: '<div>' + 
    '<div ng-show="showLoading" class="loading-img"><img src="app/images/loading.gif" /></div>' + 
    '<div ng-hide="showLoading" ng-transclude />' +
    '</div>',
    transclude: true,
    scope: {
      loading: '='
    },
    link:function(scope, element, attrs) {
      function update(isLoading) {
        if (isLoading) {
          scope.showLoading = true;
        }
        else {
          scope.showLoading = false;
        }
      }

      scope.$watch('loading', function(newVal, oldVal) {
        update(!!newVal);
      });
      update(scope.loading);
    }
  };

});
