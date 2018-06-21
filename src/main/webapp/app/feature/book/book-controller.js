"use strict";

(function() {

    var BookController =  function(bookService, $log) {

    	var vm = this;

        vm.bookData = {
                        'bookTitle' : "",
                        'genre' : "",
                        'yearPublished' : ""
                      };

        vm.isHidden = false;
        vm.editIsHidden = true;
        vm.addIsHidden = true;

        vm.hideTable = function()
        {
        	vm.isHidden = !vm.isHidden
        };

        vm.hideAdd = function()
        {
          vm.addIsHidden = !vm.addIsHidden
        }

        vm.hideEdit = function()
        {
          vm.editIsHidden = !vm.editIsHidden
        }

        vm.hideEditAndReload = function()
        {
          vm.editIsHidden = !vm.editIsHidden
          location.reload();
        }

        vm.addBook = function(){
          $log.log("add before");
          bookService.addBook(vm.bookData);
          $log.log("add after");
          location.reload();
        }

        vm.deleteBook = function(book)
        {
          $log.log("delete before");
          bookService.deleteBook(book);
          $log.log("delete after");
          location.reload();
        };

        vm.editBook = function(){
          $log.log("edit before");
          $log.log("edit after");
          location.reload();
        }

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
