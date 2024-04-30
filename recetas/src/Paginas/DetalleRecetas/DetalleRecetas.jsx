import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Pdf from '../../Componentes/PDF/PDF';
import Header from '../../Componentes/Header/Header';
import Footer from '../../Componentes/Footer/Footer';

const DetalleReceta = () => {
  const { id } = useParams();
  const [receta, setReceta] = useState(null);

  useEffect(() => {
    const fetchReceta = async () => {
      try {
        const response = await fetch(`../mocks/receta-${id}.json`);
        const data = await response.json();
        setReceta(data);
      } catch (error) {
        console.error('Error al obtener la receta:', error);
      }
    };

    fetchReceta();
  }, [id]);

  if (!receta) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
    <Header />
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">{receta.titulo}</h2>
      <h3 className="text-xl font-bold mb-2">Ingredientes:</h3>
      <ul className="list-disc list-inside">
        {receta.ingredientes.map((ingrediente, index) => (
          <li key={index}>{ingrediente}</li>
        ))}
      </ul>
      <h3 className="text-xl font-bold mb-2">Instrucciones:</h3>
      <p>{receta.instrucciones}</p>
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
      <PDFDownloadLink document={<Pdf receta={receta} />} fileName={`${receta.titulo}.pdf`}>
        {({ loading }) => (
          <button
            style={{
              backgroundColor: '#4CAF50',
              border: 'none',
              color: 'white',
              padding: '10px 20px',
              textAlign: 'center',
              textDecoration: 'none',
              display: 'inline-block',
              fontSize: '16px',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
          >
            {loading ? 'Generando PDF...' : 'Descargar en PDF'}
          </button>
        )}
      </PDFDownloadLink>
    </div>
     
    </div>
    <Footer/>
  </div>
    
  );
};

export default DetalleReceta;
