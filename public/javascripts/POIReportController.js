angular.module('databaseProject').controller('POIReportCtrl', ['$scope','DataPoints','Datatypes','POIs','$location','orderByFilter',
 function($scope,DataPoints,Datatypes,POIs,$location,orderByFilter) {
  $scope.datatypes = [];
  $scope.pois = [];
  var pois = [];
  $scope.reverse = true;
  $scope.propertyName = 'Name';
  $scope.sortBy = function(propertyName) {
    $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName)
        ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };
  POIs.getAllInfo().success(function(res) {
    console.log(res);
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
