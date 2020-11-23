import React from 'react';
import SideNavbar from './SideNavbar';

const Home = () => {
  return (
    <>
      <SideNavbar />
      {/* <div id="theSidebar" class="sidebar">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
        >&times;</a
      >
      <a href="#">Categories</a>
      <a href="#">Search By Main Ingredient</a>
      <a href="#">Recipes By Area</a>
      <a href="#">Find a Random Meal</a>
    </div>
    <div id="main">
      <button class="openbtn" onclick="openNav()">&#9776;</button>
    </div> */}
      <section>
        <h1 id="title">Hangry Recipes</h1>
      </section>
      <div class="hero-image">
        <div class="main-searchbar">
          <h2>Search For a Recipe</h2>
          <i class="fas fa-search"></i>
          <input id="main-search-input" type="text" label="search" />
          <button id="main-search-btn">Choose For Me</button>
        </div>
      </div>

      <div class="search-content">
        <div class="top-search-box">
          <input
            id="top-search-input"
            type="text"
            class="search-bar-input"
            placeholder="search"
            label="search"
          />
          <button id="search-icon-button">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
      <section>
        <h2 id="feat-cat">Featured Categories</h2>
        <div class="rows-front-page">
          <div class="columns-cat">Chicken</div>
          <div class="columns-cat">Pasta</div>
          <div class="columns-cat">Seafood</div>
          <div class="columns-cat">Vegetarian</div>
        </div>
        <h2 id="new-recipes">New Recipes</h2>
        <div class="rows-front-page">
          <div class="columns-cat">Teriyaki Chicken Casserole</div>
          <div class="columns-cat">Recheado Masala Fish</div>
          <div class="columns-cat">Prawn & Fennel Bisque</div>
          <div class="columns-cat">Koshari</div>
        </div>
      </section>
    </>
  );
};

export default Home;
