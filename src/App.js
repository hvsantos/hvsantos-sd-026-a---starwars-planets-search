import React, { useState, useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import './App.css';
import FilterName from './components/FilterName';
import Header from './components/Header';
import Loading from './components/Loading';
import MyProvider from './context/MyProvider';
import Home from './pages/Home';

function App() {
  const [planets, setPlanets] = useState(null);
  const [filterName, setFilterName] = useState('');
  const [filterNumber, setFilterNumber] = useState([]);
  const [sortBy, setSortBy] = useState({ by: '', willFilter: false });
  const globalContext = {
    planets: {
      planets,
      setPlanets,
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

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const data = await response.json();
      setPlanets(data.results);
    };

    act(() => {
      fetchData();
    });
  }, [setPlanets]);

  if (!planets) return <Loading />;
  return (
    <MyProvider.Provider value={ globalContext }>
      <Header />
      <FilterName />
      <Home />
    </MyProvider.Provider>
  );
}

export default App;
