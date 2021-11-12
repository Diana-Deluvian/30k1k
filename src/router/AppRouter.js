import React, {useEffect, useState} from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Axios from 'axios';

import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import EditBook from '../components/EditBook';

import SingleWord from '../components/SingleWord';
import WordsList from '../components/WordsList';
import AddWord from '../components/AddWord';
import EditWord from '../components/EditWord';
import useLocalStorage from '../hooks/useLocalStorage';
import useBackend from '../hooks/useBackend';
import BooksContext from '../context/BooksContext';
import WordsContext from '../context/WordsContext';

import Login from '../components/Login';
//import useToken from '../hooks/useToken'


const AppRouter = () => {
  //const [books2, setBooks2] = useLocalStorage('books', []);
  const [words, setWords] = useState([]);
  const [books, setBooks] = useState([]);
  console.log(books);

  useEffect(() => {
    fetch('http://localhost:8080/words' )
        .then(response => response.json())
        .then(json => {
            setWords(json);
            
      });
      fetch('http://localhost:8080/books' )
        .then(response => response.json())
        .then(json => {
            setBooks(json);
      });
  }, [] )


  
  
  //const { token, setToken } = useToken();
  

  return (
    <BrowserRouter>
      <div className="myContainer">
        <Header />
        <div className="main-content">
          <BooksContext.Provider value={{ books, setBooks }}>
            <Switch>
              <Route component={BooksList} path="/books" exact={true} />
              <Route component={AddBook} path="/addBook" />
              <Route component={EditBook} path="/editBook/:_id" />
              
            </Switch>
          </BooksContext.Provider>
          <WordsContext.Provider value={{words, setWords}}>
            <Switch>
              <Route component={SingleWord} path="/word" exact={true} />
              <Route component={WordsList} path="/words" exact={true} />
              <Route component={AddWord} path="/addWord" />
              <Route component={EditWord} path="/editWord/:_id" />
              
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