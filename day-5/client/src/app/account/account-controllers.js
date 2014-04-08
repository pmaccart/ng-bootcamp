angular.module('account.controllers', ['ui.router'])
.controller('AccountCtrl', function($scope) {
  $scope.model = {};
  console.log('setting up parent controller');
})
.controller('AccountNameCtrl', function ($scope, $state) {
  console.log('setting up account name controller');

  $scope.next = function() {
    $state.go('account.address');
  };
})
.controller('AccountAddressCtrl', function ($scope, $state) {
  console.log('setting up account address controller');

  $scope.next = function() {
    $state.go('account.confirm');
  };

  $scope.back = function() {
    $state.go('account.name');
  };
})
.controller('AccountConfirmCtrl', function ($scope, $state) {
  $scope.next = function () {
    $state.go('account.success');
  };

  $scope.back = function() {
    $state.go('account.address');
  }
});