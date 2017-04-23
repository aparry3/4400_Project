angular.module('databaseProject').controller('LocationCtrl', ['$scope','Locations','POIs','$location',
function($scope,Locations, POIs,$location) {
  $scope.name = "";
  $scope.city = "";
  $scope.state = "";
  $scope.zip = "";
  $scope.locs = [];
  $scope.cities = [];
  $scope.states = [];
  var locations = Locations.get().success(function(res) {
    console.log(res);
    $scope.locs = res;
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
  $scope.changeSelected = function(user) {
    var filter = {}
    if (user.state != null) {
      filter.State = user.state
    }
    if (user.city != null) {
      filter.City = user.city;
    }
    if (filter.City == null || filter.State == null) {
      Locations.getWith(filter).success(function(data) {
        var cities = [];
        var states = [];
        $scope.locs = data;
        for (var loc in data) {
          console.log(loc);
          cities.push(data[loc].City);
          states.push(data[loc].State);
        }
        if (filter.City != null) {
          $scope.states = states;
        }
        if (filter.State != null) {
          $scope.cities = cities;
        }
      });
    }
  }

}])
