import _ from 'lodash';
import Word from './Word';
import React, { useContext, useState } from 'react';
import WordsContext from '../context/WordsContext';
import { Alert } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';


const WordsList = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const { isAuth, noteToUser, showErr  } = auth;
  const { words, setWords } = useContext(WordsContext);
  
  const handleRemoveWord = (_id) => {
    fetch('https://server30k-1k.herokuapp.com/word/'+_id, {
      method: 'DELETE',
      credentials: 'include',
      headers: {'Content-Type':'application/json'}  
    }).then(response => response.json())
    .then(data => {
      setWords(words.filter(elem => elem._id !== _id)); })
  };

  return (
    <React.Fragment>
      <div className="word-list">
      {!_.isEmpty(auth) ? 
      !isAuth && showErr &&<Alert style={{maxWidth: '60ch', margin: 'auto'}} variant="danger" 
      onClose={() => setAuth((prevState => ({...prevState, showErr: false})))} dismissible>
        <Alert.Heading>Wait a second, you're not Diana :(</Alert.Heading>
        <p>
          {noteToUser}
        </p>
      </Alert> 
       : (<> </>) }

        {!_.isEmpty(words) ? (
          words.map((word) => (
            <Word key={word.id} {...word} handleRemoveWord={handleRemoveWord} />
          ))
        ) : (
          <p className="message">No words available. Please add some words.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default WordsList;
