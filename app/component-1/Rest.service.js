angular.module('app.component1').factory('RestService',function($http){
    return{
      post: function(book){
          $http.post('/component-1/books.json', book);
      },
      put: function(book){
          $http.put('/component-1/books.json', book);
      }
    };
});
