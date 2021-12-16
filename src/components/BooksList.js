import _ from 'lodash';
import Book from './Book';
import React, { useState, useContext } from 'react';
import BooksContext from '../context/BooksContext';
import { Form, Alert } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';



const BooksList = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const { isAuth, noteToUser, showErr } = auth;
  const [show, setShow] = useState(true);
  const { books, setBooks } = useContext(BooksContext);

  const handleRemoveBook = (_id) => {
    fetch('https://server30k-1k.herokuapp.com/book/'+_id, {
      method: 'DELETE',
      credentials: 'include',
      headers: {'Content-Type':'application/json'}  
    }).then(response => response.json())
    .then(data => {
      setBooks(books.filter(elem => elem._id !== _id)); })
  };

  const [searchTerm, setSearchTerm] = useState('');
  const handleInputChange = (e) => setSearchTerm(e.target.value);
  const newBooks = books.filter(book => {
    for(const property in book) {
    if(Array.isArray(book[property])) {
      let isFound = false
      book[property].forEach(elem => {
        if(elem.value.toLowerCase().includes(searchTerm.toLowerCase())) { isFound=true} 
      });
      if(isFound) return isFound;
      //the return needs to happen outside the loop
 }
    else if(!Array.isArray(book[property])) {
      if(book[property].toString().toLowerCase().includes(searchTerm.toLowerCase())) return true
      // need to string because there's a __v number property
      }
  }})

  return (
    <React.Fragment>
      <div className="book-list">
      
      {!_.isEmpty(auth) ? 
      !isAuth && showErr &&<Alert style={{maxWidth: '60ch', margin: 'auto'}} variant="danger" 
      onClose={() => setAuth((prevState => ({...prevState, showErr: false})))} dismissible>
        <Alert.Heading>Wait a second, you're not Diana :(</Alert.Heading>
        <p>
          {noteToUser}
        </p>
      </Alert> 
       : (<> </>) }
      <Form.Group className="justify-content-center" style={{ width: '22rem', margin:'auto' }}>
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
          <p className="message">No books available. Please check the server, or shake Diana's hand for accomplishing her goal.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default BooksList;