import { useState } from "react";
import './Accordion.css';


const services = [
  {
    title: "🏗️ Construcción",
    content: "Obras llave en mano, steel framing, tinglados."
  },
  {
    title: "🧱 Estructuras",
    content: "Hormigón armado, pisos llaneados, revestimientos."
  },
  {
    title: "⚡ Instalaciones",
    content: "Electricidad, plomería, gas y aire acondicionado."
  },
  {
    title: "🌐 Infraestructura",
    content: "Redes cloacales y agua para barrios (PEAD)."
  },
  {
    title: "🛠️ Terminaciones",
    content: "Pintura, herrería y aberturas de aluminio."
  }
];

export default function ServicesAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="section-accordion">
      <div className="caja-accordion">
        {services.map((item, index) => (
          <div className="caja-2-accordion" key={index}>
            
            
            <div
              className="caja-header-accordion"
              onClick={() => toggle(index)}
            >
              <span>{item.title}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>

            
            {activeIndex === index && (
              <div className="caja-accordion-content">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}