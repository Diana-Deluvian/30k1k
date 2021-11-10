import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const Word = ({
  id,
  wordname,
  meaning,
  example,
  type,
  additionalInfo,
  handleRemoveWord
}) => {
    const history = useHistory();
    console.log(type);
  return (
    <Card style={{ maxWidth: '80ch'}} className="word">
      <Card.Body>
        <Card.Title className="word-title">{wordname}</Card.Title>
        <div className="word-details">
          <div>Definition: {type.join(", ")} - {meaning}</div>
          <div>Example: {example} </div>
          <div className="additionalInfo"> {additionalInfo} </div>
        </div>
        <Button variant="light" onClick={() => history.push(`/editWord/${id}`)}>
            Edit
        </Button>{' '}
        <Button variant="dark" onClick={() => handleRemoveWord(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Word;