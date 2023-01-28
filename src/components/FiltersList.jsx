import React, { useContext } from 'react';
import MyProvider from '../context/MyProvider';

const style = {
  margin: '2px',
};

export default function FiltersList() {
  const {
    numberFilter: {
      filterNumber,
      setFilterNumber,
    } } = useContext(MyProvider);

  function handleClick(type) {
    const filteredArr = filterNumber.filter((filter) => filter.column !== type);
    setFilterNumber(filteredArr);
  }
  return (
    <div>
      <button
        data-testid="button-remove-filters"
        type="button"
        onClick={ () => setFilterNumber([]) }
      >
        Remover todas filtragens
      </button>
      { filterNumber.map(({ comparison, column, value }) => (
        <div key={ `${column}${value}` } data-testid="filter">
          <p style={ style }>{column}</p>
          <p style={ style }>{comparison}</p>
          <p style={ style }>{value}</p>
          <button
            type="button"
            onClick={ () => handleClick(column) }
          >
            X
          </button>
        </div>
      )) }
    </div>
  );
}
