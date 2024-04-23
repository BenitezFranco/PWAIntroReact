import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    const fetchRecetas = async () => {
      try {
        const response = await fetch('../mocks/recetas.json');
        const data = await response.json();
        setRecetas(data.recetas);
      } catch (error) {
        console.error('Error al obtener las recetas:', error);
      }
    };

    fetchRecetas();
  }, []);

  return (
    <div>
      <h1>Lista de Recetas</h1>
      <div className="card-container">
        {recetas.map(receta => (
          <Link key={receta.id} to={`/receta/${receta.id}`}>
            <div className="card">
              <img src={receta.imagen} alt={receta.titulo} />
              <h2>{receta.titulo}</h2>
              <p>{receta.descripcion}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

