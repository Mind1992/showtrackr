angular.module('MyApp', ['ngCookies', 'ngResource', 'ngRoute', 'ngMessages', 'mgcrea.ngStrap'])
  .config(['$locationProvider', function($locationProvider){
    $locationProvider.html5Mode(true);
  }]);
