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
  const { wordname, type, meaning, example, additionalInfo } = word;

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
    <div className="word-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="wordname">
          <Form.Label>Word</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="wordname"
            value={wordname}
            placeholder="word"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="type">
          <Form.Label>Type</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="type"
            value={type}
            placeholder="type"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="meaning">
          <Form.Label>Meaning</Form.Label>
          <Form.Control
            className="input-control"
            as="textarea"
            name="meaning"
            value={meaning}
            placeholder="the dictionary definition of the word"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="example">
          <Form.Label>Example</Form.Label>
          <Form.Control
            className="input-control"
            as="textarea"
            name="example"
            value={example}
            placeholder="demonstrate the use of the word"
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
            placeholder="any other relevant information goes here"
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

export default WordForm;