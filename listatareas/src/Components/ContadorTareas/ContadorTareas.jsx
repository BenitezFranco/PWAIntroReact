import React from 'react';
import { ListGroup, ListGroupItem, Badge, Progress } from 'reactstrap';

function ContadorTareas({ tareas }) {
  // Calculamos el número total de tareas (que tareas es el arreglo de notas YA SE QUE NO TIENE UN NOMBRE MUUUY DESCRIPTIVO LA VERDAD)
  const totalTareas = tareas ? tareas.length : 0;
  const tareaCompletada = tareas ? tareas.filter(tareas => tareas.completed).length : 0;

  const porcentajeCompletado = (tareaCompletada /tareas.length) * 100;

  // EXEPCION DE RETURN, SOLO PARA UNOS MSJ DE EXEPCION
  const mensaje1 = 'No hay tareas para mostrar. ¡Estás listo para descansar!';
  const mensaje2 = 'Ya has completado todas tus tareas!!'
  const mensaje3 = 'Empieza pronto y terminaras antes'
  

  let mensajeMostrar= '';
  
 if (totalTareas === 0){
  mensajeMostrar = mensaje1
  return  mensajeMostrar;
 }if(totalTareas === tareaCompletada){
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
            {totalTareas}
          </Badge>
           TAREAS COMPLETADAS: {''}
          <Badge pill>
            {tareaCompletada} de {totalTareas}
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

export default ContadorTareas;