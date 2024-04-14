import React, { useState } from "react";

import { Container, Row, Col } from 'react-bootstrap';
import TexNota from "../../Components/TexNota/TexNota";
import ListaNota from "../../Components/ListaNota/ListaNota";
import ContadorTareas from "../../Components/ContadorNotas/ContadorNotas";
import ListaFiltrada from "../../Components/ListaFiltrada/ListaFiltrada";
import Cabecera from "../../Components/Cabecera/Cabecera";



function Home() {
  const [nota, setNota] = useState([]);

  const agregarNota = (text) => {
    setNota([...nota, { id: Date.now(), text, completed: false }]);
  };

  const cambiarEstado = (id) => {
    setNota(
      nota.map((nota) =>
        nota.id === id ? { ...nota, completed: !nota.completed } : nota
      )
    );
  };

  const eliminarNota = (id) => {
    setNota(nota.filter((nota) => nota.id !== id));
  };

  return (
      <div className="header bg-light py-4">
       
        <Cabecera/> 
      <Container>
        <Row className="mb-3">
          <Col>
            <TexNota agregarNota={agregarNota} />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="text-center">
          <ListaFiltrada nota={nota} cambiarEstado={cambiarEstado} eliminarNota={eliminarNota} />
          </Col>
        </Row>
        <Row>
          <Col>
          <ContadorTareas nota={nota} />
          <ListaNota
            nota={nota}
            cambiarEstado={cambiarEstado}
            eliminarNota={eliminarNota}
          />
          </Col>
        </Row>
      </Container>
    </div>
  );
    
}
export default Home;
