function MyController($scope) {
  $scope.name = 'Phil';
}

function ParentController($scope) {
  $scope.parentName = "Parent Controller";
}

function ChildController($scope) {
  $scope.childName = "Child Controller";
}

function TwoWayDataBindingController($scope) {
  $scope.clearName = function() {
    $scope.model.name = null;
  }
}

function RepeatAndFilterController($scope) {
  $scope.items = [
    {name: "Bob"},
    {name: "Billy"},
    {name: "Bilbo"}
  ];
}

function MyFormController($scope, $window) {
  $scope.createUser = function(firstName, lastName) {
    $window.alert('Creating user: ' + firstName + ' ' + lastName);
  }
}