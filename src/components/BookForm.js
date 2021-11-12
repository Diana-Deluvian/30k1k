import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import BookSelect from "./BookSelect";

const BookForm = (props) => {
  const [book, setBook] = useState(() => {
    return {
      bookname: props.book ? props.book.bookname : '',
      author: props.book ? props.book.author : '',
      source: props.book ? props.book.source : '',
      additionalInfo: props.book ? props.book.additionalInfo : '',
      optionSelected: props.book ? props.book.optionSelected : null,
    };
  });


  const [errorMsg, setErrorMsg] = useState('');
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
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
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
        <BookSelect optionSelected={optionSelected} handleChange={handleChange} />
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

