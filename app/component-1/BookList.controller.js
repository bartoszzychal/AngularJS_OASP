angular.module('app.component1').controller('BookListController', function($scope, $modal, books,RestService){
   'use strict';

    $scope.data = {
        books: [],
    };

    angular.copy(books.data, $scope.data.books);

    $scope.edit = function(){
        $modal.open({
            templateUrl: '/component-1/modal-dialog/edit-modal-dialog.tpl.html',
            controller: 'EditController',
            size: 'lg',
            resolve: {
                selectedBook: function(){
                    return $scope.data.books[$scope.selectedRowIndex];
                }
            }
        }).result.then(function(book){
          if(book !== undefined){
            angular.copy(book,$scope.data.books[$scope.selectedRowIndex]);
            RestService.put(book);
          }
        });
    };

    $scope.add = function(){
        $modal.open({
            templateUrl: '/component-1/modal-dialog/add-modal-dialog.tpl.html',
            controller: 'AddController',
            size: 'lg',
        }).result.then(function(book){
          if(book !== undefined){
            $scope.data.books.push(book);
            RestService.post(book);
          }
        });
    };

    $scope.selectRow = function(index){
      if ($scope.selectedRowIndex === index) {
          $scope.selectedRowIndex = undefined;
      }else {
        $scope.selectedRowIndex = index;
      }
    };

});
