import React, { useContext, useState } from 'react';
import MyProvider from '../context/MyProvider';

export default function FilterInputs() {
  const [selectColumn, setSelectColumn] = useState('population');
  const [selectComparison, setSelectComparison] = useState('maior que');
  const [inputValue, setInputValue] = useState(0);
  const {
    numberFilter: {
      filterNumber,
      setFilterNumber,
    } } = useContext(MyProvider);
  const comparisonOpts = ['maior que', 'menor que', 'igual a'];
  const columnOpts = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  let filteredOpts = columnOpts;

  function filterFunc(checked) {
    return checked.length === 0
      ? columnOpts
      : columnOpts.filter((option) => {
        const verify = checked.every(({ column }) => column !== option);
        return verify;
      });
  }
  filteredOpts = filterFunc(filterNumber);

  function handleChange() {
    const newObj = {
      column: selectColumn,
      comparison: selectComparison,
      value: inputValue,
    };
    const newArr = [...filterNumber, newObj];
    setFilterNumber(newArr);
    filteredOpts = filterFunc(newArr);
    setSelectColumn(filteredOpts[0]);
  }

  return (
    <div
      style={ {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        margin: '10px 0',
        border: 'solid 1px black',
        width: '200px',
        padding: '5px',
      } }
    >
      <label htmlFor="selectColumn">
        { 'Coluna: ' }
        <select
          value={ selectColumn }
          onChange={ ({ target: { value } }) => setSelectColumn(value) }
          data-testid="column-filter"
          id="selectColumn"
        >
          { filteredOpts.map((option, index) => (
            <option key={ `${option}${index}` } value={ option }>{ option }</option>)) }
        </select>
      </label>
      <label htmlFor="selectComparison">
        { 'Comparação: ' }
        <select
          value={ selectComparison }
          onChange={ ({ target: { value } }) => setSelectComparison(value) }
          data-testid="comparison-filter"
          id="selectComparison"
        >
          { comparisonOpts.map((option, index) => (
            <option key={ `${option}${index}` } value={ option }>{ option }</option>)) }
        </select>
      </label>
      <label htmlFor="inputFilter">
        { 'Valor: ' }
        <input
          id="inputFilter"
          data-testid="value-filter"
          value={ inputValue }
          onChange={ ({ target: { value } }) => setInputValue(value) }
        />
      </label>
      <div>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleChange }
        >
          Filtrar
        </button>
      </div>
    </div>
  );
}
