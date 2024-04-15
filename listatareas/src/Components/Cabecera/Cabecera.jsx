import React from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import style from './Cabecera.module.css'; // Importar el archivo CSS de estilos
import Imagen from './titulo.png'; //
import logo from './logoGit.png'; //
function Cabecera() { 


return (
    
<div>

    <Navbar style={{
        backgroundImage: `url(${Imagen})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '300px', // Ajusta la altura según sea necesario
    }} className={style.navbar} color="light" light expand="md">

        <div className={style.container}>
            <a target='blank' href="https://github.com/BenitezFranco/PWAIntroReact/tree/master"><img src={logo} alt="Logo" className={style.logo}  />
   </a>
    
  </div>
    </Navbar>
</div>
)


}






export default Cabecera;