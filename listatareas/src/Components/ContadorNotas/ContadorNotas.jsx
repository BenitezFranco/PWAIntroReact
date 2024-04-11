import React from 'react';

function ContadorNota({ nota }) {
  // Calculamos el número total de nota (que nota es el arreglo de notas YA SE QUE NO TIENE UN NOMBRE MUUUY DESCRIPTIVO LA VERDAD)
  const totalNota = nota ? nota.length : 0;
  const notaCompletada = nota ? nota.filter(nota => nota.completed).length : 0;

    // Verificamos si no hay tareas para mostrar
    if (totalNota === 0) {
      return <p>No hay tareas para mostrar. ¡Estás listo para descansar!</p>;
    }

    if (totalNota === notaCompletada){
      return <p>Ya has completado todas tus tareas!!</p>;
    }

  return (
    <div>
      <p>Total de nota: {totalNota}</p>
      <p>Tareas completadas: {notaCompletada} de {totalNota}</p>
    </div>
  );
}

export default ContadorNota;