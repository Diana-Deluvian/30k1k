import React, { useState, useContext } from 'react';
import { Form, Button, ToggleButton, ToggleButtonGroup, Alert } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';
import _ from 'lodash';


const WordForm = (props) => {
  const { auth } = useContext(AuthContext);
  const { isAuth, noteToUser } = auth;
  const [show, setShow] = useState(true);
  const [word, setWord] = useState(() => {
    return {
      wordname: props.word ? props.word.wordname : '',
      meaning: props.word ? props.word.meaning : '',
      example: props.word ? props.word.example : '',
      additionalInfo: props.word ? props.word.additionalInfo : '',
    };
  });
  const categories = ['noun', 'adjective', 'verb', 'other'];
  
  const [type, setType] = useState(props.word ? props.word.type : []);
  const handleChange = (val) => { 
    setType(val); }
  
  const { wordname, meaning, example, additionalInfo } = word;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if(props.isEditing) {
      let _id = props.word._id;
      props.handleOnSubmit({...word, type }, _id)
    }
    else props.handleOnSubmit({...word, type});
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
      {!_.isEmpty(auth) ? 
      !isAuth && show &&<Alert style={{maxWidth: '60ch'}} variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Wait a second, you're not Diana :(</Alert.Heading>
        <p>
          {noteToUser}
        </p>
      </Alert> 
       : (<> </>) }
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
        <Button variant="light" type="submit" className="submit-btn" disabled={!isAuth}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default WordForm;