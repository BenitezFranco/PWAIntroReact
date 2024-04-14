import React from 'react';
import { ListGroup, ListGroupItem, Badge, Progress } from 'reactstrap';

function ContadorNota({ nota }) {
  // Calculamos el número total de nota (que nota es el arreglo de notas YA SE QUE NO TIENE UN NOMBRE MUUUY DESCRIPTIVO LA VERDAD)
  const totalNota = nota ? nota.length : 0;
  const notaCompletada = nota ? nota.filter(nota => nota.completed).length : 0;

  const porcentajeCompletado = (notaCompletada /nota.length) * 100;

  // Verificamos si no hay tareas para mostrar
  if (totalNota === 0) {
    return <p>No hay tareas para mostrar. ¡Estás listo para descansar!</p>;
  }

  if (totalNota === notaCompletada) {
    return <p>Ya has completado todas tus tareas!!</p>;
  }

  return (
    <div>

      <ListGroup>
        <ListGroupItem className="justify-content-between">
          TOTAL DE TAREAS {' '}
          <Badge pill>
            {totalNota}
          </Badge>
           TAREAS COMPLETADAS: {''}
          <Badge pill>
            {notaCompletada} de {totalNota}
          </Badge>
        </ListGroupItem>
        
      </ListGroup>

      <Progress multi>
      <Progress  animated bar
       color="success" value={porcentajeCompletado}>
        Tareas completadas 
      </Progress>
      <Progress bar color="danger" value={100 - porcentajeCompletado}>
        Tareas restantes 
      </Progress>
    </Progress>


    </div>

  );
}

export default ContadorNota;