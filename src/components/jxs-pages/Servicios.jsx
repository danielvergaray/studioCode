import { useContext } from "react";
import React from "react";
import AccordionMaker from "../accordion/AccordionMaker";
import InfoContext from "../infoContext/InfoContext";

const Servicios = () => {
  const { infoServiciosAcordionArray, accordionAbierto } = useContext(InfoContext);

  console.log(accordionAbierto);

  const arrayServicio =
    accordionAbierto === "1"
      ? infoServiciosAcordionArray[0].servicios_webdesign_foto
      : accordionAbierto === "2"
      ? infoServiciosAcordionArray[0].servicios_branding_foto
      : infoServiciosAcordionArray[0].servicios_editorial_foto;

  return (
    <section className="home_desktop-servicios">
      <section className="home_desktop-servicios-imagen">
        <img src={arrayServicio} alt="imagen_servicio" />
      </section>
      <AccordionMaker />
    </section>
  );
};

export default Servicios;
