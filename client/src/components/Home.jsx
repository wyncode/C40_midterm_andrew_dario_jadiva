import React from 'react';
import Categories from './Categories';
import SearchBar from './SearchBar';
import SideNavbar from './SideNavbar';

const Home = ({ setSearchResults }) => {
  return (
    <>
      <section>
        <h1 id="title">Hangry Recipes</h1>
      </section>
      <div className="hero-image">
        <SearchBar setSearchResults={setSearchResults} />
      </div>
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
      <Categories />
    </>
  );
};

export default Home;
