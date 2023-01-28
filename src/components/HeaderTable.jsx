import React from 'react';

export default function HeaderTable() {
  const arrHead = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate',
    'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films', 'Created',
    'Edited', 'Url'];
  return (
    <thead>
      <tr>
        {arrHead.map((head) => <th key={ `TableHead${head}` }>{head}</th>)}
      </tr>
    </thead>
  );
}
