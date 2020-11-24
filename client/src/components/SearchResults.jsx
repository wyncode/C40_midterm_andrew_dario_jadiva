import React from 'react';
import RecipeCards from './RecipeCards';

const SearchResults = ({ searchResults }) => {
  return (
    <div className="search-results">
      {searchResults?.map((result) => {
        console.log(result);
        return (
          <div className="container">
            <RecipeCards cardData={result} />
            <div key={result.idMeal}>
              <div>{result.strArea}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
