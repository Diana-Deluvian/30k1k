import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import EditBook from '../components/EditBook';

import Word from '../components/Word'
import useLocalStorage from '../hooks/useLocalStorage';
import BooksContext from '../context/BooksContext';


const AppRouter = () => {
  const [books, setBooks] = useLocalStorage('books', []);

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
          <Switch>
            <Route component={Word} path="/word" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};


export default AppRouter;