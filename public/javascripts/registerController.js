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
  $scope.locations = [];
  $scope.error = false;

  var locations = Locations.get().success(function(res) {
    console.log(res);
    $scope.locations = res;
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
  $scope.formComplete = function(user) {
    return user.username != "" && $scope.password != "" && $scope.confirm != "" &&
      $scope.email != "" ;
  };
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
        $scope.locations = data;
        // for (var loc in data) {
        //   console.log(loc);
        //   cities.push(data[loc].City);
        //   states.push(data[loc].State);
        // }
        if (filter.City != null) {
          $scope.states = states;
        }
        if (filter.State != null) {
          $scope.cities = cities;
        }
      });
    }
  }
  $scope.back = function() {
    $location.path('login');
  }

  $scope.addUser = function(user) {
    Users.addUser(user).then(function(data) {
      console.log(data);
      $scope.error = false;
      if (user.type != 'City Official') {
        console.log('login');
        $location.path('login');

      }

    },function(err) {
      $scope.error = true;
    });
    if (user.type == 'City Official') {
        co = {
          'Username': user.username,
          'Title': user.title,
          'City': user.city,
          'State': user.state,
          'Pending': 1
        };
        CityOfficials.add(co).then(function(data) {
          console.log(data);
          $location.path('login');

        }, function(err) {
          $scope.error = true;
        });
      }




  }

}])
