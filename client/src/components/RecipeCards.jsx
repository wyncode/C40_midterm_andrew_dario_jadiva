import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const RecipeCards = ({ cardData }) => {
  return (
    <div className="card-container">
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={cardData.strMealThumb} />
        <Card.Body className="card-body">
          <Card.Text>{cardData.strMeal}</Card.Text>
          <Link to={`/meal/${cardData.idMeal}`}>
            <Button variant="outline-primary">Get Recipe</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default RecipeCards;
