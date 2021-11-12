import _ from 'lodash';
import Book from './Book';
import React, { useState, useContext } from 'react';
import BooksContext from '../context/BooksContext';
import { Form } from 'react-bootstrap'


const BooksList = () => {
  const { books, setBooks } = useContext(BooksContext);
  const handleRemoveBook = (_id) => {
    fetch('http://localhost:8080/book/:'+_id, {
      method: 'DELETE',
      credentials: 'include',
      headers: {'Content-Type':'application/json'}  
    }).then(response => response.json())
    .then(data => {
      setBooks(books.filter(elem => elem._id !== _id)); })
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => setSearchTerm(e.target.value);

  let newBooks = books.filter(book => {
    for(const property in book) 
      if(book[property].toLowerCase().includes(searchTerm.toLowerCase())) return true
  })

  return (
    <React.Fragment>
      <div className="book-list">
      <Form.Group className="justify-content-center" controlId="searchTerm">
          <Form.Control
            className="input-control mt-3 mb-2"
            id="book-list-search"
            type="text"
            name="searchTerm"
            value={searchTerm}
            placeholder="search..."
            onChange={handleInputChange}
          />
        </Form.Group>
        {!_.isEmpty(books) ? (

          newBooks.map((book) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No books available. Please add some books.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default BooksList;