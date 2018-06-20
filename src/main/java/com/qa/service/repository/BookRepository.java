package com.qa.service.repository;

public interface BookRepository {
	
	String getAllBooks();

	String insertBook(String accout);

	String updateBook(Long id, String accountToUpdate);

	String deleteBook(Long id);

}
