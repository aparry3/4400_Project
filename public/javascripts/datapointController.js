angular.module('databaseProject').controller('DPCtrl',
['$scope','Locations','DataPoints','$location',
function($scope,Locations,DataPoints,$location) {
  $scope.datapoints = []
  $scope.checkedPoints = {};
  $scope.reversed = true;
  $scope.propertyName = 'name';
  DataPoints.getPending().success(function(res) {
    console.log(res);
    $scope.datapoints = [];

    for (var i in res) {
      obj = {
        name: res[i].POI,
        type: res[i].DataType,
        value: res[i].Value,
        date: res[i].DpDate,
        time: res[i].DpTime,
        datime: res[i].DpDate.slice(0,10) + " " + res[i].DpTime
      }
      console.log(obj.datime);
      $scope.datapoints.push(obj);


    }
    $scope.sortBy = function(propertyName) {
      $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName)
          ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
    };
    $scope.accept = function() {
      for (name in $scope.checkedPoints) {
        if ($scope.checkedPoints[name] == true) {
          var els= name.split('_');
          DataPoints.accept(els[0],els[1]);
        }

        //accept WHERE .name = name
      }
      DataPoints.getPending().success(function(res) {
        console.log("data points" + res);
        $scope.datapoints = [];

        for (var i in res) {
          obj = {
            name: res[i].POI,
            type: res[i].DataType,
            value: res[i].Value,
            date: res[i].DpDate,
            time: res[i].DpTime,
            datime: res[i].DpDate.slice(0,10) + " " + res[i].DpTime
          }
          $scope.datapoints.push(obj);


        }
    });
    $scope.checkedPoints = {};
  }
    $scope.reject = function() {
      for (name in $scope.checkedPoints) {
        if ($scope.checkedPoints[name] == true) {
          var els= name.split('_');
          DataPoints.reject(els[0],els[1]);
        }
        //reject WHERE .name = name
      }
      DataPoints.getPending().success(function(res) {
        console.log(res);
        $scope.datapoints = [];

        for (var i in res) {
          obj = {
            name: res[i].POI,
            type: res[i].DataType,
            value: res[i].Value,
            date: res[i].DpDate,
            time: res[i].DpTime,
            datime: res[i].DpDate.slice(0,10) + " " + res[i].DpTime

          }
          console.log(obj.datime);
          $scope.datapoints.push(obj);


        }
      });
      $scope.checkedPoints = {};
    }
    $scope.back = function() {
      $location.path('admin');
    }
  })

}])
