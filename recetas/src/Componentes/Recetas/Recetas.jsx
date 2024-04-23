import React from 'react';
import recetasData from '../../mocks/recetas.json';

const Recetas = () => {
  return (
    <div>
      <h1>Recetas</h1>
      <ul>
        {recetasData.recetas.map(receta => (
          <li key={receta.id}>
            <h2>{receta.titulo}</h2>
            <p>{receta.descripcion}</p>
            <img src={receta.imagen} alt={receta.titulo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recetas;
