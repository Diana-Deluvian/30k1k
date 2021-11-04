import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const WordForm = (props) => {
  const [word, setWord] = useState(() => {
    return {
      wordname: props.word ? props.word.wordname : '',
      meaning: props.word ? props.word.meaning : '',
      example: props.word ? props.word.example : '',
      additionalInfo: props.word ? props.word.additionalInfo : ''
    };
  });
  

  const [errorMsg, setErrorMsg] = useState('');
  const { wordname, meaning, example } = word;

  const handleOnSubmit = (event) => {
    event.preventDefault();

    props.handleOnSubmit(word);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
        setWord((prevState) => ({
          ...prevState,
          [name]: value
        }));
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="wordname">
          <Form.Label>Word Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="wordname"
            value={wordname}
            placeholder="Enter name of word"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="meaning">
          <Form.Label>Word Author</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="meaning"
            value={meaning}
            placeholder="Enter name of meaning"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="example">
          <Form.Label>example</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="example"
            value={example}
            placeholder="Enter example"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default WordForm;