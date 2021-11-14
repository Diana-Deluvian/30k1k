import React, {useContext} from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import AuthContext from '../context/AuthContext';


const Word = ({
  _id,
  wordname,
  meaning,
  example,
  type,
  additionalInfo,
  handleRemoveWord
}) => {
    const history = useHistory();
    const { auth } = useContext(AuthContext);
    const { isAuth } = auth;
  return (
    <Card style={{ maxWidth: '80ch'}} className="word">
      <Card.Body>
        <Card.Title className="word-title">{wordname}</Card.Title>
        <div className="word-details">
          <div>Definition: {type && type.join(", ")} - {meaning}</div>
          <div>Example: {example} </div>
          <div className="additionalInfo"> {additionalInfo} </div>
        </div>
        <Button variant="light" onClick={() => history.push(`/editWord/${_id}`)}>
            Edit
        </Button>{' '}
        <Button variant="dark" disabled={!isAuth} onClick={() => handleRemoveWord(_id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Word;