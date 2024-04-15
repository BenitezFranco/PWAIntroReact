import React, { useState } from 'react';
import { FormGroup, Input, Button, Label, Col } from 'reactstrap';
import Nota from '../Nota/Nota';
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
             <Nota
             key={item.id}
             nota={item}
             cambiarEstado={cambiarEstado}
             eliminarNota={eliminarNota}
           />
          ))}
        </ul>
    </div>
  );

  
}

export default ListaFiltrada;