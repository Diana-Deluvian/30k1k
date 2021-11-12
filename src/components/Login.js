import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
//import PropTypes from 'prop-types';

const loginUser = (username, password) => {
    fetch('http://localhost:8080/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(username, password)
    })
      .then(data => {
        console.log("here", data);
        //console.log(data.body);
      })
   }

  /* const loginUser = (login) => {
    Axios({
      method: "POST",
      data: {
        username: login.username,
        password: login.password,
      },
      withCredentials: true,
      url: "http://localhost:8080/login",
    }).then((res) => console.log(res));
  }; */

const Login = ({setToken}) => {
    const [login, setLogin] = useState();

    const {username, password} = {login};

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);
            setLogin((prevState) => ({
              ...prevState,
              [name]: value
            }));
      };

    const handleSubmit = async e => {
    e.preventDefault();
   loginUser(login);
    //setToken(token);
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
     /* Login.propTypes = {
        setToken: PropTypes.func.isRequired 
  }*/
}

export default Login;