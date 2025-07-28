import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>TurnosApp</h1>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Profesionales</a></li>
        <li><a href="#">Reservar</a></li>
        <li><a href="#">Ingresar</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;




