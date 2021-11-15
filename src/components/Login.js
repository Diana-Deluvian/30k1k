import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
//import PropTypes from 'prop-types';

const loginUser = (username, password) => {
  fetch('https://server30k-1k.herokuapp.com/login', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(username, password)
  })
    .then(data => {
      console.log(data);
    })
}


const Login = () => {
  const [login, setLogin] = useState({username: '', password: ''});

  const { username, password } = login;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLogin((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    loginUser(login);

  }

  return (
    <div className="login-form">
      <h2>Please log in!</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Control
            className="input-control"
            type="text"
            name="username"
            value={username}
            placeholder="username"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Control
            className="input-control"
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="light" type="submit" className="submit-btn">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;