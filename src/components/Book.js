import React, {useContext} from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import AuthContext from '../context/AuthContext';


const Book = ({
  _id,
  bookname,
  author,
  source,
  optionSelected,
  additionalInfo,
  handleRemoveBook
}) => {
    const history = useHistory();
    const {auth, setAuth} = useContext(AuthContext);
    const {isAuth, noteToUser } = auth;
    const categories = optionSelected && optionSelected.map(option => option.value).join (", ")
  return (
    <Card style={{ maxWidth: '80ch' }} className="book">
      <Card.Body>
        <Card.Title className="book-title">{bookname}</Card.Title>
        <div className="book-details">
          <div>Author: {author}</div>
          <div>Categories: { categories } </div>
          <div>source: {source} </div>
          <div className="additionalInfo">{additionalInfo} </div>
        </div>
        <Button variant="light" onClick={() => history.push(`/editBook/${_id}`)}>
            Edit
        </Button>{' '}
        <Button variant="dark" disabled={!isAuth} onClick={() => handleRemoveBook(_id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Book;