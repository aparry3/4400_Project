angular.module('databaseProject').controller('RegisterCtrl', ['$scope','Users','Locations','$location','CityOfficials',
function($scope,Users,Locations,$location,CityOfficials) {
  $scope.username = "";
  $scope.password = "";
  $scope.confirm = "";
  $scope.email = "";
  $scope.types = ['Admin','City Official','City Scientist'];
  $scope.type;
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
  $scope.city = ""
  $scope.state = "";
  $scope.title = "";
  Users.getUsers().success(function(res) {
    $scope.users = res;
  });
  $scope.formComplete = function() {
    return $scope.username != "" && $scope.password != "" && $scope.confirm != "" &&
      $scope.email != "";
  };
  $scope.addUser = function(user) {
    Users.addUser(user);
      console.log("--------------------------------------------------------------")
    if (user.type == 'City Official') {
        co = {
          'Username': user.username,
          'Title': user.title,
          'City': user.city,
          'State': user.state,
          'Pending': 1
        };
        CityOfficials.add(co).success(function(data) {
          console.log(data);
        });
      }





    $location.path('login');
  }

}])
