import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setRecipe(res.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="main-container">
      {recipe?.map((el) => {
        return (
          <div key={el.mealId}>
            <h2 className="meal-title">{el.strMeal}</h2>
            <img
              className="img-recipe"
              src={el.strMealThumb}
              alt={el.strMeal}
            />
            <h3 className="instructions-recipe">Instructions</h3>
            <p className="recipe-instructions">{el.strInstructions}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Recipe;
