import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBar = ({ setSearchResults }) => {
  const history = useHistory();
  const [search, setSearch] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('that worked');
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setSearchResults(res.meals);
        history.push('/results');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="main-searchbar">
      <h2>Search For a Recipe</h2>
      <i className="fas fa-search"></i>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          id="main-search-input"
          type="text"
          label="search"
        />
      </form>
      <button id="main-search-btn">Choose For Me</button>
    </div>
  );
};

export default SearchBar;
