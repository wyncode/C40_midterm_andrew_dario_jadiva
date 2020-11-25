import React from 'react';
import RecipeCards from './RecipeCards';

const SearchResults = ({ searchResults }) => {
  return (
    <>
      <h1 id="title">Hangry Recipes</h1>
      <div className="search-content">
        <div className="top-search-box">
          <input
            id="top-search-input"
            type="text"
            className="search-bar-input"
            placeholder="search"
            label="search"
          />
          <button id="search-icon-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div className="search-results">
        {searchResults?.map((result) => {
          console.log(result);
          return (
            <>
              <div className="container">
                <RecipeCards cardData={result} />
                <div key={result.idMeal}></div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SearchResults;
