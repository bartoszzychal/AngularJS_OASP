angular.module('app.component1').factory('DateService', function(){
    return{
      getNextYear: function(){
        return new Date().getFullYear()+1;
      }
   };
});
