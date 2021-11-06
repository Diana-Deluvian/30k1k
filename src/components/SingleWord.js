import React, {useContext} from 'react';
import WordsContext from '../context/WordsContext';

const Word = () => {
    const { words, setWords } = useContext(WordsContext);
    let {wordname, meaning, example, additionalInfo, id } = words.at(-1);
    return (
        <React.Fragment>
      <h1>{wordname}</h1>
      <p>{meaning}</p>
      <p>{example}</p>
    </React.Fragment>
    )
}

export default Word;