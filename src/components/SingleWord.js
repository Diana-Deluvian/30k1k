import React, { useContext } from 'react';
import WordsContext from '../context/WordsContext';

const Word = () => {
    const { words, setWords } = useContext(WordsContext);
    let {wordname, meaning, example, additionalInfo, id } = words.at(0);
    //gets the last word
    return (
        <div className="single-word">
      <h1>{wordname}</h1>
      <p className="type">verb</p>
      <p className="definition">{meaning}</p>
      <p className="example">"{example}"</p>
      <p className="additionalInfo"></p>
    </div>
    )
}

export default Word;