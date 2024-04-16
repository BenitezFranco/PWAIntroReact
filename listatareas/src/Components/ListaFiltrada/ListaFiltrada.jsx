import React, { useState } from 'react';
import { FormGroup, Input } from 'reactstrap';
import Tarea from '../Tarea/Tarea';


function ListaFiltrada({tareas,cambiarEstado, eliminarTarea}) {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [listaFiltrada, setListaFiltrada] = useState([]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setTerminoBusqueda(value);
    if (value === '') {
      setListaFiltrada([]); // Limpiar las notas filtradas si el término de búsqueda está vacío
    } else {
      // Filtrar las notas según el término de búsqueda
      const filteredList = tareas.filter(item =>
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
             <Tarea
             key={item.id}
             tareas={item}
             cambiarEstado={cambiarEstado}
             eliminarTarea={eliminarTarea}
           />
          ))}
        </ul>
    </div>
  );

  
}

export default ListaFiltrada;