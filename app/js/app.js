'use strict';

var myApp = angular.module('myApp', ['ngRoute', 'ngResource'])
  // .config(['$sceDelegateProvider', function ($sceDelegateProvider) {
  //       // We must whitelist the JSONP endpoint that we are using to show that we trust it
  //       $sceDelegateProvider.resourceUrlWhitelist([
  //         'self',
  //         'https://ts-microservice-fcc.herokuapp.com/**'
  //       ]);
  // }]);
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: '../templates/main.html',
      controller: 'MainController'
    });
    $routeProvider.when('/:path', {
      // template: 'Value is: {{17}}',
      templateUrl: '../templates/second.html',
      controller: 'SecondController',
   redireectTo: 'http://localhost:3000/#!' + path,
      // resolve: {
      //   addAng: function($location) {
      //     // console.log($location.path());
      //     var somePath = $location.path();
      //     var completeUrl = $location.absUrl('http://localhost:3000/#!/' + path);
      //     console.log(completeUrl);
      //     return completeUrl;
      //   }
      // }
    });
    $routeProvider.otherwise({
      redirectTo: '/'
    })
  $locationProvider.html5Mode(true);
  });


// pas the query string to getJSON and use it.
