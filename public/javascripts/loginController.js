angular.module('databaseProject').controller('LoginCtrl', ['$scope','$location','Users','CityOfficials', function($scope,$location,Users, CityOfficials) {
  $scope.username;
  $scope.password;
  $scope.loginFailed = false;
  $scope.users = Users.getUsers().success(function(res) {
    $scope.users = res;
  });
  console.log($scope.users);
  user = {}

  $scope.addUser = function() {
    console.log($scope.username);
    Users.addUser($scope.username);
  }
  $scope.login = function(credentials) {
    Users.getUser(credentials).success(function(res) {
      this.user = res;
      console.log(this.user[0])
      if (this.user[0] != null) {
        $scope.loginFailed = false;
        if (this.user[0].Usertype == 'Admin') {
          console.log(this.user);

          $location.path('admin');
        } else if (this.user[0].Usertype == 'City Official') {
          var co = {};
          CityOfficials.getUser(this.user[0]).success(function(data) {
            if (data[0].Pending == 0) {
              $scope.loginFailed = true;
            } else {
              console.log("city official");
              $location.path('cityofficial');
            }
          });



        } else if (this.user[0].Usertype == 'City Scientist') {
          console.log("city scientist");
          $location.path('new_data_point');

        }
      } else {
         $scope.loginFailed = true;
      }


    });

  }
  $scope.formComplete = function(cred) {
    return cred != null && cred.username != null && cred.password != null;
  }
  $scope.register = function() {
    console.log("here");
    $location.path("register");
  }
}])
