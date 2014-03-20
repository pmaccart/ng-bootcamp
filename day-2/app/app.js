function MyController($scope) {
  $scope.name = 'Phil';
}

function ParentController($scope) {
  $scope.parentName = "Parent Controller";
}

function ChildController($scope) {
  $scope.childName = "Child Controller";
}

function RepeatAndFilterController($scope) {
  $scope.items = [
    {name: "Bob"},
    {name: "Billy"},
    {name: "George"},
    {name: "Alice"},
    {name: "Sally"},
    {name: "Jimmy"},
    {name: "Dan"},
    {name: "Bilbo"}
  ];
}

function BindingsAndEventsController($scope) {
  $scope.counter = 0;
  $scope.incrementCounter = function() {
    $scope.counter++;
  }

}