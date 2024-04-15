// ListaNota.js
import React from 'react';
import { FormGroup, Input, Label, Col, Button } from 'reactstrap';
import style from './Lista.module.css';
import Nota from '../Nota/Nota'; // Importa el componente NotaItem

function ListaNota({ nota, cambiarEstado, eliminarNota }) {
  return (
    <ul className={style.listanotas}>
      {nota.map((nota) => (
        <Nota
          key={nota.id}
          nota={nota}
          cambiarEstado={cambiarEstado}
          eliminarNota={eliminarNota}
        />
      ))}
    </ul>
  );
}

export default ListaNota;
