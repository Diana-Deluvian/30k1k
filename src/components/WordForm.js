import React, { useState } from 'react';
import { Form, Button, ToggleButton, ToggleButtonGroup, ButtonGroup } from 'react-bootstrap';
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
  const categories = ['Noun', 'Adjective', 'Verb', 'Other'];
  
  const [type, setType] = useState(props.word ? props.word.type : []);
  const handleChange = (val) => { 
    console.log(val)
    setType(val); }


  const [errorMsg, setErrorMsg] = useState('');
  const { wordname, meaning, example, additionalInfo } = word;

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
        <Form.Label>Type</Form.Label> <br></br>
        <ToggleButtonGroup type="checkbox" value={type} onChange={handleChange}>
        
  {categories.map((category, idx) => (
    <ToggleButton
      id={`radio-${idx}`}
      variant={type.includes(category) ? "light" : "dark"}
      name="radio"
      value={category}
      checked={type.includes(category)}
      
    >
      {category}
    </ToggleButton>
  ))}
</ToggleButtonGroup>
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