import React, { useState } from 'react';
import CuadroDeTexto from '../Components/CuadroDeTexto/CuadroDeTexto';
import Tarea from '../Components/Tarea/Tarea';
import Titulo from '../Components/Titulo/Titulo';

function Home() {

    const [tareas, setTareas] = useState([]);

    const crearTarea = (tareaTexto) => {
        setTareas((prevTareas) => {
            console.log("HOla desde crear Tarea");
            const nuevaTarea = {
                texto: tareaTexto
            };
            return [...prevTareas, nuevaTarea];
        });
    };
    

    return (
        <div className="App">
            <header className="App-header">
                <Titulo />
                <CuadroDeTexto texto="Crear Tarea" nombre="tarea" boton="Guardar" accionBoton={crearTarea}/>
                {tareas.length === 0 ? (
                    <p>No hay tareas por hacer</p>
                ) : (
                    tareas.map((tarea, index) => (
                        <Tarea
                        key={index}
                          texto={tarea.texto}
                        />
                      ))
                )}
            </header>
        </div>
    );
}

export default Home;