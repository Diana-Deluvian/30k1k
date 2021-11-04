import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const Word = ({
  id,
  word,
  meaning,
  example,
  handleRemoveWord
}) => {
    const history = useHistory();
  return (
    <Card style={{ width: '18rem' }} className="book">
      <Card.Body>
        <Card.Title className="book-title">{word}</Card.Title>
        <div className="book-details">
          <div>Definition: {meaning}</div>
          <div>Example: {example} </div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/editWord/${id}`)}>
            Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveWord(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Word;