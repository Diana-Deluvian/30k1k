import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const BookForm = (props) => {
  const [book, setBook] = useState(() => {
    return {
      bookname: props.book ? props.book.bookname : '',
      author: props.book ? props.book.author : '',
      source: props.book ? props.book.source : '',
      date: props.book ? props.book.date : ''
    };
  });
  

  const [errorMsg, setErrorMsg] = useState('');
  const { bookname, author, source, additionalInfo } = book;

  const handleOnSubmit = (event) => {
    event.preventDefault();    
    const book = {
      id: uuidv4(),
      bookname,
      author,
      source,
      additionalInfo}
    
    props.handleOnSubmit(book);
    }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
        setBook((prevState) => ({
          ...prevState,
          [name]: value
        }));
  };

  return (
    <div className="book-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
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
        <Button variant="light" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;