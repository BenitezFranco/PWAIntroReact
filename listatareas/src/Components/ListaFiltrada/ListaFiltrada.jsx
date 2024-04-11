import React, { useState } from 'react';

function ListaFiltrada({ nota}) {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [listaFiltrada, setListaFiltrada] = useState([]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setTerminoBusqueda(value);
    if (value === '') {
      setListaFiltrada([]); // Si el término de búsqueda está vacío, limpiar la lista filtrada
    }
  };
  
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const filteredList = filtrarLista(nota, terminoBusqueda);
    setListaFiltrada(filteredList);
  };

  const filtrarLista = (nota, terminoBusqueda) => {
    return nota.filter(item =>
      item.text.toLowerCase().includes(terminoBusqueda.toLowerCase())
    );
  };
  


  return (
    <div>
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Buscar tarea..."
        value={terminoBusqueda}
        onChange={handleInputChange}
      />
      <button type="submit">Buscar</button>
    </form>
    <ul>
      {listaFiltrada.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  </div>

  );
}

export default ListaFiltrada;