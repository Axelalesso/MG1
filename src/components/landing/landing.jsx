import React from "react";
import Carousel from "../Carousel/Carousel";
import ServicesAccordion from "../Accordion/Accordion";
import Footer from "../footer/footer"

import { FaWhatsapp } from "react-icons/fa";
import "./landing.css"

export default function Landing() {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <section id="inicio" className="hero">
        <div>
          <h1>Construimos tus proyectos</h1>
          <p className="parrafo">+20 años de experiencia en obras civiles y arquitectura</p>
            <img className="logo"  src="/img/mg1-logo.jpg" alt="MG1 Construcciones Logo" />
        </div>
      </section>
        
      <div className="divider"></div>

      <Carousel />

      <section className="servicios">
        <div className="caja-servicios">
          <h2 id="servicios" >Servicios</h2>
        </div>
        <h3 className="subtitulo-servicios">Descubrí cuáles de nuestros servicios se adaptan a las necesidades de tu proyecto.</h3>
        <ServicesAccordion />
      </section>
      
      <section className="proyectos">
  <div className="caja-titulo-trabajos">
    <h2 id="trabajos" className="titulo-proyectos">
      Trabajos realizados
    </h2>
  </div>

  <div className="caja-trabajos">
    {[
      "/img/mg1-proyectos1.jpeg",
      "/img/mg1-proyectos6.jpeg",
      "/img/mg1-proyectos3.jpeg",
      "/img/mg1-proyectos4.jpeg",
      "/img/mg1-proyectos5.jpeg",
    ].map((img, i) => (
      <div key={i} className="trabajo-item">
        <img src={img} alt="proyecto" />
        <div className="overlay">Obra Terminada</div>
      </div>
    ))}
  </div>
</section>

    <section className="sobre-nosotros" id="nosotros">
  <div className="contenedor-nosotros">

    <div className="texto-nosotros">
      <div>
        <h2 className="caja-nosotros">Nosotros</h2>
      </div>
      <img className="logo-nosotros" src="/img/mg1-logo.jpg" alt="MG1 Construcciones Logo"/>
      <p className="nosotros-text" >
        Somos una empresa dedicada a la construcción, refacciones y mantenimiento, 
        con amplia experiencia en obras tanto para particulares como para consorcios.
      </p>

      <p className="nosotros-text" >
        Trabajamos en CABA, Zona Sur y toda la provincia, brindando soluciones 
        integrales que van desde el inicio de obra hasta los detalles finales.
      </p>

      <p className="nosotros-text" >
        Nos destacamos por la responsabilidad, la calidad en cada trabajo y el 
        compromiso con cada cliente.
      </p>
    </div>

    <div className="imagen-nosotros">
      <img src="/img/mg1-nosotros.jpeg" alt=" mg1 empresa constructora" />
    </div>

  </div>
</section>
    <section className="cta-final">
  <h2>¿Listo para empezar tu obra?</h2>

  <p>
    Contactanos por WhatsApp y te asesoramos sin compromiso.  
    Trabajamos con particulares y consorcios en CABA y todo PBA.
  </p>

  <a href="https://wa.me/5491150947040" target="_blank">
    <button>Solicitar presupuesto</button>
  </a>
  <p className="copyright">
    © {new Date().getFullYear()} Todos los derechos reservados.
  </p>
</section>
    <a
  href="https://wa.me/5491150947040"
  className="whatsapp-float"
  target="_blank"
>
  <FaWhatsapp />
</a>
 <Footer />

    
    </div>
    
  );
}