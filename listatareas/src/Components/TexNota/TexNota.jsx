import React, { useState } from 'react';
import Style from './TexNota.module.css';

function TexNota({ agregarNota}) {
  const [nota, setNota] = useState('');

  const manejoCambio = (event) => {
    setNota(event.target.value);
  };

  const manejoEnvio = (event) => {
    event.preventDefault();
    if (!nota.trim()) return;
    agregarNota(nota);
    setNota('');
  };

  return (
    <form onSubmit={manejoEnvio} className={Style.formulario}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="¿Qué quieres recordar?"
          value={nota}
          onChange={manejoCambio}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">
            Agregar a la lista
          </button>
        </div>
      </div>
    </form>
  );
}

export default TexNota;