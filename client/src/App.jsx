import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import { AppContextProvider } from './context/AppContext';
import './App.css';

const App = () => {
  const [serverMessage, setServerMessage] = useState('');

  const fetchDemoData = () => {
    fetch('/api/demo')
      .then((response) => response.json())
      .then((data) => setServerMessage(data.message));
  };

  useEffect(fetchDemoData, []);

  return (
    <AppContextProvider>
      <div id="demo">
        <Home />
      </div>
    </AppContextProvider>
  );
};

export default App;
