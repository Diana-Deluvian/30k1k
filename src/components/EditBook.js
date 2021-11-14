import React, { useContext } from 'react';
import BookForm from './BookForm';
import { useParams } from 'react-router-dom';
import BooksContext from '../context/BooksContext';

const EditBook = ({ history }) => {
  const { books, setBooks } = useContext(BooksContext);
  const { _id } = useParams();
  console.log(_id);
  const bookToEdit = books.find((book) => book._id === _id);

  const handleOnSubmit = (book, _id) => {
    console.log(_id);
    fetch('http://localhost:8080/book/'+_id, {
      method: 'PUT',
      credentials: 'include',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(book),  
    }).then(response => response.json())
    .then(data => {
      console.log(data, _id, books);
      setBooks([data, ...books.filter(elem => elem._id !== _id)]); })
    history.push('/books');
  }

  return (
    <div>
      <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} isEditing={true} />
    </div>
  );
};

export default EditBook;