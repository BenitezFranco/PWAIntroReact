import React from 'react';

function ListaNota({ nota, cambiarEstado, eliminarNota }) {
  return (
    <ul>
      {nota.map((nota) => (
        <li key={nota.id}>
          <input
            type="checkbox"
            checked={nota.completed}
            onChange={() => cambiarEstado(nota.id)}
          />
          <span style={{ textDecoration: nota.completed ? 'line-through' : 'none' }}>
            {nota.text}
          </span>
          <button onClick={() => eliminarNota(nota.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default ListaNota;
