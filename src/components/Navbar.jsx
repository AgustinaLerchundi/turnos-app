import React from "react";
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContent}>
                <h1 className={styles.logo}>Gestor turnos</h1>
                <ul className={styles.navLinks}>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
</nav>
      
    )
};



export default Navbar;
