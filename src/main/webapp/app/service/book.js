"use strict";

(function () {


    function BookService (bookDal) {

        this.getBooks = function()
        {
        	return bookDal.getBooks();
        };

        this.deleteBook = function(bookToDelete)
        {
          bookDal.deleteBook(bookToDelete);
        };

    }

    angular.module("bookApp").service("bookService", ['bookDal', BookService]);

}());
