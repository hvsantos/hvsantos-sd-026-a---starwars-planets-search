import React, { useEffect, useContext } from 'react';

import MyProvider from '../context/MyProvider';

import Table from '../components/Table';
import Loading from '../components/Loading';

export default function Home() {
  const { planets, setPlanets } = useContext(MyProvider);
  useEffect(() => {
    const url = 'https://swapi.dev/api/planets';
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPlanets(data.results));
  }, [setPlanets]);
  if (!planets) return <Loading />;
  console.log(planets);
  return (
    <div>
      
      <Table />
    </div>
  );
}
