angular.module('databaseProject').controller('POIReportCtrl', ['$scope','DataPoints','Datatypes','POIs','$location',
 function($scope,DataPoints,Datatypes,POIs,$location) {
  $scope.datatypes = [];
  $scope.pois = [];
  POIs.getAllInfo().success(function(res) {
    $scope.pois = res;
  })
  Datatypes.get().success(function(res) {


    for (var i = 0 ;i < res.length;i++ ) {
      $scope.datatypes.push(res[i].Name);

    }
    console.log($scope.types);

  });

  console.log("datapoints");
  // DataPoints.get().success(function(res) {
  //   $scope.types = res.map(function(x) {
  //     return x.Name;
  //   });
  // });
  $scope.addDataPoint = function(dataPoint) {
    DataPoints.add(dataPoint);
  }
  $scope.back = function() {
    $location.path('cityofficial');
  }

}])
