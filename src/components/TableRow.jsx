import React, { useContext } from 'react';
import MyProvider from '../context/MyProvider';

export default function TableRow() {
  const { planets: { planets }, nameFilter: { filterName } } = useContext(MyProvider);
  return (
    <tbody>
      { planets.map((planet) => {
        const arrPlanet = [planet.name, planet.rotation_period, planet.orbital_period,
          planet.diameter, planet.climate, planet.gravity, planet.terrain,
          planet.surface_water, planet.population, planet.films, planet.created,
          planet.edited, planet.url];
        if (planet.name.toLowerCase().includes(filterName.toLowerCase())) {
          return (
            <tr key={ `${planet.diameter}${planet.name}` }>
              { arrPlanet.map((tabDesc) => (
                <td key={ `${planet}${tabDesc}` }>{ tabDesc }</td>
              )) }
            </tr>
          );
        }
        return '';
      }) }
    </tbody>
  );
}
