import React from 'react';

function IterarLista({ json, arreglo, tipo }) {
  return (
    <div>
      <ul className={`${tipo} list-inside`}>
        {json[arreglo].map((instruccion, index) => (
          <li key={index}>{instruccion}</li>
        ))}
      </ul>
    </div>
  );
}

export default IterarLista;
