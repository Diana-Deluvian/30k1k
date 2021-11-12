import _ from 'lodash';
import Word from './Word';
import React, { useContext } from 'react';
import WordsContext from '../context/WordsContext';


const WordsList = () => {
  const { words, setWords } = useContext(WordsContext);
  const handleRemoveWord = (_id) => {
    fetch('http://localhost:8080/word/:'+_id, {
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
