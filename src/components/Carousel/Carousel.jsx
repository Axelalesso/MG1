import { useEffect, useState } from "react";
import "./Carousel.css"

const images = [
  "/img/mg1-foto1.jpeg",
  "/img/mg1-foto2.jpeg",
  "/img/mg1-foto3.jpeg",
  "/img/mg1-foto4.jpeg",
  "/img/mg1-foto5.jpeg"
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <img
        src={images[current]}
        alt="obra"
        
      />
    </section>
  );
}