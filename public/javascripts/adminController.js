angular.module('databaseProject').controller('AdminCtrl',
['$scope','$location','CityOfficials','Users',
function($scope,$location,CityOfficials, Users) {
  $scope.logout = function() {
    $location.path('login');
  }
  $scope.user = user = Users.getTheUser();
  console.log("usr:"+$scope.user);


}])
