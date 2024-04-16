// ListaTareas.js
import React from 'react';

import style from './Lista.module.css';
import Tarea from '../Tarea/Tarea'; // Importa el componente NotaItem

function ListaTareas({ tareas, cambiarEstado, eliminarTarea }) {
  return (
    <ul className={style.listanotas}>
      {tareas.map((tareas) => (
        <Tarea
          key={tareas.id}
          tareas={tareas}
          cambiarEstado={cambiarEstado}
          eliminarTarea={eliminarTarea}
        />
      ))}
    </ul>
  );
}

export default ListaTareas;
