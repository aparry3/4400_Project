angular.module('databaseProject').controller('POIDetailCtrl', ['$scope','$routeParams','DataPoints','Datatypes','POIs','Locations',
'Users','$location',
 function($scope,$routeParams,DataPoints,Datatypes,POIs,Locations, Users,$location) {
  $scope.datatypes = [];
  $scope.poi = $routeParams.id;
  $scope.cities = []
  $scope.states = []
  $scope.filteredPoints = [];
  $scope.filters = {
    POI:$routeParams.id
  }
  $scope.types = [];
  Datatypes.get().success( function(data) {
    $scope.types = data;
  })
  $scope.user = Users.getTheUser();
  $scope.apply = function(filters) {
    console.log(filters);
    DataPoints.getPoints(filters).success(function(data) {
      $scope.filteredPoints = data;
    });
  }
  $scope.back = function() {
    $location.path('poi_list');
  }
  console.log($scope.filters);
  DataPoints.getPoints($scope.filters).success(function(res) {
    $scope.filteredPoints = res;
    console.log(res);
  })
  Locations.get().success(function(res) {
    for (var i = 0;i < res.length; i++) {
      $scope.cities.push(res[i].City)
      $scope.states.push(res[i].State)
    }
  })

}])
