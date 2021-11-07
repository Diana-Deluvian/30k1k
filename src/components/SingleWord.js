import React, { useContext } from 'react';
import WordsContext from '../context/WordsContext';
import _ from 'lodash';

const Word = () => {
  const { words, setWords } = useContext(WordsContext);
    let {wordname, meaning, example, additionalInfo, type, id } = words.at(-1) || {};
  //gets the last word
  return (
    <React.Fragment>
      
        {!_.isEmpty(words) ? (
          <div className="single-word">
            <h1>{wordname}</h1>
            <p className="type">verb</p>
            <p className="definition">{meaning}</p>
            <p className="example">"{example}"</p>
            <p className="additionalInfo">{additionalInfo}</p>
          </div>
          ) : (
            <p className="message">No words available. Please add some words.</p>
          )}
  </React.Fragment> )

}

export default Word;