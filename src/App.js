import React, { useState } from 'react';
import './App.css';
import MyProvider from './context/MyProvider';
import Home from './pages/Home';

function App() {
  const [planets, setPlanets] = useState(null);
  const globalContext = {
    planets,
    setPlanets,
  };

  return (
    <MyProvider.Provider value={ globalContext }>
      <Home />
    </MyProvider.Provider>
  );
}

export default App;
