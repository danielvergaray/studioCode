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
          icono_flecha: iconoFlecha,
          icono_estrella: iconoEstrella,
          descripcion_servicios : [
            {
              titulo: "web page",
              descripcion: "Creamos sitios web funcionales, atractivos y adaptados a las necesidades de tu proyecto, para fortalecer la presencia digital de tu marca",
            },
            {
              titulo: "Landingpage",
              descripcion: "Desarrollamos sitios web simples y temporales, diseñados específicamente para un objetivo concreto, y los optimizamos para asegurar que logres lo que necesitas. Son ideales para campañas, informes y más",
            },
            {
              titulo: "INVITACIÓN DIGITAL",
              descripcion: "Diseñamos invitaciones interactivas con enlaces, imágenes y elementos visuales para contar la historia de nuestros clientes. Son la opción ideal para eventos como bodas, fiestas, conferencias y otras celebraciones",
            },
          ]
        },
        {
          item: "2",
          pretitulo: "lo que hacemos",
          titulo: "branding",
          icono_flecha: iconoFlecha,
          icono_estrella: iconoEstrella,
          descripcion_servicios : [
            {
              titulo: "Logotipo",
              descripcion: "Te ayudaremos a crear una representación visual única para tu marca utilizando texto, símbolos o imágenes. Diseñaremos una identidad fácilmente reconocible que refleje los valores y la personalidad de tu marca",
            },
            {
              titulo: "Identidad corporativa",
              descripcion: "Dale a tu marca un estilo único y coherente, a través de elementos visuales que la representen. Juntos, descubriremos los colores, tipografías, estilos gráficos y piezas personalizadas que mejor se adapten a tus necesidades",
            },
            {
              titulo: "Packaging",
              descripcion: "Diseñaremos el empaque de tu producto no solo con un enfoque funcional, sino también para atraer a los consumidores, reflejando la identidad y los valores de tu marca",
            },
          ]
        },
        {
          item: "3",
          pretitulo: "lo que hacemos",
          titulo: "editorial",
          icono_flecha: iconoFlecha,
          icono_estrella: iconoEstrella,
          descripcion_servicios : [
            {
              titulo: "Brochures",
              descripcion: "Creamos piezas gráficas, tanto impresas como digitales, como folletos, trípticos y brochures, para transmitir la información que necesitas de forma visualmente impactante y efectiva",
            },
            {
              titulo: "Publicaciones",
              descripcion: "Nos enfocamos en el diseño y maquetación de publicaciones impresas y digitales, como revistas, guías y libros, asegurando una presentación visual atractiva, profesional y coherente con la identidad de tu contenido",
            },
            {
              titulo: "Informes",
              descripcion: "Comunica las cifras y avances de tu empresa de forma clara, mediante infografías, reportes visuales y presentaciones de datos, transformando los resultados y logros en elementos gráficos fácilmente comprensibles y atractivos",
            },
          ]
        },
      ],

      /* descripcion_servicios : [
        {
          titulo: "webpage",
          descripcion: "Creamos sitios web funcionales, atractivos y adaptados a las necesidades de tu proyecto, para fortalecer la presencia digital de tu marca.",
        },
        {
          titulo: "titulo2",
          descripcion: "descripcion 2",
        },
        {
          titulo: "titulo3",
          descripcion: "descripcion 3",
        },
      ] */

    },
  ];

  const values = {
    infoHomeArray: Object.values(informacion[0].home),
    infoServiciosArray: Object.values(informacion[0].servicios),
   
  };

  return <InfoContext.Provider value={values}>{children}</InfoContext.Provider>;
};

export default InfoContextProvider;
