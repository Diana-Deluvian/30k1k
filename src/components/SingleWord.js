import React, { useContext, useState } from 'react';
import WordsContext from '../context/WordsContext';
import _ from 'lodash';
import { Button } from 'react-bootstrap';

function randomWord(length) {
  let weight = Math.ceil(Math.random() * Math.ceil(Math.log(length)));

  return Math.floor(Math.random() * (Math.floor(length/weight)));
  
  //this is a long and complicated way of saying, we weight the result
  //using natural log of the lenght of the words is over, e.g 140 ~ e^5
}

const Word = () => {
  const { words, setWords } = useContext(WordsContext);
  console.log(words);
  const [word, setWord] = useState(words && words.at(-1) || {});
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
            <Button variant="light" onClick={ () => setWord(words.at(randomWord(words.length))) }>Random!</Button>
          </div>
          ) : (
            <p className="message">No words available. Please add some words.</p>
          )}

          
  </React.Fragment> )

}

export default Word;


/*
function randomWord() {
  let weight = Math.pow(10, Math.floor(Math.random() * Math.ceil(Math.log(words.length))))
  let newWord = words.at(Math.floor(Math.random() * (Math.floor(words.length/ weight))))
  setWord(newWord)
  //leaving this as an interesting algorithm, albeit not fit for my purposes here
}
*/