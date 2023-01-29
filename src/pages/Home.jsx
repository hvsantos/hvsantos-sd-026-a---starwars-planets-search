import React, { useContext } from 'react';

import MyProvider from '../context/MyProvider';

import Table from '../components/Table';
import FilterInputs from '../components/FilterInputs';
import FiltersList from '../components/FiltersList';

const style = {
  display: 'flex',
  gap: '10px',
  margin: '10px 0',
};

export default function Home() {
  const { numberFilter: { filterNumber } } = useContext(MyProvider);
  return (
    <div>
      <div style={ style }>
        <FilterInputs />
      </div>
      { filterNumber.length > 0 ? <FiltersList /> : ''}
      <Table />
    </div>
  );
}
