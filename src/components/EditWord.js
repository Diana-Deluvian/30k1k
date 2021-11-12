import React, { useContext } from 'react';
import WordForm from './WordForm';
import { useParams } from 'react-router-dom';
import WordsContext from '../context/WordsContext';

const EditWord = ({ history }) => {
  const { words, setWords } = useContext(WordsContext);
  const { _id } = useParams();
  console.log(_id)
  const wordToEdit = words.find((word) => word._id === _id);

  const handleOnSubmit = (word, _id) => {
    fetch('http://localhost:8080/word/:'+_id, {
      method: 'PUT',
      credentials: 'include',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(word),  
    }).then(response => response.json())
    .then(data => {
      setWords([data, ...words.filter(elem => elem._id !== _id)]); })
    history.push('/words');
  }

  return (
    <div>
      <WordForm word={wordToEdit} handleOnSubmit={handleOnSubmit} isEditing={true} />
    </div>
  );
};

export default EditWord;