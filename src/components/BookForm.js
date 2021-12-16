import React, { useState, useContext } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';
import BookSelect from "./BookSelect";
import _ from 'lodash';

const BookForm = (props) => {
  const { auth, setAuth } = useContext(AuthContext);
  const { isAuth, noteToUser, showErr } = auth;
  const [show, setShow] = useState(true);
  const [book, setBook] = useState(() => {
    return {
      bookname: props.book ? props.book.bookname : '',
      author: props.book ? props.book.author : '',
      source: props.book ? props.book.source : '',
      additionalInfo: props.book ? props.book.additionalInfo : '',
      optionSelected: props.book ? props.book.optionSelected : null,
    };
  });
  const { bookname, author, source, additionalInfo, optionSelected } = book;

  const handleChange = (selected) => {
    setBook((prevState) => ({
      ...prevState,
      optionSelected: selected
    }));
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBook((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if(props.isEditing) {
      let _id = props.book._id;
      props.handleOnSubmit({...book }, _id)
    }
    else props.handleOnSubmit(book);
  }

  return (
    <div className="book-form">
      {!_.isEmpty(auth) ? 
      !isAuth && showErr &&<Alert style={{maxWidth: '60ch'}} variant="danger" 
      onClose={() => setAuth((prevState => ({...prevState, showErr: false})))} dismissible>
        <Alert.Heading>Wait a second, you're not Diana :(</Alert.Heading>
        <p>
          {noteToUser}
        </p>
      </Alert> 
       : (<> </>) }
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="bookname">
          <Form.Label>Book Title</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="bookname"
            value={bookname}
            placeholder="title of the book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Label>Category:</Form.Label><br></br>
        <BookSelect optionSelected={optionSelected} handleChange={handleChange} id="book-list-search" />
        <Form.Group controlId="author">
          <Form.Label>Book Author</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="author"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="source">
          <Form.Label>Source</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="source"
            value={source}
            placeholder="where did you hear about it?"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="additionalInfo">
          <Form.Label>Additional Information</Form.Label>
          <Form.Control
            className="input-control"
            as="textarea"
            name="additionalInfo"
            value={additionalInfo}
            placeholder="other relevant information"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="light" type="submit" className="submit-btn" disabled={!isAuth}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;

