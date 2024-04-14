import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import style from './Cabecera.module.css'; // Importar el archivo CSS de estilos

function Cabecera (){
  return (
    <div className={style.header}>
    <Navbar className={style.navbar} color="light" light expand="md">
         <NavbarBrand className={style.navbarbrand} href="/">ANOTADOR DE TAREAS</NavbarBrand>
         <Nav className="mr-auto" navbar>
           <NavItem>
             <NavLink className={style.navlink}href="https://github.com/BenitezFranco/PWAIntroReact">GitHub</NavLink>
           </NavItem>
         </Nav>
       </Navbar>
    </div>
  )
}


export default Cabecera;