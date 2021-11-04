import React, { useContext } from 'react';
import WordForm from './WordForm';
import { useParams } from 'react-router-dom';
import WordsContext from '../context/WordsContext';

const EditWord = ({ history }) => {
  const { words, setWords } = useContext(WordsContext);
  const { id } = useParams();
  const wordToEdit = words.find((word) => word.id === id);

  const handleOnSubmit = (word) => {
    const filteredWords = words.filter((word) => word.id !== id);
    setWords([word, ...filteredWords]);
    history.push('/');
  };

  return (
    <div>
      <WordForm word={wordToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditWord;