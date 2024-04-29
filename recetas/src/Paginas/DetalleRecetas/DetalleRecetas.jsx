import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {PDFDownloadLink} from "@react-pdf/renderer";
import PDF from "../../Componentes/PDF/PDF";

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
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">{receta.titulo}</h2>
      <h3 className='text-xl font-bold mb-2'>Ingredientes:</h3>
      <ul className='list-disc list-inside'>
        {listaIngredientes}
      </ul>
      <h3 className='text-xl font-bold mb-2'>Instrucciones:</h3>
      <p>{receta.instrucciones}</p>
      <PDFDownloadLink document={<PDF/>} fileName={receta.titulo}>
            <button>Descargar en PDF</button>
      </PDFDownloadLink>
    </div>
  );
};

export default DetalleReceta;