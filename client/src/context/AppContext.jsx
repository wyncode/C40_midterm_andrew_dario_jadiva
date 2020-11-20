import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesUrl =
      'https://www.themealdb.com/api/json/v1/1/categories.php';
    fetch(categoriesUrl)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        console.log(res);
        setCategories(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        categories,
        setCategories
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
