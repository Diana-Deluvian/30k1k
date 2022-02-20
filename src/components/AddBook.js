import React, { useContext } from 'react';
import BookForm from './BookForm';
import BooksContext from '../context/BooksContext';

const AddBook = ({ history }) => {
  const { books, setBooks } = useContext(BooksContext);

  const handleOnSubmit = (book) => {
    fetch('https://server30k-1k.herokuapp.com/book', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('30k1kAuthToken'),
      },
      body: JSON.stringify(book),
    })
      .then((response) => response.json())
      .then((data) => {
        setBooks([data, ...books]);
      });
    history.push('/books');
  };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;
