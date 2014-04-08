angular.module('myApp', [
  'ui.bootstrap',
  'ngRoute',
  'account.controllers',
  'billing.controllers',
  'dashboard.controllers'
  ])
.controller('NavCtrl', function ($scope) {
  $scope.collapse1 = true;
  $scope.toggleCollapse = function() {
    $scope.collapse1 = !$scope.collapse1;
  }
});