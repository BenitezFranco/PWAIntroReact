import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const fetchElements = async () => {
      try {
        const response = await fetch('../../mocks/recetas.json');
        const data = await response.json();
        setElements(data.elements);
      } catch (error) {
        console.error('Error al obtener los elementos:', error);
      }
    };

    fetchElements();
  }, []);

  return (
    <div>
      <h1>Lista de Elementos</h1>
      <div className="card-container">
        {elements.map(element => (
          <Link key={element.id} to={`/details/${element.id}`}>
            <div className="card">
              <img src={element.image} alt={element.title} />
              <h2>{element.title}</h2>
              <p>{element.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
