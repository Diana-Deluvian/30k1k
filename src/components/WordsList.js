import _ from 'lodash';
import Word from './Word';
import React, { useContext } from 'react';
import WordsContext from '../context/WordsContext';


const WordsList = () => {
  const { words, setWords } = useContext(WordsContext);
  const handleRemoveWord = (id) => {
    setWords(words.filter((word) => word.id !== id));
  };

  return (
    <React.Fragment>
      {words.map((word) => (
          <Word key={word.id} {...word} handleRemoveWord={handleRemoveWord} />
      ))}
    </React.Fragment>
  );
};

export default WordsList;