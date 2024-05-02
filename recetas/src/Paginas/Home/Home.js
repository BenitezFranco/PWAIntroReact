import React, { useState, useEffect } from "react";
//import { Link } from 'react-router-dom';
import CardReceta from "../../Componentes/CardReceta/CardReceta";
import Header from "../../Componentes/Header/Header";
import Footer from "../../Componentes/Footer/Footer.jsx";
import Carrucel from "../../Componentes/Carrucel/Carrucel.jsx";
import { Carrucel1, Carrucel2 } from "../../Imagenes/ImagenesCarrucel.jsx";
import FiltroRecetas from "../../Componentes/FiltroRecetas/FiltroRecetas.jsx";

const Home = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    const fetchRecetas = async () => {
      try {
        const response = await fetch("../mocks/recetas.json");
        const data = await response.json();
        setRecetas(data.recetas);
      } catch (error) {
        console.error("Error al obtener las recetas:", error);
      }
    };

    fetchRecetas();
  }, []);

  //filtro

  const [filtro, setFiltro] = useState("");

  const handleChange = (event) => {
    setFiltro(event.target.value);
  };

  const recetasFiltradas = recetas.filter((receta) =>
    receta.titulo.toLowerCase().startsWith(filtro.toLowerCase()),
  );

  // Ordenar recetas filtradas alfabéticamente por el título
  recetasFiltradas.sort((a, b) => a.titulo.localeCompare(b.titulo));

  return (
    <div>
      <div>
        <Header />
        <Carrucel imagenes={[Carrucel1, Carrucel2]} />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <h1 class="col-span-full text-center text-7xl">Nuestras Recetas</h1>
        <div className="col-span-1"></div>
        <div class="col-span-1 text-center text-7xl">
          <FiltroRecetas filtro={filtro} onFiltroChange={handleChange} />
        </div>
        <div className="col-span-1"></div>
        {recetasFiltradas.length === 0 ? (
          <p>No hay resultados</p>
        ) : (
          recetasFiltradas.map((receta) => (
            <CardReceta
              key={receta.id}
              id={receta.id}
              imagen={receta.imagen}
              titulo={receta.titulo}
              descripcion={receta.descripcion}
            />
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
