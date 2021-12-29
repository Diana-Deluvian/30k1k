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
  const { words } = useContext(WordsContext);
  const [index, setIndex] = useState((!_.isEmpty(words) && words.length-1) || 0);
  console.log(words[index]);   

  return (
    <React.Fragment>  
      {!_.isEmpty(words) ? (
        <div className="single-word">
          <h1>{words[index].wordname}</h1>
          <p className="type">{words[index].type && words[index].type.join(", ")}</p>
          <p className="definition">{words[index].meaning}</p>
          <p className="example">"{words[index].example}"</p>
          <p className="additionalInfo">{words[index].additionalInfo}</p>
          {words.length !== 1 && <Button variant="light" onClick={ () => {
            let newIndex = randomWord(words.length);
            while (index === newIndex) newIndex = randomWord(words.length);
            setIndex(newIndex);
            } }>Random!</Button>}
        </div>
        ) : (
          <p className="message">Words are still loading, please be patient.</p>
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