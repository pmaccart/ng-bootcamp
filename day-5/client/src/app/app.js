angular.module('myApp', [
  'ui.bootstrap',
  'ui.router',
  'account',
  'billing.controllers',
  'dashboard.controllers'
  ])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('dashboard', {
    url: '/dashboard',
    views: {
      sidebar: {
        templateUrl: 'src/app/dashboard/dashboard-sidebar.html',
        controller: 'DashboardSidebarCtrl'
      },
      main: {
        templateUrl:'src/app/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
      }
    }
  })
  .state('dashboard.profile', {
    url: '/profile',
    templateUrl: 'src/app/dashboard/profile.html',
    controller: 'DashboardProfileCtrl'
  })
  .state('dashboard.contacts', {
    url: '/contacts',      
    templateUrl: 'src/app/dashboard/contacts.html',
    controller: 'DashboardContactsCtrl'     
  })
  .state('dashboard.about', {
    url: '/about',
    templateUrl: 'src/app/dashboard/about.html',
  })
  .state('billing', {
    url: '/billing',
    views: {
      main: {
        templateUrl: 'src/app/billing/billing.html',
        controller: 'BillingCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/dashboard');
})
.controller('NavCtrl', function ($scope) {
  $scope.collapse1 = true;
  $scope.toggleCollapse = function() {
    $scope.collapse1 = !$scope.collapse1;
  }
});