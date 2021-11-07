import React, { useContext, useState } from 'react';
import WordsContext from '../context/WordsContext';
import _ from 'lodash';
import { Button } from 'react-bootstrap';

const Word = () => {
  const { words, setWords } = useContext(WordsContext);
  const [word, setWord] = useState(words.at(-1) || {});
    //gets the last word
    let {wordname, meaning, example, additionalInfo, type, id } = word; 

  return (
    <React.Fragment>
      
        {!_.isEmpty(words) ? (
          <div className="single-word">
            <h1>{wordname}</h1>
            <p className="type">{type}</p>
            <p className="definition">{meaning}</p>
            <p className="example">"{example}"</p>
            <p className="additionalInfo">{additionalInfo}</p>
            <Button variant="light" onClick={()=> { 
            let newWord = words.at(Math.floor(Math.random() * words.length))
            setWord(newWord) } }>Random!</Button>
          </div>
          ) : (
            <p className="message">No words available. Please add some words.</p>
          )}

          
  </React.Fragment> )

}

export default Word;