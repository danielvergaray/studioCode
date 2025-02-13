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

  const arrayImagenesMobile =
    infoPortafolioProyectoArray[proyectoSeleccionado].imagenesMobile;

  return (
    <>
      <Carousel
        className="carrusel-desktop"
        variant="dark"
        activeIndex={index}
        onSelect={handleSelect}
      >
        {arrayImagenes.map((imagen) => (
          <Carousel.Item interval={2500}>
            <img src={imagen.imagenes} alt={imagen.titulo} />
          </Carousel.Item>
        ))}
      </Carousel>

      {arrayImagenesMobile && (
        <Carousel
          className="carrusel-mobile"
          variant="dark"
          activeIndex={index}
          onSelect={handleSelect}
        >
          {arrayImagenesMobile.map((imagen) => (
            <Carousel.Item interval={2500}>
              <img src={imagen.imagenes} alt={imagen.titulo} />
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default CarouselMaker;
