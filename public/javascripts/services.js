angular.module('databaseProject')
.service('Users', ['$http','$q', function($http,$q) {
  users = [];
  user = {};
  function getUsers() {
    return $http.get('/users').success(function(data) {
      angular.copy(data.data, users);
    });
  }
  function getTheUser() {
    console.log(user);
    return user;
  }
  function getUser(user) {
    return $http.get('/users/'+user.username+'-'+user.password).success(function(data) {
      this.user = data.data;
    })
  }
  function addUser(user) {
    var def = $q.defer();
    try {
      us = {
        'Username': user.username,
        'Password': user.password,
        'Email': user.email,
        'Usertype': user.type
      }
    } catch (err) {
      def.reject(err);
      return def.promise;
    }
    users.push(user);


    $http.post('/user',us).success(function(data) {
       user = data;
       console.log(data);
       def.resolve(data);
    }).error(function(data) {
      console.log("error");
      def.reject(data);
    });
    return def.promise;



  }
  return {
    addUser: addUser,
    getTheUser: getTheUser,
    getUsers: getUsers,
    getUser: getUser


  };
}])
.service('Locations', ['$http','$q', function($http,$q) {
  locs = [];
  function get() {
    return $http.get('/locations').success(function(data) {
      angular.copy(data.data, locs);
    });
  }
  function getWith(cityorstate) {
    return $http.post('/locations',cityorstate).success(function(data) {
      angular.copy(data.data, locs);
    });
  }
  function add(loc) {
    var def = $q.defer();
    locs.push(loc);
    try {
      l = {
        'City':loc.city,
        'State':loc.state,
      }
    } catch (err) {
      console.log(err);
      def.reject("invalid data");
      return def.promise;
    }


    return $http.post('/location',l).success(function(res) {
      console.log(res);
      def.resolve(res);

    }).error(function(err) {
      console.log(err);
      def.reject(err);
    });
    return def.promise;
  }
  return {
    add: add,
    get: get,
    getWith:getWith

  };
}])
.service('CityOfficials', ['$http', function($http) {
  locs = [];
  function get() {
    return $http.get('/city_officials').success(function(data) {
      angular.copy(data.data, locs);
    });
  }
  function getUser(user) {
    return $http.get('/city_officials/'+user.Username).success(function(data) {
      angular.copy(data.data, locs);
    });
  }
  function add(co) {
    return $http.post('/city_officials',co).success(function(data) {
      return data;
    });
  }
  function getPending() {
    return $http.get('/pending_city_officials').success(function(data) {
      angular.copy(data.data, locs);
    });
  }
  function accept(username) {
    return $http.put('/city_officials/'+username+'/'+1);
  }
  function reject(username) {
    return $http.put('/city_officials/'+username+'/'+0);
  }
  return {
    add: add,
    get: get,
    getUser: getUser,
    accept:accept,
    reject,reject,
    getPending, getPending

  };
}])
.service('DataPoints', ['$http','$q', function($http,$q) {
  function get() {
    return $http.get('/data_points').success(function(data) {
      angular.copy(data.data, locs);
    });
  }
  function getPending() {
    return $http.get('/pending_data_points').success(function(data) {
      angular.copy(data.data, locs);
    });
  }
  function getPoints(filters) {
    return $http.post('/filtered_data_points', filters).success(function(data) {
      angular.copy(data.data, locs);
    });
  }
  function add(dp) {
    var def = $q.defer();
    try{
      var date = new Date(dp.date).toISOString().slice(0,10);
      var time = new Date(dp.time).toISOString().slice(11,19);
    } catch (err) {
      def.reject("invalid data");
      return def.promise;
    }
      //
      // def.reject("invalid entries");
      // return def.promise;

    console.log(date);
    console.log(time);

    dp = {
      'DpDate': date,
      'DpTime': time,
      'Value': dp.value,
      'DataType': dp.type,
      'POI': dp.name,
    }
    $http.post('/data_points',dp).success(function(data) {
      def.resolve(data);
    }).error(function(err) {
      console.log("error")
      def.reject(err);
    });
    return def.promise;
  }
  function accept(poi,datetime) {
    return $http.put('/data_points/'+poi+'/'+datetime.slice(0,10)+'/'+datetime.slice(11,19)+'/1');
  }
  function reject(poi,datetime) {
    return $http.put('/data_points/'+poi+'/'+datetime.slice(0,10)+'/'+datetime.slice(11,19)+'/0');
  }
  return {
    add: add,
    get: get,
    getPending: getPending,
    accept:accept,
    getPoints,getPoints,
    reject: reject

  };
}])
.service('POIs', ['$http','$q', function($http, $q) {
  var locs = [];
  var all_info = [];

  function get() {
    return $http.get('/pois').success(function(data) {
      angular.copy(data.data, locs);
    });
  }
  function flag(name) {
    return $http.put('/flag_poi/'+name+'/'+new Date().toISOString().slice(0, 19).replace('T', ' ')).success(function(data) {
      angular.copy(data.data, locs);
    });
  }
  function filter(filters) {
    console.log(filters);
    return $http.post('/pois_filtered',filters).success(function(data) {
      console.log(data);
      angular.copy(data, locs);
    });
  }
  function getNames() {
    return $http.get('/poi_names').success(function(data) {
      angular.copy(data.data, locs);
    });
  }

  function getAllInfo() {
    return $http.get('/poi_all_info').success(function(data) {
      angular.copy(data.data, all_info)
    });
  }
  function add(loc) {
    var def = $q.defer();
    locs.push(loc);
    try {
      l = {
        'City':loc.city,
        'State':loc.state,
        'Flagged': 0,
        'Name':loc.name,
        'Zipcode':loc.zipcode
      }
    } catch (err) {
      def.reject(err);
      return def.promise;
    }

    return $http.post('/poi',l).success(function(res) {
      console.log(res);
      def.resolve(res);

    }).error(function(err) {
      def.reject(err);

    });
    return def.promise;
  }
  return {
    add: add,
    get: get,
    flag,flag,
    filter:filter,
    getAllInfo: getAllInfo,
    getNames: getNames

  };
}])
.service('Datatypes', ['$http', function($http) {
  locs = [];
  function get() {
    console.log("get")
    return $http.get('/datatypes').success(function(data) {
      console.log(data);
      angular.copy(data.data, locs);
    });
  }


  return {
    get: get

  };
}])
