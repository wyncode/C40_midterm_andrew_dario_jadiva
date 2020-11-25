import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Categories = () => {
  const { categories } = useContext(AppContext);

  return (
    <section>
      <h3 id="feat-cat">Featured Categories</h3>
      <div className="rows-front-page">
        <div className="columns-cat">Chicken</div>
        <div className="pasta-cat">Pasta</div>
        <div className="seafood-cat">Seafood</div>
        <div className="vegetarian-cat">Vegetarian</div>
      </div>
      <h3 id="new-recipes">New Recipes</h3>
      <div className="rows-front-page">
        <div className="teriyaki-cat">Teriyaki Chicken Casserole</div>
        <div className="recheado-cat">Recheado Masala Fish</div>
        <div className="prawn-cat">Prawn & Fennel Bisque</div>
        <div className="kos-cat">Koshari</div>
      </div>
    </section>
  );
};

export default Categories;
