angular.module('myApp', [
  'ui.bootstrap',
  'ngRoute',
  'account.controllers',
  'billing.controllers',
  'dashboard.controllers'
  ])
.config(function ($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'src/app/dashboard/dashboard.html',
    controller: 'DashboardCtrl'
  })
  .when('/billing', {
    templateUrl: 'src/app/billing/billing.html',
    controller: 'BillingCtrl'
  })
  .when('/account', {
    templateUrl: 'src/app/account/account.html',
    controller: 'AccountCtrl'
  })
  .otherwise({redirectTo: '/dashboard'});
})
.controller('NavCtrl', function ($scope) {
  $scope.collapse1 = true;
  $scope.toggleCollapse = function() {
    $scope.collapse1 = !$scope.collapse1;
  }
});