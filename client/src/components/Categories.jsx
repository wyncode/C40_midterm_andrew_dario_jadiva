import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Categories = () => {
  const { categories } = useContext(AppContext);

  return (
    <section>
      <h2 id="feat-cat">Featured Categories</h2>
      <div className="rows-front-page">
        <div className="columns-cat">Poultry</div>
        <div className="columns-cat">Pasta</div>
        <div className="columns-cat">Seafood</div>
        <div className="columns-cat">Vegetarian</div>
      </div>
      <h2 id="new-recipes">New Recipes</h2>
      <div className="rows-front-page">
        <div className="columns-cat">Teriyaki Chicken Casserole</div>
        <div className="columns-cat">Recheado Masala Fish</div>
        <div className="columns-cat">Prawn & Fennel Bisque</div>
        <div className="columns-cat">Koshari</div>
      </div>
    </section>
  );
};

export default Categories;
