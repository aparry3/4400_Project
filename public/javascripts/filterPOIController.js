angular.module('databaseProject').controller('FilterPOICtrl', ['$scope','DataPoints','Datatypes','POIs','Locations',
'Users','$location',
 function($scope,DataPoints,Datatypes,POIs,Locations, Users,$location) {
  $scope.datatypes = [];
  $scope.cities = []
  $scope.states = []
  $scope.locs = [];
  $scope.pois = [];
  $scope.user = Users.getTheUser();
  $scope.apply = function(filters) {
    console.log(filters);
    POIs.filter(filters).success(function(data) {
      $scope.pois = data;
    });
  }
  $scope.back = function() {
    $location.path('cityofficial');
  }
  $scope.openPoint = function(point) {
    $location.path('poi_detail/'+point.Name);
  }
  $scope.reset = function() {
    $scope.filters = {};
  }
  POIs.get().success(function(res) {
    $scope.pois = res;
    console.log(res);
  })
  Locations.get().success(function(res) {
    $scope.locs = res;
    for (var i = 0;i < res.length; i++) {
      $scope.cities.push(res[i].City)
      $scope.states.push(res[i].State)
    }
  })

}])
