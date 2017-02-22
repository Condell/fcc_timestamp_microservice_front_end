myApp.factory('jsonResponse', function ($resource) {
  return {
    getJSON: function () {
      return $resource('https://ts-microservice-fcc.herokuapp.com').get();
    }
  };
});
