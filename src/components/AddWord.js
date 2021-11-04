import React, { useContext } from 'react';
import WordForm from './WordForm';
import WordsContext from '../context/WordsContext';

const AddWord = ({ history }) => {
  const { words, setWords } = useContext(WordsContext);

  const handleOnSubmit = (word) => {
    setWords([word, ...words]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <WordForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddWord;