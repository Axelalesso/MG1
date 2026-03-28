import React from 'react';
import './navbar.css';
import { FaInstagram} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className="navbar">
      
      <div className="nav-logo">
        <a href="#inicio">
          <img src="/img/mg1-logo.jpg" alt="Constructora MG" className="logo-img" />
        </a>
      </div>

      <div className="nav-items">
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#trabajos">Trabajos</a>
        <a href="#nosotros">Nosotros</a>
      </div>

      <div className="nav-social">
        <a href="https://www.instagram.com/constructora_mg1" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="href=mailto:mauroagonzalez.mag@gmail.com?subject=Consulta%20web&body=Hola,%20quiero%20consultar..." target="_blank" rel="noopener noreferrer">
          <IoIosMail className="social-icon" />
        </a>
      </div>

    </nav>
  );
}