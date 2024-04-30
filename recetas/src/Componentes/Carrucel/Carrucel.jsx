import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos CSS del carrusel

function Carrucel( { imagenes }) {
  return (
    <div  >
<Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        style={{ height: '10px' }}
      >
      {imagenes.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
    </Carousel>
    </div>
    
  );
}

export default Carrucel;