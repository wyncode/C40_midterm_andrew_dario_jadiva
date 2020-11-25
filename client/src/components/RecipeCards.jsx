import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const RecipeCards = ({ cardData }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cardData.strMealThumb} />
      <Card.Body>
        <Card.Title>Result name</Card.Title>
        <Link to={`/meal/${cardData.idMeal}`}>
          <Button variant="primary">{cardData.strMeal}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
export default RecipeCards;
