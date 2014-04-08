angular.module('dashboard.controllers', [])
.controller('DashboardCtrl', function($scope) {

})
.controller('DashboardSidebarCtrl', function ($scope) {
})
.controller('DashboardProfileCtrl', function ($scope) {
  $scope.profile = {
    firstName: 'Phil',
    lastName: 'MacCart',
    company: 'Slalom Consulting'
  };
})
.controller('DashboardContactsCtrl', function ($scope) {
  $scope.contacts = [
    {name: "Bob Smith", phone: "555-555-5555"},
    {name: "John Anderson", phone: "555-555-5555"},
    {name: "Julie Wilson", phone: "555-555-5555"},
    {name: "Amy Jones", phone: "555-555-5555"},
  ]
});