import React, { useContext } from 'react';
import MyProvider from '../context/MyProvider';

export default function TableRow() {
  const {
    planets: { planets },
    nameFilter: { filterName },
    numberFilter: { filterNumber },
  } = useContext(MyProvider);
  function checkFilter() {
    let checkPlanets = [...planets];
    filterNumber.forEach((filter) => {
      checkPlanets = checkPlanets.filter((planet) => {
        let verify = false;
        if (filter.comparison === 'maior que') {
          verify = Number(planet[filter.column]) > Number(filter.value);
        }
        if (filter.comparison === 'menor que') {
          verify = Number(planet[filter.column]) < Number(filter.value);
        }
        if (filter.comparison === 'igual a') {
          verify = Number(planet[filter.column]) === Number(filter.value);
        }
        return verify;
      });
    });
    return checkPlanets;
  }
  const filteredPlanets = filterNumber.length > 0 ? checkFilter() : planets;
  return (
    <tbody>
      { filteredPlanets.map((planet) => {
        const arrPlanet = [planet.name, planet.rotation_period, planet.orbital_period,
          planet.diameter, planet.climate, planet.gravity, planet.terrain,
          planet.surface_water, planet.population, planet.films, planet.created,
          planet.edited, planet.url];
        if (planet.name.toLowerCase().includes(filterName.toLowerCase())) {
          return (
            <tr key={ `${planet.diameter}${planet.name}` }>
              { arrPlanet.map((tabDesc) => (planet.name === tabDesc
                ? (
                  <td
                    key={ `${planet}${tabDesc}` }
                    data-testid="linha-planeta"
                  >
                    { tabDesc }
                  </td>
                )
                : (<td key={ `${planet}${tabDesc}` }>{ tabDesc }</td>)
              ))}
            </tr>
          );
        }
        return '';
      }) }
    </tbody>
  );
}
