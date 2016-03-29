angular.module('app.component1').controller('AddController', function($scope, $modalInstance,DateService){
    'use strict';

    $scope.data = {
      form : {},
      newBook : {
        id:'' ,
        title:'',
        author:'',
        version:'',
        genre:'',
        year:''
      }
    };

    $scope.add = function(){
        $modalInstance.close($scope.data.newBook);
    };

    $scope.cancel = function(){
        $modalInstance.close();
    };

    $scope.getNextYear = DateService.getNextYear;
});
