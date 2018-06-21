"use strict";

(function() {

    var BookController =  function(bookService, $log) {

    	var vm = this;

        vm.isHidden = false;

        vm.hideTable = function()
        {
        	vm.isHidden = !vm.isHidden
        };

        vm.deleteBook = function(book)
        {
          $log.log("delete before");
          bookService.deleteBook(book);
          $log.log("delete after");
          init();
        };

        function init() {
        	bookService.getBooks().then(function (results) {
           	vm.books = results;
           	$log.log("In the book controller the value of the result promise is ");
        	$log.log(JSON.stringify(vm.books));
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
       }

       init();

    };

    angular.module('bookApp').controller('bookController', ['bookService','$log', BookController]);
}());
