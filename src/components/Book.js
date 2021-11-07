import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const Book = ({
  id,
  bookname,
  author,
  source,
  additionalInfo,
  handleRemoveBook
}) => {
    const history = useHistory();
  return (
    <Card style={{ maxWidth: '80ch' }} className="book">
      <Card.Body>
        <Card.Title className="book-title">{bookname}</Card.Title>
        <div className="book-details">
          <div>Author: {author}</div>
          <div>source: {source} </div>
          <div>Additional Information: {additionalInfo} </div>
        </div>
        <Button variant="light" onClick={() => history.push(`/editBook/${id}`)}>
            Edit
        </Button>{' '}
        <Button variant="dark" onClick={() => handleRemoveBook(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Book;