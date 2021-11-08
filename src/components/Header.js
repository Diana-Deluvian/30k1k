import React, { useState, useEffect } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';

const Header = () => {
    const history = useHistory();
    const location = useLocation();
    const [navigation, setNavigation] = useState(() => {
        if(location.pathname.toLowerCase().includes("word")) return '30k'
        else if(location.pathname.toLowerCase().includes("book")) return '1k'
        else if(location.pathname.toLowerCase().includes("login")) return 'login'
        return '';
    });
    useEffect(() => {
        if(location.pathname.toLowerCase().includes("word")) setNavigation('30k')
        else if(location.pathname.toLowerCase().includes("book")) setNavigation('1k')
        else if(location.pathname.toLowerCase().includes("login")) return 'login'
      },[location.pathname]);
  return (
    <header>
      <h1><span onClick={() => { history.push("/word"); }}>30k</span>
      /
      <span onClick={() => { history.push("/books"); }}>1k</span></h1>
      <hr />
      {(() => {
          

          if (navigation === '30k') {
              
            return <div className="links">
            <NavLink to="/word" className="link" activeClassName="active" exact>
       Word
      </NavLink>
      <NavLink to="/addWord" className="link" activeClassName="active">
        Add Word
      </NavLink>
      <NavLink to="/words" className="link" activeClassName="active">
        All Words
      </NavLink>
      </div>
          }

          if (navigation === '1k') {
            return <div className="links">
            <NavLink to="/books" className="link" activeClassName="active" exact>
        Books List
      </NavLink>
      <NavLink to="/addBook" className="link" activeClassName="active">
        Add Book
      </NavLink>
      </div>
          }
          if (navigation === 'login') { return  }

          return <h1>Please select a category!</h1>
        })()}

    </header>
  );
};

export default Header;