import React from 'react';
import { Card } from 'react-bootstrap';

const UserItem = ({country,captial,population,flag}) => {
  return (
    <Card className="user">
      <Card.Body>
       <Card.Img variant="top" src={flag} className="user__image" alt={country} />
        <Card.Title className="user__name"><strong>Country Name:-</strong>{country}</Card.Title>
        <Card.Text className="user__details">
          <span>
            <strong>Captial:</strong> {captial}
          </span>
           <span>
            <strong>Population:</strong> {population}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserItem;