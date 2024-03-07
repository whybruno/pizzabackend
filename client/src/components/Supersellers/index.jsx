import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import superseller1 from "../../assets/pizza-images/01.png";
import superseller2 from "../../assets/pizza-images/02.png";
import superseller3 from "../../assets/pizza-images/03.png";
import './index.css';

function GroupExample() {
  return (

    <CardGroup id='Supersellers' className="cards">
      <Card id="card1">
        <Card.Img variant="top" src={superseller1} />
        <Card.Body>
          <Card.Title id="cardtitle">Superseller 1</Card.Title>
          <Card.Text id="cardtext">
            Info
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card id="card2">
        <Card.Img variant="top" src={superseller2} />
        <Card.Body>
          <Card.Title id="cardtitle">Superseller 2</Card.Title>
          <Card.Text id="cardtext">
            Info
          </Card.Text>
        </Card.Body>
      </Card>

      <Card id="card3">
        <Card.Img variant="top" src={superseller3} />
        <Card.Body>
          <Card.Title id="cardtitle">Superseller 3</Card.Title>
          <Card.Text id="cardtext"> 
            Info
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>

  );
}

export default GroupExample;


