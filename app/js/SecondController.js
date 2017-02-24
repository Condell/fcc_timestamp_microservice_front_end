'use strict';

myApp.controller('SecondController',
  function SecondController($scope, $http, MainService, $route, $routeParams, $location, $window) {
    // $scope.JSON = $route.current.pathParams.timestamp;
    $scope.someJSON = MainService.getJSON($route.current.pathParams.path);
    $scope.moreJSON = 2 + 2;
    $scope.JSON = 3 + 3;
$scope.path = $route.current.$resolve;

  });

// Use $resource.transformResponse / or interceptort to change the url typed in, to a URL with #!?
