angular.module('app.component1').controller('EditController', function($scope, $modalInstance, selectedBook, DateService){
    'use strict';
    $scope.data = {
        form : {},
        selectedBook: {}
    };
    angular.copy(selectedBook,$scope.data.selectedBook);

    $scope.save = function(){
        $modalInstance.close($scope.data.selectedBook);
    };

    $scope.cancel= function(){
        $modalInstance.close();
    };

    $scope.getNextYear = DateService.getNextYear;
});
