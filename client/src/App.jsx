import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import Recipe from './components/Recipe';
import './App.css';
import SideNavbar from './components/SideNavbar';
import RecipeCards from './components/RecipeCards';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <BrowserRouter>
      <SideNavbar />
      <div className="main-container">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home setSearchResults={setSearchResults} {...props} />
            )}
          />
          <Route
            exact
            path="/meal/:id"
            render={(props) => <Recipe {...props} />}
          />
          <Route
            exact
            path="/results"
            render={(props) => (
              <SearchResults searchResults={searchResults} {...props} />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
