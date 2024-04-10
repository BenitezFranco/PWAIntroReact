import Button from "../Button/Button";
import React, { useState, useEffect } from 'react';
import '../../App.css';
function Tarea({texto}) {
    const [visible, setVisible] = useState(true);
    const [incompleta, setIncompleta]= useState(true);

  const borrar = () => {
    setVisible(false);
  }

  const completar= ()=>{
    setIncompleta(false);
  }

  useEffect(() => {
    // Esta función se ejecuta cuando el componente se monta
    // Establece visible en true cuando la tarea se crea inicialmente
    setVisible(true);
    setIncompleta(true);
  }, []);

  return (
    <div>
    { visible && (
        incompleta ? (
            <div>
              <p>{texto.toString()}</p>
              <Button onClick={completar} text="Incompleta" />
              <Button onClick={borrar} text="Borrar" />
            </div>
          ) : (
            <div>
              <p>{texto.toString()}</p>
              <Button text="Completada" />
              <Button onClick={borrar} text="Borrar" />
            </div>
          )
    )
}
    </div>
  );
}

export default Tarea;