import React, { useState } from 'react';

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
    <form onSubmit={manejoEnvio}>
      <input
        type="text"
        placeholder="Que quieres recordar"
        value={nota}
        onChange={manejoCambio}
      />
      <button type="submit">Agregar a la lista</button>
    </form>
  );
}

export default TexNota;