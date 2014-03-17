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