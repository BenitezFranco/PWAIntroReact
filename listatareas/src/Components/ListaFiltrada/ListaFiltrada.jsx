import React, { useState } from 'react';
import { FormGroup, Input, Button, Label, Col } from 'reactstrap';
import style from '../ListaNota/Lista.module.css'; // Importa tu archivo CSS para estilos personalizados

function ListaFiltrada({nota,cambiarEstado, eliminarNota}) {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [listaFiltrada, setListaFiltrada] = useState([]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setTerminoBusqueda(value);
    if (value === '') {
      setListaFiltrada([]); // Limpiar las notas filtradas si el término de búsqueda está vacío
    } else {
      // Filtrar las notas según el término de búsqueda
      const filteredList = nota.filter(item =>
        item.text.toLowerCase().includes(value.toLowerCase())
      );
      setListaFiltrada(filteredList);
    }
  };


  return (
    <div>
       <FormGroup>
          <Input
            type="text"
            placeholder="Buscar..."
            value={terminoBusqueda}
            onChange={handleInputChange}
          />
        </FormGroup>
        <ul className="list-unstyled">
          {listaFiltrada && listaFiltrada.map(item => (
            <li key={item.id} className="d-flex justify-content-between align-items-center mb-2">
            
              <FormGroup switch className={style.notalabel}>
            <Input
              type="checkbox"
              checked={item.completed}
              onChange={() => cambiarEstado(item.id)}
            />
            <Label check className={style.notalabel}>
              <span className={item.completed ? style.completed : style.notcompleted}>
                {item.text}
              </span>
            </Label>
          </FormGroup>
          <FormGroup check row className={style.notadelete}>
            <Col sm={{ offset: 2, size: 10 }}>
              <Button color="danger" onClick={() => eliminarNota(item.id)}>
                Eliminar
              </Button>
            </Col>
          </FormGroup>
            </li>
          ))}
        </ul>
    </div>
  );

  
}

export default ListaFiltrada;