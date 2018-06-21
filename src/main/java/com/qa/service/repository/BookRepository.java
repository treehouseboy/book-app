package com.qa.service.repository;

public interface BookRepository {
	
	String getAllBooks();

	String insertBook(String book);

	String updateBook(String bookToUpdate);

	String deleteBook(Long id);

}
