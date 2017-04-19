angular.module('databaseProject').controller('LocationCtrl', ['$scope','Locations','POIs','$location',
function($scope,Locations, POIs,$location) {
  $scope.name = "";
  $scope.city = "";
  $scope.state = "";
  $scope.zip = "";
  $scope.cities = [];
  $scope.states = [];
  var locations = Locations.get().success(function(res) {
    console.log(res);
    for (var loc in res) {
      console.log(loc);
      $scope.cities.push(res[loc].City);
      $scope.states.push(res[loc].State);
    }
  });
  $scope.addLocation= function(loc) {
    POIs.add(loc);
    $location.path('new_data_point');

  }
  $scope.back= function(loc) {
    $location.path('new_data_point');
  }

}])
