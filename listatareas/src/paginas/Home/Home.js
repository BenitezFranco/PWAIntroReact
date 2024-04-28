import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Style from "./Home.module.css";
import Cabecera from "../../Components/Cabecera/Cabecera";

//COMPONENTES
import TextTarea from "../../Components/TextTarea/TextTarea";
import ListaTareas from "../../Components/ListaTareas/ListaTareas";
import ContadorTareas from "../../Components/ContadorTareas/ContadorTareas";
import ListaFiltrada from "../../Components/ListaFiltrada/ListaFiltrada";
import Titulo from "../../Components/Titulo/Titulo";

//Muy buen trabajo.
//Bien detallado el readme, muy completo.
//Intenten agregar prettier o algun identador automatico para estilizar el codigo, los files estan todos con distinta identacion.
//Presten atencion al nombrado de variables plural-singular para mayor entendimiento del codigo.

function Home() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (text) => {
    setTareas([...tareas, { id: Date.now(), text, completed: false }]);
  };

  const cambiarEstado = (id) => {
    setTareas(
      //tareas.map((tarea) --> usar singular dentro del map para no confundir con el arreglo.
      tareas.map((tareas) =>
        tareas.id === id ? { ...tareas, completed: !tareas.completed } : tareas
      )
    );
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tareas) => tareas.id !== id));
  };

  return (
    <div className={Style.Appheader}>
      <Cabecera />
      <Titulo texto=" Lista de Tareas (To-Do List)" />
      <Container>
        <Row className="mb-3">
          <Col>
            <TextTarea agregarTarea={agregarTarea} />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="text-center">
            <ListaFiltrada
              tareas={tareas}
              cambiarEstado={cambiarEstado}
              eliminarTarea={eliminarTarea}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ContadorTareas tareas={tareas} />
            <ListaTareas
              tareas={tareas}
              cambiarEstado={cambiarEstado}
              eliminarTarea={eliminarTarea}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Home;
