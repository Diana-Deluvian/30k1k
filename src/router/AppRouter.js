import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import EditBook from '../components/EditBook';

import SingleWord from '../components/SingleWord';
import WordsList from '../components/WordsList';
import AddWord from '../components/AddWord';
import EditWord from '../components/EditWord';

import BooksContext from '../context/BooksContext';
import WordsContext from '../context/WordsContext';
import AuthContext from '../context/AuthContext';

import Login from '../components/Login';

const AppRouter = () => {
  const [words, setWords] = useState([]);
  const [books, setBooks] = useState([]);
  const [auth, setAuth] = useState({});

  useEffect(async () => {
    fetch('https://server30k-1k.herokuapp.com/words')
      .then((response) => response.json())
      .then((json) => {
        setWords(json);
      });
    fetch('https://server30k-1k.herokuapp.com/books')
      .then((response) => response.json())
      .then((json) => {
        setBooks(json);
      });

    if (localStorage.getItem('30k1kAuthToken')) {
      setAuth({ isAuth: true, showErr: false, noteToUser: null });
    } else
      setAuth({
        isAuth: false,
        showErr: true,
        noteToUser:
          "Please be aware that, as you are not Diana, you're not authorized to add posts or make any changes to this project. You're here for viewing purposes only.",
      });
  }, []);

  return (
    <BrowserRouter>
      <div className='myContainer'>
        <Header />
        <AuthContext.Provider value={{ auth, setAuth }}>
          <div className='main-content'>
            <BooksContext.Provider value={{ books, setBooks }}>
              <Switch>
                <Route component={BooksList} path='/books' exact={true} />
                <Route component={AddBook} path='/addBook' />
                <Route component={EditBook} path='/editBook/:_id' />
              </Switch>
            </BooksContext.Provider>
            <WordsContext.Provider value={{ words, setWords }}>
              <Switch>
                <Route component={SingleWord} path='/word' exact={true} />
                <Route component={WordsList} path='/words' exact={true} />
                <Route component={AddWord} path='/addWord' />
                <Route component={EditWord} path='/editWord/:_id' />
              </Switch>
            </WordsContext.Provider>
            <Switch>
              <Route component={Login} path='/login' exact={true} />
            </Switch>
          </div>
        </AuthContext.Provider>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
