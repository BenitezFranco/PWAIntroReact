import React, { useState } from "react";
import Style from "./TextTareas.module.css";

function TextTarea({ agregarTarea }) {
  //Aca tengo entendido que van cargando de una tarea, asi que el nombre del estado deberia estar en singular.
  const [tareas, setTareas] = useState("");

  const manejoCambio = (event) => {
    setTareas(event.target.value);
  };

  const manejoEnvio = (event) => {
    event.preventDefault();
    if (!tareas.trim()) return;
    agregarTarea(tareas);
    setTareas("");
  };

  return (
    <form onSubmit={manejoEnvio} className={Style.formulario}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="¿Qué quieres recordar?"
          value={tareas}
          onChange={manejoCambio}
        />
        <div className="input-group-append">
          {/* En el resto de la app usan Button de reactstrap, aca tambien deberian */}
          <button className="btn btn-primary" type="submit">
            Agregar a la lista
          </button>
        </div>
      </div>
    </form>
  );
}

export default TextTarea;
