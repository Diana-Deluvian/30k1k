import React, { useContext } from 'react';
import BookForm from './BookForm';
import { useParams } from 'react-router-dom';
import BooksContext from '../context/BooksContext';

const EditBook = ({ history }) => {
  const { books, setBooks } = useContext(BooksContext);
  const { _id } = useParams();
  const bookToEdit = books.find((book) => book._id === _id);

  const handleOnSubmit = (book, _id) => {
    fetch('https://server30k-1k.herokuapp.com/book/' + _id, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('30k1kAuthToken'),
      },
      body: JSON.stringify(book),
    })
      .then((response) => response.json())
      .then((data) => {
        setBooks([data, ...books.filter((elem) => elem._id !== _id)]);
      });
    history.push('/books');
  };

  return (
    <div>
      <BookForm
        book={bookToEdit}
        handleOnSubmit={handleOnSubmit}
        isEditing={true}
      />
    </div>
  );
};

export default EditBook;
