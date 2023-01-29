import React, { useContext } from 'react';
import MyProvider from '../context/MyProvider';

export default function FilterName() {
  const { nameFilter: { filterName, setFilterName } } = useContext(MyProvider);

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
