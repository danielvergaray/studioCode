import { useContext, useState, useEffect } from "react";
import React from "react";
import AccordionMaker from "../accordion/AccordionMaker";
import InfoContext from "../infoContext/InfoContext";
import "animate.css/animate.min.css";

const Servicios = () => {
  const { infoServiciosAcordionArray, accordionAbierto } =
    useContext(InfoContext);

  // Estado para forzar la animación
  const [animationKey, setAnimationKey] = useState(0);

  const arrayServicio =
    accordionAbierto === "1"
      ? infoServiciosAcordionArray[0].servicios_webdesign_foto
      : accordionAbierto === "2"
      ? infoServiciosAcordionArray[0].servicios_branding_foto
      : infoServiciosAcordionArray[0].servicios_editorial_foto;

  // Cada vez que cambia la imagen, reiniciamos la animación
  useEffect(() => {
    setAnimationKey((prev) => prev + 1); //Esto hace que cada que cambie la imagen, se cambie elvalor de prev a un numero mas
  }, [arrayServicio]);

  return (
    <>
      <section className="home_desktop-servicios">
        <section
          key={animationKey} // Festo hace que con cada valor diferente de animationKey se renderice de nuevo
          className="home_desktop-servicios-imagen animate__animated animate__fadeIn animate__slow"
        >
          <img src={arrayServicio} alt="imagen_servicio" />
        </section>
        <AccordionMaker />
      </section>

      <section className="home_mobile-servicios">
        <AccordionMaker />
      </section>
    </>
  );
};

export default Servicios;
