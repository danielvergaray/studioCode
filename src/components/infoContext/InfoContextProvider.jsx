import React from "react";
import InfoContext from "./InfoContext";
import home_fondo from "../../assets/imagenes/home/home_fondo.jpg";
import navBar_nombreEmpresa from "../../assets/imagenes/navbar/nombreEmpresa.png";
import iconoEstrella from "../../assets/imagenes/home/iconoEstrella.png";
import iconoFlecha from "../../assets/imagenes/servicios/flecha.png";

const InfoContextProvider = ({ children }) => {
  const informacion = [
    {
      home: [
        {
          home_fondo,
          titulo: "hola, somos",
          nombreEmpresa: "studioCode",
          subtitulo: "web & design",
          iconoEstrella,
          navBar_nombreEmpresa,
        },
      ],

      servicios: [
        {
          item: "1",
          pretitulo: "lo que hacemos",
          titulo: "web design",
          subtitulo1: "webpage",
          subtitulo2: "landingpage",
          subtitulo3: "invitación digital",
          descripcion_subtitulo1:
            "Creamos sitios web funcionales, atractivos y adaptados a las necesidades de tu proyecto, para fortalecer la presencia digital de tu marca.",
          descripcion_subtitulo2: "por definir",
          descripcion_subtitulo3: "por definir",
          icono_flecha: iconoFlecha,
        },
        {
          item: "2",
          pretitulo: "lo que hacemos",
          titulo: "branding",
          subtitulo1: "webpage",
          subtitulo2: "landingpage",
          subtitulo3: "invitación digital",
          descripcion_subtitulo1:
            "Creamos sitios web funcionales, atractivos y adaptados a las necesidades de tu proyecto, para fortalecer la presencia digital de tu marca.",
          descripcion_subtitulo2: "por definir",
          descripcion_subtitulo3: "por definir",
          icono_flecha: iconoFlecha,
        },
        {
          item: "3",
          pretitulo: "lo que hacemos",
          titulo: "editorial",
          subtitulo1: "webpage",
          subtitulo2: "landingpage",
          subtitulo3: "invitación digital",
          descripcion_subtitulo1:
            "Creamos sitios web funcionales, atractivos y adaptados a las necesidades de tu proyecto, para fortalecer la presencia digital de tu marca.",
          descripcion_subtitulo2: "por definir",
          descripcion_subtitulo3: "por definir",
          icono_flecha: iconoFlecha,
        },
      ],

    },
  ];

  const values = {
    infoHomeArray: Object.values(informacion[0].home),
    infoServiciosArray: Object.values(informacion[0].servicios),
  };

  return <InfoContext.Provider value={values}>{children}</InfoContext.Provider>;
};

export default InfoContextProvider;
