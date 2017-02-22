'use strict';

var myApp = angular.module('myApp', ['ngResource', 'ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: '../templates/main.html',
      controller: 'MainController'
    });
    $locationProvider.html5Mode(true);
  });















