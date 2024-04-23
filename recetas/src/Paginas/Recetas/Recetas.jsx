import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const DetalleReceta = () => {
  // Obteniendo el id de los parámetros de la URL
  const { id } = useParams();

  const [receta, setReceta] = useState(null);

  useEffect(() => {
    const fetchReceta = async () => {
      try {
        // Cargar el archivo JSON correspondiente al ID de la receta
        const response = await fetch(`../mocks/receta-${id}.json`);
        const data = await response.json();
        setReceta(data);
      } catch (error) {
        console.error('Error al obtener la receta:', error);
      }
    };

    fetchReceta();
  }, [id]); // Asegúrate de volver a cargar cuando cambia el ID

  if (!receta) {
    return <div>Cargando...</div>;
  }

  const listaIngredientes = receta.ingredientes.map((ingrediente, index) => (
    <li key={index}>{ingrediente}</li>
  ));

  // Aquí puedes renderizar la información de la receta
  return (
    <div>
      <h2>{receta.titulo}</h2>
      <h3>Ingredientes:</h3>
      <ul>
        {listaIngredientes}
      </ul>
      <h3>Instrucciones:</h3>
      <p>{receta.instrucciones}</p>
    </div>
  );
};

export default DetalleReceta;