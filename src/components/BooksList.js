import _ from 'lodash';
import Book from './Book';
import React, { useContext } from 'react';
import BooksContext from '../context/BooksContext';


const BooksList = () => {
  const { books, setBooks } = useContext(BooksContext);

  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Book key={book.id} {...book} />
          ))
        ) : (
          <p className="message">No books available. Please add some books.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default BooksList;