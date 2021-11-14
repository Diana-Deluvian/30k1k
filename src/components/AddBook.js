import React, { useContext } from 'react';
import BookForm from './BookForm';
import BooksContext from '../context/BooksContext';

const AddBook = ({ history }) => {
  const { books, setBooks } = useContext(BooksContext);

  const handleOnSubmit = (book) => {
    fetch('http://localhost:8080/book', {
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(book),
      
    }).then(response => response.json())
    .then(data => {setBooks([data, ...books]); })
    history.push('/books');
  }

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;