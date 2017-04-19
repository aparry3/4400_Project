angular.module('databaseProject')
.service('Users', ['$http', function($http) {
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
    users.push(user);
    us = {
      'Username': user.username,
      'Password': user.password,
      'Email': user.email,
      'Usertype': user.type
    }
    return $http.post('/user',us).success(function(data) {
       user = data;
       return user;
    });



  }
  return {
    addUser: addUser,
    getTheUser: getTheUser,
    getUsers: getUsers,
    getUser: getUser


  };
}])
.service('Locations', ['$http', function($http) {
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
    locs.push(loc);
    l = {
      'City':loc.city,
      'State':loc.state,
    }
    return $http.post('/location',l).success(function(res) {
      console.log(res);
    });
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
    return $http.put('/city_officials/'+username);
  }
  function reject(username) {
    return $http.delete('/city_officials/'+username);
  }
  return {
    add: add,
    get: get,
    accept:accept,
    reject,reject,
    getPending, getPending

  };
}])
.service('DataPoints', ['$http', function($http) {
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
    var date = new Date(dp.date).toISOString().slice(0,10);
    var time = new Date(dp.time).toISOString().slice(11,19);
    console.log(date);
    console.log(time);
    console.log(date + " " + time);

    dp = {
      'Date_Time': date + " " + time,
      'DpDate': date,
      'DpTime': time,
      'Value': dp.value,
      'Pending': 1,
      'DataType': dp.type,
      'POI': dp.name
    }
    return $http.post('/data_points',dp);
  }
  function accept(poi,datetime) {
    return $http.put('/data_points/'+poi+'/'+datetime.slice(0,19).replace('T',' '));
  }
  function reject(poi,datetime) {
    return $http.delete('/data_points/'+poi+'/'+datetime.slice(0,19).replace('T',' '));
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
.service('POIs', ['$http', function($http) {
  locs = [];
  function get() {
    return $http.get('/pois').success(function(data) {
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
    return $http.get('/all_poi_info').success(function(data) {

    });
  }
  function add(loc) {
    locs.push(loc);
    l = {
      'City':loc.city,
      'State':loc.state,
      'Date_Time_Flagged': new Date().toISOString().slice(0, 19).replace('T', ' '),
      'Flagged': 0,
      'Name':loc.name,
      'Zipcode':loc.zipcode
    }
    return $http.post('/poi',l).success(function(res) {
      console.log(res);
    });
  }
  return {
    add: add,
    get: get,
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
