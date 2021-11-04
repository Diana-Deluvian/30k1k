import React, {useState} from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import EditBook from '../components/EditBook';

import SingleWord from '../components/SingleWord';
import WordsList from '../components/WordsList';
import AddWord from '../components/AddWord';
import EditWord from '../components/EditWord';
import useLocalStorage from '../hooks/useLocalStorage';
import BooksContext from '../context/BooksContext';
import WordsContext from '../context/WordsContext';

const DATA = [{
  wordname: "diana",
  meaning: "fire",
  example: "diana is fire",
  additionalInfo: "yo",
  id: "1"
},
{
  wordname: "diana",
  meaning: "fire",
  example: "diana is fire",
  additionalInfo: "",
  id: "2"
}
]


const AppRouter = () => {
  const [books, setBooks] = useLocalStorage('books', []);
  const [words, setWords] = useState(DATA);
  

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <BooksContext.Provider value={{ books, setBooks }}>
            <Switch>
              <Route component={BooksList} path="/books" exact={true} />
              <Route component={AddBook} path="/addBook" />
              <Route component={EditBook} path="/editBook/:id" />
              
            </Switch>
          </BooksContext.Provider>
          <WordsContext.Provider value={{words, setWords}}>
            <Switch>
              <Route component={SingleWord} path="/word" exact={true} />
              <Route component={WordsList} path="/words" exact={true} />
              <Route component={AddWord} path="/addWord" />
              <Route component={EditWord} path="/editWord/:id" />
              
            </Switch>
          </WordsContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};


export default AppRouter;