(function(angular) {
  "use strict";

  angular.module('myModule', [])
    .config(function ($provide) {
      $provide.service('notifier', function Notifier() {
        this.notify = function(msg) {
          alert(msg);
        }
      });
    });

  angular.module('myModule', [])
    .config(function($provide) {
      $provide.constant('baseUrl', '/api');
    })
    .config(function(baseUrl) {
      $provide.value('api', {
        login: baseUrl + '/login',
        users: baseUrl + '/users',
        user: baseUrl + 'users/:id'
      });
    })
    .run(function($log, baseUrl) {
      $log.info('Starting myModule with baseUrl of ' + baseUrl);
    })
    .controller('MyController', function($scope) {
      $scope.name = 'Phil';
    })
    .controller('MyOtherController', function($scope) {
      $scope.otherName = 'Other name';
    });

})(window.angular);

function MyController($scope) {
  $scope.name = 'Phil';
}

angular.module('myModule', [
  'moduleDependency1', 
  'moduleDependency2']);

// Register controller 'MyController' on the new module
angular.module('myModule', [])
  .controller('MyController', function($scope) {
    $scope.name = 'Phil';
  })

// Inferred
function MyController($scope, $http, myService) {};

// $inject annotation
function MyController($scope, $http, myService) {};
MyController.$inject = ['$scope', '$http', 'myService'];

// Inline annotation
var myModule = angular.module('myModule', []);
myModule.controller('MyController', ['$scope', '$http', 'myService',
  function($scope, $http, myService) {}
]);

angular.module('myModule').controller('TimeoutController',
  function($scope) {
    $scope.counter = 0;
    setTimeout(function() {
      $scope.counter++;
    }, 1000);
  });

angular.module('myModule').controller('TimeoutController',
  function($scope) {
    $scope.counter = 0;
    setTimeout(function() {
      $scope.counter++;
      // notify only current scope and children
      $scope.digest();
    }, 1000);
  });


angular.module('myModule').controller('TimeoutController',
  function($scope) {
    $scope.counter = 0;
    setTimeout(function() {
      // perform $digest cycle from $rootScope
      $scope.apply(function() {
        $scope.counter++;
      });
    }, 1000);
  });

angular.module('myModule').controller('TimeoutController',
  function($scope, $timeout) {
    $scope.counter = 0;
    $timeout(function() {
      $scope.counter++;
    }, 1000);
  });


function CoffeeMaker() {
  this.grinder = new Grinder();
  this.carafe = new Carafe();
  this.filter = new Filter();
}

function CoffeeMaker() {
  this.grinder = window.deps.grinder;
  this.carafe = window.deps.carafe;
  this.filter = window.deps.filter;
}

function CoffeeMaker(grinder, carafe, filter) {
  this.grinder = grinder;
  this.carafe = carafe;
  this.filter = filter;
}

 angular.module('myModule', [])
  .config(function ($provide) {
    $provide.service('notifier', function Notifier() {
      this.notify = function(msg) {
        alert(msg);
      }
    });
  });

// Identical as above
angular.module('myModule', [])
  .service('notifier', function Notifier() {
    this.notify = function(msg) {
      alert(msg);
    }
  });

angular.module('myModule')
  .constant('baseUrl', '/api');

angular.module('myModule')
  .value('endpoints', {
    account: '/account',
    billing: '/billing'
    dashboard: '/dasbhoard'
  });

angular.module('myModule')
  .service('userService', function ($http) {
    this.getUser = function(username) {
      return $http.get('/user/' + username);
    };
  });

angular.module('myModule')
  .factory('userService', function($http) {
    return {
      getUser: function(username) {
        $http.get('/user/' + username);
      }
    }
  });

angular.module('myModule')
  .provider('userService', function () {
    this.$get = function($http) {
      return {
        getUser: function(username) {
          return $http.get('/user/' + username);
        }
      }
    }
  })




  