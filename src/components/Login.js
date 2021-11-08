import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
    const [login, setLogin] = useState();

    const {username, password} = {login};

    const handleInputChange = (event) => {
        const { name, value } = event.target;
            setLogin((prevState) => ({
              ...prevState,
              [name]: value
            }));
      };

      const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(login);
      };

      return (
        <div className="login-form">
          <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId="username">
              <Form.Label>Book Title</Form.Label>
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
              <Form.Label>Book Title</Form.Label>
              <Form.Control
                className="input-control"
                type="password"
                name="password"
                value={password}
                placeholder="title of the book"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="light" type="submit" className="submit-btn">
              Submit
            </Button>
          </Form>
        </div>
      );

}

export default Login;