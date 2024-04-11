import React, { useState } from "react";

import style from "./Home.module.css";

import TexNota from "../../Components/TexNota/TexNota";
import ListaNota from "../../Components/ListaNota/ListaNota";
import ContadorTareas from "../../Components/ContadorNotas/ContadorNotas";
import ListaFiltrada from "../../Components/ListaFiltrada/ListaFiltrada";

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
      <div className={style.header}>
        <div className={style.container}>
        <h1>Notas</h1>
        <TexNota agregarNota={agregarNota} />
        <ListaNota nota={nota} cambiarEstado={cambiarEstado} eliminarNota={eliminarNota} />
        <ContadorTareas nota={nota} />
        <ListaFiltrada nota={nota} />
        </div>
        
      </div>
    );
  };
export default Home;
