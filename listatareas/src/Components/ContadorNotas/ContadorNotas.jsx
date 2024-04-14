import React from 'react';
import { ListGroup, ListGroupItem, Badge, Progress } from 'reactstrap';

function ContadorNota({ nota }) {
  // Calculamos el número total de nota (que nota es el arreglo de notas YA SE QUE NO TIENE UN NOMBRE MUUUY DESCRIPTIVO LA VERDAD)
  const totalNota = nota ? nota.length : 0;
  const notaCompletada = nota ? nota.filter(nota => nota.completed).length : 0;

  const porcentajeCompletado = (notaCompletada /nota.length) * 100;

  // EXEPCION DE RETURN, SOLO PARA UNOS MSJ DE EXEPCION
  const mensaje1 = 'No hay tareas para mostrar. ¡Estás listo para descansar!';
  const mensaje2 = 'Ya has completado todas tus tareas!!'
  const mensaje3 = 'Empieza pronto y terminaras antes'
  

  let mensajeMostrar= '';
  
 if (totalNota === 0){
  mensajeMostrar = mensaje1
  return  mensajeMostrar;
 }if(totalNota === notaCompletada){
  mensajeMostrar = mensaje2
  return  mensajeMostrar;
 }else{
  mensajeMostrar = mensaje3;
 }
  

  


  return (


    <div>
{mensajeMostrar}
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