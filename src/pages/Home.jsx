import React, { useEffect, useContext } from 'react';

import MyProvider from '../context/MyProvider';

import Table from '../components/Table';
import Loading from '../components/Loading';
import FilterInputs from '../components/FilterInputs';

export default function Home() {
  const { planets: { planets, setPlanets } } = useContext(MyProvider);
  useEffect(() => {
    const url = 'https://swapi.dev/api/planets';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPlanets(data.results);
      });
  }, [setPlanets]);
  if (!planets) return <Loading />;
  return (
    <div>
      <FilterInputs />
      <Table />
    </div>
  );
}
