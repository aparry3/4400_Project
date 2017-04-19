angular.module('databaseProject').config(function($routeProvider) {
  $routeProvider
  .when('/register', {
    templateUrl : "/templates/register.html",
    controller: "RegisterCtrl"

  })
  .when('/login', {
    templateUrl : "/templates/login.html",
    controller: "LoginCtrl"

  })
  .when('/new_data_point', {
    templateUrl : "/templates/new_data_point.html",
    controller: "NewDPCtrl"

  })
  .when('/new_location', {
    templateUrl : "/templates/location.html",
    controller: "LocationCtrl"

  })
  .when('/dp_list', {
    templateUrl : "/templates/data_points.html",
    controller: "DPCtrl"

  })
  .when('/co_list', {
    templateUrl : "/templates/city_officials.html",
    controller: "COCtrl"

  })
  .when('/admin', {
    templateUrl : "/templates/admin_screen.html",
    controller: "AdminCtrl"

  })
  .when('/cityofficial', {
    templateUrl : "/templates/co_screen.html",
    controller: "AdminCtrl"

  })
  .when('/location', {
    templateUrl : "/templates/location.html",
    controller: "LocationCtrl"

  })
  .when('/poi_list', {
    templateUrl : "/templates/filter_poi.html",
    controller: "FilterPOICtrl"

  })
  .when('/poi_detail/:id', {
    templateUrl : "/templates/poi_detail.html",
    controller: "POIDetailCtrl"

  })
  .when('/poi_report', {
    templateUrl : "/templates/poi_report.html",
    controller: "POIReportCtrl"

  })

});
