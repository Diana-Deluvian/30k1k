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

import Login from '../components/Login';
import useToken from '../hooks/useToken'

const DATA = [{
  wordname: "delienation",
  type: "verb",
  meaning: "noun - the action of describing or portraying something precisely; the action of indicating the exact position of a border or boundary",
  example: "the artist's exquisite delineation of costume and jewellery",
  additionalInfo: "the artist's exquisite delineation of costume and jewellery",
  id: "1"
},
{
  wordname: "mendacious",
  type: "yolo",
  meaning: "adjective - not telling the truth; lying",
  example: "mendacious propaganda",
  additionalInfo: "the artist's exquisite delineation of costume and jewellery",
  id: "2"
}
]


const AppRouter = () => {
  const [books, setBooks] = useLocalStorage('books', []);
  const [words, setWords] = useState(DATA);

  const { token, setToken } = useToken();
  

  return (
    <BrowserRouter>
      <div className="myContainer">
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
          <Switch>
            <Route component={Login} path="/login" exact={true} />
          </Switch>
        </div>
      </div> 
    </BrowserRouter>
  );
};


export default AppRouter;