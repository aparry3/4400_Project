angular.module('databaseProject').controller('NewDPCtrl', ['$scope','DataPoints','Datatypes','POIs','$location',
 function($scope,DataPoints,Datatypes,POIs,$location) {
  $scope.datatypes = [];
  $scope.poiNames = [];
  POIs.getNames().success(function(res) {
    $scope.poiNames = res;
  })
  Datatypes.get().success(function(res) {


    for (var i = 0 ;i < res.length;i++ ) {
      $scope.datatypes.push(res[i].Name);

    }
    console.log($scope.types);

  });
  $scope.logout = function() {
    $location.path('login');
  }
  console.log("datapoints");
  // DataPoints.get().success(function(res) {
  //   $scope.types = res.map(function(x) {
  //     return x.Name;
  //   });
  // });
  $scope.addDataPoint = function(dataPoint) {
    DataPoints.add(dataPoint);
  }
  $scope.newLocation = function() {
    $location.path('new_location');
  }

}])
