import React, { useState } from 'react';
import './App.css';
import FilterName from './components/FilterName';
import Header from './components/Header';
import MyProvider from './context/MyProvider';
import Home from './pages/Home';

function App() {
  const [planets, setPlanets] = useState(null);
  const [originPlanets, setOriginPlanets] = useState(null);
  const [filterName, setFilterName] = useState('');
  const [filterNumber, setFilterNumber] = useState({
    filters: [{ colunm: '', comparison: '', value: '' }],
    numberFilter: false,
  });
  const [sortBy, setSortBy] = useState({ by: '', sortFilter: false });
  const globalContext = {
    planets: {
      planets,
      setPlanets,
    },
    originalPlanets: {
      originPlanets,
      setOriginPlanets,
    },
    nameFilter: {
      filterName,
      setFilterName,
    },
    numberFilter: {
      filterNumber,
      setFilterNumber,
    },
    sort: {
      sortBy,
      setSortBy,
    },
  };

  console.log(globalContext);

  return (
    <MyProvider.Provider value={ globalContext }>
      <Header />
      <FilterName />
      <Home />
    </MyProvider.Provider>
  );
}

export default App;
