var app = angular.module('databaseProject', ['ngRoute']);
angular.module('databaseProject').controller('RegisterCtrl', ['$scope', function($scope) {
  $scope.username = "";
  $scope.password = "";
  $scope.confirm = "";
  $scope.email = "";
  $scope.types = ['a','b','c','d','e'];
  $scope.type = "a";
  $scope.city = "";
  $scope.state = "";
  $scope.title = "";
  $scope.formComplete = function() {
    return $scope.username != "" && $scope.password != "" && $scope.confirm != "" &&
      $scope.email != "";
  };
}])
