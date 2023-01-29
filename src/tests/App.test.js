import React from 'react';
import { getAllByTestId, getByRole, getByTestId, getByText, render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import { mockData } from '../tests/helper/data';
import userEvent from '@testing-library/user-event';

describe('Test Coverage', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockData),
    }));
    render(<App />);
  })

  test('O Loading aparece ao abrir a página', () => {
    const loading = screen.getByText('Loading...')
    expect(loading).toBeInTheDocument();
  });

  test('Verifica se o fetch é chamado', () => {
    expect(fetch).toHaveBeenCalled();
  })

  test('O Input de texto aparece após o Fetch', async () => {
    await waitFor(() => {

      const inputName = screen.getByTestId("name-filter");
      expect(inputName).toBeInTheDocument();
      expect(inputName.value).toBe('');

      userEvent.type(inputName, 'too');
      expect(inputName.value).toBe('too');

    })

  });

  test('Os elementos de filtro estão na tela', async () => {
    await waitFor(() => {

      const selectColuna = screen.getByTestId("column-filter")
      expect(selectColuna).toBeInTheDocument();
      expect(selectColuna.value).toBe("population")

      const selectComparison = screen.getByTestId("comparison-filter")
      expect(selectComparison).toBeInTheDocument();
      expect(selectComparison.value).toBe("maior que");
      
      const inputValue = screen.getByTestId("value-filter");
      expect(inputValue).toBeInTheDocument();
      expect(inputValue.value).toBe("0");

      const filterButton = screen.getByTestId("button-filter")
      expect(filterButton).toBeInTheDocument();

    })
  });

  test('Verifica se o Filtro funciona', async () => {
    await waitFor(() => {

      const planetsNames = mockData.results.map((planet) => planet.name);
      planetsNames.forEach((name) => {
        const getNewPlanet = screen.getByText(name);
        expect(getNewPlanet).toHaveTextContent(name);
      })

      const planets = screen.getAllByTestId("linha-planeta");
      expect(planets.length).toBe(10);


      const selectColuna = screen.getByTestId("column-filter");
      userEvent.selectOptions(selectColuna, 'diameter');

      const selectComparison = screen.getByTestId("comparison-filter");
      userEvent.selectOptions(selectComparison, 'maior que');

      const inputValue = screen.getByTestId("value-filter");
      userEvent.type(inputValue, '8900');

      const filterButton = screen.getByTestId("button-filter");
      userEvent.click(filterButton);

      const afterFilter = screen.getAllByTestId("linha-planeta");
      expect(afterFilter.length).toBe(7);

    })
  })
});
