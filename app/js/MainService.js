myApp.factory('MainService', function ($http, $location, $route, $routeParams, $resource) {






// if($route.current.params === true) {
//   var url = $location.url('http://localhost:3000/' + $route.current.params);
// } else {
//   var url = 'http://localhost:3000/';
// }
// var url = 'http://localhost:3000/';
 //  var resource = $resource('http://localhost:3000/' + timestamp);




// access $routeParams inside of controllers

// get({timestamp: timestamp})




      return {
        getJSON: function(path) {
            console.log(path)
            return $resource('http://localhost:3000/:timestamp', {timestamp: '@timestamp'}).get({timestamp: path}
            );
            // :timestamp', {timestamp: '@timestamp'}).get({timestamp: path});

          // console.log(resource.get())
         // console.log(timestamp)
          // var resource = $resource('http://localhost:3000/:timestamp', {timestamp: '@timestamp'})
          // console.log(resource)

        },
        pullJSON: function() {
return $resource('http://localhost:3000/').get();
        }
      };
});

      //   promise: function () {
      //     var mainURL = 'https://ts-microservice-fcc.herokuapp.com/';
      //     if ($routeParams === true) {
      //       mainURL = mainURL + $routeParams;
      //     }
      //     return $http.get(mainURL);
      //   }
      // }
















      // $http.get('https://ts-microservice-fcc.herokuapp.com').then(function (response) {
      //         console.log(response);
      //         return response.data;
      //       })
      //   }
      // );










      // myApp.factory('jsonResponse', function ($resource) {
      //   return {
      //     getJSON: function (query) {
      //       return $resource('https://ts-microservice-fcc.herokuapp.com/:timestamp', {timestamp: '@timestamp'}).get({timestamp:query});
      //     }
      //   };
      // });
