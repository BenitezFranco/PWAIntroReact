import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Pdf from '../../Componentes/Pdf/Pdf';
import BotonPdf from '../../Componentes/BotonPdf/BotonPdf';
import Header from '../../Componentes/Header/Header';
import Footer from '../../Componentes/Footer/Footer';
import IterarLista from '../../Componentes/IterarLista/IterarLista';
import Carrucel from '../../Componentes/Carrucel/Carrucel';



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
    <Carrucel imagenes= {receta.imagen}/>
    <div className="container mx-auto px-4 py-8">
    
      <h2 className="uppercase text-3xl text-orange-700 font-sans mb-4">{receta.titulo}</h2>
      <h3 className="text-xl font-sans mb-2">Ingredientes:</h3>
      <IterarLista json={receta} arreglo="ingredientes" tipo="list-disc" />

      <h3 className="text-xl font-sans mb-2">Instrucciones:</h3>
      <IterarLista json={receta} arreglo="instrucciones" tipo="list-decimal" />
     
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
      <PDFDownloadLink document={<Pdf receta={receta} />} fileName={`${receta.titulo}.pdf`}>
        {({ loading }) => (
         <BotonPdf parametro = { loading }/>
        )}
      </PDFDownloadLink>
     
    </div>
     
    </div>
    <Footer/>
  </div>
    
  );
};

export default DetalleReceta;
