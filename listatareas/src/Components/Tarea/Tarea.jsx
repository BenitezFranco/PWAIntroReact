// NotaItem.js
import React from 'react';
import { FormGroup, Input, Label, Col, Button } from 'reactstrap';
import style from '../ListaTareas/Lista.module.css';

function Tarea({ tareas, cambiarEstado, eliminarTarea }) {
  return (
    <li className={style.notaitem}>
      <FormGroup switch className={style.notalabel}>
        <Input
          type="checkbox"
          checked={tareas.completed}
          onChange={() => cambiarEstado(tareas.id)}
        />
        <Label check className={style.notalabel}>
          <span className={tareas.completed ? style.completed : style.notcompleted}>
            {tareas.text}
          </span>
        </Label>
      </FormGroup>
      <FormGroup check row className={style.notadelete}>
        <Col sm={{ offset: 2, size: 10 }}>
          <Button color="danger" onClick={() => eliminarTarea(tareas.id)}>
            Eliminar
          </Button>
        </Col>
      </FormGroup>
    </li>
  );
}

export default Tarea;
