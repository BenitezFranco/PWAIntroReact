import { FormGroup, Input, Label, Col, Button } from 'reactstrap';
import style from './Lista.module.css'; // Importa tu archivo CSS para estilos personalizados

function ListaNota({ nota, cambiarEstado, eliminarNota }) {
  return (
    <ul className={style.listanotas}>
      {nota.map((nota) => (
        <li key={nota.id} className={style.notaitem}>
          <FormGroup switch className={style.notalabel}>
            <Input
              type="checkbox"
              checked={nota.completed}
              onChange={() => cambiarEstado(nota.id)}
            />
            <Label check className={style.notalabel}>
              <span className={nota.completed ? style.completed : style.notcompleted}>
                {nota.text}
              </span>
            </Label>
          </FormGroup>
          <FormGroup check row className={style.notadelete}>
            <Col sm={{ offset: 2, size: 10 }}>
              <Button color="danger" onClick={() => eliminarNota(nota.id)}>
                Eliminar
              </Button>
            </Col>
          </FormGroup>

          
          


        </li>
      ))}
    </ul>
  );
}

export default ListaNota;
