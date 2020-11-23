import React from 'react';
import { Link } from 'react-router-dom';
const SearchResults = ({ searchResults }) => {
  return (
    <div className="search-results">
      {searchResults?.map((result) => {
        return (
          <div key={result.idMeal}>
            <Link to={`/meal/${result.idMeal}`}>
              <div>{result.strMeal}</div>
            </Link>
            <div>{result.strArea}</div>
            <img src={result.strMealThumb} alt={result.strMeal} />
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
