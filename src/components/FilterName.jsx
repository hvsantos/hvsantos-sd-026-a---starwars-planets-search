import React, { useContext } from 'react';
import MyProvider from '../context/MyProvider';
import Loading from './Loading';

export default function FilterName() {
  const { planets: { planets },
    nameFilter: { filterName, setFilterName },
  } = useContext(MyProvider);
  if (!planets) return <Loading />;
  return (
    <label htmlFor="filterName">
      { 'Buscar Por Nome: '}
      <input
        id="filterName"
        data-testid="name-filter"
        value={ filterName }
        onChange={ ({ target: { value } }) => setFilterName(value) }
      />
    </label>
  );
}
