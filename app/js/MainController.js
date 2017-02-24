'use strict';

myApp.controller('MainController',
  function MainController($scope, MainService, $http, $location, $routeParams, $route) {
$scope.someJSON = MainService.pullJSON();
});





// $scope.path = $location.path();
//  MainService.promise().then(function (response) {
//               console.log($scope.path)
//               console.log(response.data);
//               $scope.JSON = response.data;
//             });
// });








    // $http.get('https://ts-microservice-fcc.herokuapp.com/').then(function (response) {
    //   console.log(response.data);
    //   $scope.JSON = response.data;
    // });
