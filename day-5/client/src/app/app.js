angular.module('myApp', [
  'ui.bootstrap',
  'ui.router',
  'account',
  'billing.controllers',
  'dashboard.controllers',
  'templates-app'
  ])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('dashboard', {
    url: '/dashboard',
    views: {
      sidebar: {
        templateUrl: 'src/app/dashboard/dashboard-sidebar-template.html',
        controller: 'DashboardSidebarCtrl'
      },
      main: {
        templateUrl:'src/app/dashboard/dashboard-template.html',
        controller: 'DashboardCtrl'
      }
    }
  })
  .state('dashboard.profile', {
    url: '/profile',
    templateUrl: 'src/app/dashboard/profile-template.html',
    controller: 'DashboardProfileCtrl'
  })
  .state('dashboard.contacts', {
    url: '/contacts',      
    templateUrl: 'src/app/dashboard/contacts-template.html',
    controller: 'DashboardContactsCtrl'     
  })
  .state('dashboard.about', {
    url: '/about',
    templateUrl: 'src/app/dashboard/about-template.html',
  })
  .state('billing', {
    url: '/billing',
    views: {
      main: {
        templateUrl: 'src/app/billing/billing-template.html',
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
  };
});