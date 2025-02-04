import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

const CarouselMaker = ({
  infoPortafolioProyectoArray,
  proyectoSeleccionado,
}) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const arrayImagenes =
    infoPortafolioProyectoArray[proyectoSeleccionado].imagenes;

  return (
    <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
      {arrayImagenes.map((imagen) => (
        <Carousel.Item interval={1500}>
          <img src={imagen.imagenes} alt={imagen.titulo} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselMaker;
