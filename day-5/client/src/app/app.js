angular.module('myApp', [
  'ui.bootstrap',
  'ui.router',
  'account.controllers',
  'billing.controllers',
  'dashboard.controllers'
  ])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('dashboard', {
    url: '/dashboard',
    templateUrl: 'src/app/dashboard/dashboard.html',
    controller: 'DashboardCtrl'
  })
  .state('billing', {
    url: '/billing',
    templateUrl: 'src/app/billing/billing.html',
    controller: 'BillingCtrl'
  })
  .state('account', {
    url: '/account',
    templateUrl: 'src/app/account/account.html',
    controller: 'AccountCtrl'
  });

  $urlRouterProvider.otherwise('/dashboard');
})
.controller('NavCtrl', function ($scope) {
  $scope.collapse1 = true;
  $scope.toggleCollapse = function() {
    $scope.collapse1 = !$scope.collapse1;
  }
});