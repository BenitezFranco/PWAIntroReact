import React, { useState } from 'react';
import Button from "../Button/Button";
const CuadroDeTexto= ({texto, nombre, boton, accionBoton})=> {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (event) => {
    setInputText(event.target.value);
    };

  const handleBotonClick = () => {
    accionBoton(inputText);
    setInputText('');
  };
    return(<form>
    <label>
    {texto}:
    <input type="text" name={nombre} value={inputText} onChange={handleInputChange}/>
    </label>
    <Button text={boton} onClick={handleBotonClick}/>
    </form>
    );
};
export default CuadroDeTexto;