import React, { useContext } from 'react';
import WordForm from './WordForm';
import WordsContext from '../context/WordsContext';

const AddWord = ({ history }) => {
  const { words, setWords } = useContext(WordsContext);

  const handleOnSubmit = (word) => {
    fetch('http://localhost:8080/word', {
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(word),
      
    }).then(response => response.json())
    .then(data => {
      console.log(data);
      setWords([data, ...words]); })
    history.push('/words');
  }


  return (
    <React.Fragment>
      <WordForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddWord;