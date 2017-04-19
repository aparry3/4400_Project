angular.module('databaseProject').controller('COCtrl',
['$scope','Locations','CityOfficials','$location',
function($scope,Locations,CityOfficials,$location) {
  $scope.cityofficials = [];
  $scope.checkedNames = {};
  $scope.cityofficals = CityOfficials.getPending().success(function(res) {
    console.log(res);
    for (var i in res) {
      obj = {
        name: res[i].Username,
        email: res[i].Email,
        city: res[i].City,
        state: res[i].State,
        title: res[i].Title
      }
      $scope.cityofficials.push(obj);


    }
    return $scope.cityofficials;
  })
  $scope.accept = function() {
    for (name in $scope.checkedNames) {
      if ($scope.checkedNames[name] == true){
        CityOfficials.accept(name);
      }
      //accept WHERE .name = name
    }
  }
  $scope.reject = function() {
    for (name in $scope.checkedNames) {
      if ($scope.checkedNames[name] == true) {
        CityOfficials.reject(name);
      }
      //reject WHERE .name = name
    }
  }
  $scope.back = function() {
    $location.path('admin');
  }

}])
