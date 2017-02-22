'use strict';

myApp.controller('MainController',
  function MainController($scope, jsonResponse) {
    $scope.retrieveJSON = jsonResponse.getJSON();
  });

