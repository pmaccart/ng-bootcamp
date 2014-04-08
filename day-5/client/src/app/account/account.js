angular.module('account', [
  'ui.router', 
  'account.controllers'
])
.config(function ($stateProvider) {
  $stateProvider
    .state('account', {
      abstract: true,
      url: '/account',    
      views: {
        main: {
          controller: 'AccountCtrl',
          templateUrl: 'src/app/account/account.html'  
        }
      }
    })
    .state('account.name', {
      url: '/name',
      controller: 'AccountNameCtrl',
      templateUrl: 'src/app/account/name.html'
    })
    .state('account.address', {
      url: '/address',
      controller: 'AccountAddressCtrl', 
      templateUrl: 'src/app/account/address.html'
    })
    .state('account.confirm', {
      url: '/confirm',
      controller: 'AccountConfirmCtrl',
      templateUrl: 'src/app/account/confirm.html'
    })
    .state('account.success', {
      url: '/success',
      templateUrl: 'src/app/account/success.html'
    });

});