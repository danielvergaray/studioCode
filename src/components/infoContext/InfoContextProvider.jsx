import React, {useState} from "react";
import InfoContext from "./InfoContext";
import home_fondo from "../../assets/imagenes/home/home_fondo.jpg";
import navBar_nombreEmpresa from "../../assets/imagenes/navbar/nombreEmpresa.png";
import iconoEstrella from "../../assets/imagenes/home/iconoEstrella.png";
import iconoFlecha from "../../assets/imagenes/servicios/flecha.png";
import bodaDaniPao1 from "../../assets/imagenes/proyectos/boda_dani-pao/BODA-DANI-Y-PAO_01.jpg";
import bodaDaniPao2 from "../../assets/imagenes/proyectos/boda_dani-pao/BODA-DANI-Y-PAO_02.jpg";
import bodaDaniPao3 from "../../assets/imagenes/proyectos/boda_dani-pao/BODA-DANI-Y-PAO_03.jpg";
import cumpleañosSebas1 from "../../assets/imagenes/proyectos/cumpleañosSebas/SEBAS_01.jpg";
import cumpleañosSebas2 from "../../assets/imagenes/proyectos/cumpleañosSebas/SEBAS_02.jpg";
import cumpleañosSebas3 from "../../assets/imagenes/proyectos/cumpleañosSebas/SEBAS_03.png";
import CYN1 from "../../assets/imagenes/proyectos/CYN/BRANDING-CYN_01.jpg";
import CYN2 from "../../assets/imagenes/proyectos/CYN/BRANDING-CYN_02.png";
import CYN3 from "../../assets/imagenes/proyectos/CYN/BRANDING-CYN_03.png";
import CYN4 from "../../assets/imagenes/proyectos/CYN/BRANDING-CYN_04.png";
import CYN5 from "../../assets/imagenes/proyectos/CYN/BRANDING-CYN_05.png";
import mondi1 from "../../assets/imagenes/proyectos/mondi/MONDI-PROJECT_01.jpg";
import mondi2 from "../../assets/imagenes/proyectos/mondi/MONDI-PROJECT_02.jpg";
import mondi3 from "../../assets/imagenes/proyectos/mondi/MONDI-PROJECT_03.jpg";
import mondi4 from "../../assets/imagenes/proyectos/mondi/MONDI-PROJECT_04.jpg";
import mondi5 from "../../assets/imagenes/proyectos/mondi/MONDI-PROJECT_05.jpg";
import guiaEntel1 from "../../assets/imagenes/proyectos/guia-docente/GUIA-ENTEL_01.png";
import guiaEntel2 from "../../assets/imagenes/proyectos/guia-docente/GUIA-ENTEL_02.jpg";
import guiaEntel3 from "../../assets/imagenes/proyectos/guia-docente/GUIA-ENTEL_03.png";
import guiaEntel4 from "../../assets/imagenes/proyectos/guia-docente/GUIA-ENTEL_04.png";
import nuna1 from "../../assets/imagenes/proyectos/nuna/NUNA-PROJECT_01.jpg";
import nuna2 from "../../assets/imagenes/proyectos/nuna/NUNA-PROJECT_02.jpg";
import nuna3 from "../../assets/imagenes/proyectos/nuna/NUNA-PROJECT_03.jpg";
import nuna4 from "../../assets/imagenes/proyectos/nuna/NUNA-PROJECT_04.jpg";
import nuna5 from "../../assets/imagenes/proyectos/nuna/NUNA-PROJECT_05.jpg";
import servicios_branding_foto from "../../assets/imagenes/servicios/servicios_branding.jpeg"

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
          servicios_branding_foto,
          descripcion_servicios: [
            {
              titulo: "web page",
              descripcion:
                "Creamos sitios web funcionales, atractivos y adaptados a las necesidades de tu proyecto, para fortalecer la presencia digital de tu marca",
            },
            {
              titulo: "Landingpage",
              descripcion:
                "Desarrollamos sitios web simples y temporales, diseñados específicamente para un objetivo concreto, y los optimizamos para asegurar que logres lo que necesitas. Son ideales para campañas, informes y más",
            },
            {
              titulo: "INVITACIÓN DIGITAL",
              descripcion:
                "Diseñamos invitaciones interactivas con enlaces, imágenes y elementos visuales para contar la historia de nuestros clientes. Son la opción ideal para eventos como bodas, fiestas, conferencias y otras celebraciones",
            },
          ],
        },
        {
          item: "2",
          pretitulo: "lo que hacemos",
          titulo: "branding",
          icono_flecha: iconoFlecha,
          icono_estrella: iconoEstrella,
          descripcion_servicios: [
            {
              titulo: "Logotipo",
              descripcion:
                "Te ayudaremos a crear una representación visual única para tu marca utilizando texto, símbolos o imágenes. Diseñaremos una identidad fácilmente reconocible que refleje los valores y la personalidad de tu marca",
            },
            {
              titulo: "Identidad corporativa",
              descripcion:
                "Dale a tu marca un estilo único y coherente, a través de elementos visuales que la representen. Juntos, descubriremos los colores, tipografías, estilos gráficos y piezas personalizadas que mejor se adapten a tus necesidades",
            },
            {
              titulo: "Packaging",
              descripcion:
                "Diseñaremos el empaque de tu producto no solo con un enfoque funcional, sino también para atraer a los consumidores, reflejando la identidad y los valores de tu marca",
            },
          ],
        },
        {
          item: "3",
          pretitulo: "lo que hacemos",
          titulo: "editorial",
          icono_flecha: iconoFlecha,
          icono_estrella: iconoEstrella,
          descripcion_servicios: [
            {
              titulo: "Brochures",
              descripcion:
                "Creamos piezas gráficas, tanto impresas como digitales, como folletos, trípticos y brochures, para transmitir la información que necesitas de forma visualmente impactante y efectiva",
            },
            {
              titulo: "Publicaciones",
              descripcion:
                "Nos enfocamos en el diseño y maquetación de publicaciones impresas y digitales, como revistas, guías y libros, asegurando una presentación visual atractiva, profesional y coherente con la identidad de tu contenido",
            },
            {
              titulo: "Informes",
              descripcion:
                "Comunica las cifras y avances de tu empresa de forma clara, mediante infografías, reportes visuales y presentaciones de datos, transformando los resultados y logros en elementos gráficos fácilmente comprensibles y atractivos",
            },
          ],
        },
      ],

      portafolio: [
        {
          pretitulo: "nuestro trabajo",
          titulo: "echa un vistazo a lo que hemos estado creando",
          menu: [
            {
              opcion: "todos",
            },
            {
              opcion: "webdesign",
            },
            {
              opcion: "branding",
            },
            {
              opcion: "editorial",
            },
          ],
        },
      ],
      proyectos_portafolio: [
        {
          id: 1,
          categoria: "webdesign",
          titulo: "invitación digital para boda",
          cliente: "dani & pao",
          descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, quas. Cupiditate distinctio nisi eius. Corporis excepturi maiores repudiandae hic minima.",
          imagenRecuadro: bodaDaniPao1,
          imagenes: [
            {
              imagenes: bodaDaniPao1,
            },
            {
              imagenes: bodaDaniPao2,
            },
            {
              imagenes: bodaDaniPao3,
            },
          ],
        },
        {
          id: 2,
          categoria: "webdesign",
          titulo: "invitación digital sebas",
          cliente: "Cliente por definir",
          descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, quas. Cupiditate distinctio nisi eius. Corporis excepturi maiores repudiandae hic minima.",
          imagenRecuadro: cumpleañosSebas1,
          imagenes: [
            {
              imagenes: cumpleañosSebas1,
            },
            {
              imagenes: cumpleañosSebas2,
            },
            {
              imagenes: cumpleañosSebas3,
            },
          
          ],
        },
        {
          id: 3,
          categoria: "webdesign",
          titulo: "cumpleaños sebas",
          cliente: "Cliente por definir",
          descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, quas. Cupiditate distinctio nisi eius. Corporis excepturi maiores repudiandae hic minima.",
          imagenRecuadro: cumpleañosSebas1,
          imagenes: [
            {
              imagenes: cumpleañosSebas1,
            },
            {
              imagenes: cumpleañosSebas2,
            },
            {
              imagenes: cumpleañosSebas3,
            },
         
          ],
        },
        {
          id: 4,
          categoria: "branding",
          titulo: "CYN",
          cliente: "Cliente por definir",
          descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, quas. Cupiditate distinctio nisi eius. Corporis excepturi maiores repudiandae hic minima.",
          imagenRecuadro: CYN1,
          imagenes: [
            {
              imagenes: CYN1,
            },
            {
              imagenes: CYN2,
            },
            
            {
              imagenes: CYN3,
            },
            
            {
              imagenes: CYN4,
            },
            
            {
              imagenes: CYN5,
            },
            
            
          ],
        },
        {
          id: 5,
          categoria: "branding",
          titulo: "mondi",
          cliente: "Cliente por definir",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusamus iure tempore dolorem voluptate, maiores ullam asperiores facere quis harum expedita voluptatem ad vero in a? Laboriosam nostrum qui perferendis facere id, ex eveniet illo deleniti, officia natus ducimus reiciendis.",
          imagenRecuadro: mondi1,
          imagenes: [
            {
              imagenes: mondi1,
            },
            {
              imagenes: mondi2,
            },
            {
              imagenes: mondi3,
            },
            {
              imagenes: mondi4,
            },
            {
              imagenes: mondi5,
            },
          ],
        },
        {
          id: 6,
          categoria: "editorial",
          titulo: "guia entel",
          cliente: "Cliente por definir",
          descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, quas. Cupiditate distinctio nisi eius. Corporis excepturi maiores repudiandae hic minima.",
          imagenRecuadro: guiaEntel1,
          imagenes: [
            {
              imagenes: guiaEntel1,
            },
            {
              imagenes: guiaEntel2,
            },
            {
              imagenes: guiaEntel3,
            },
            {
              imagenes: guiaEntel4,
            },
             
          ],
        },
        {
          id: 7,
          categoria: "branding",
          titulo: "nuna",
          cliente: "Cliente por definir",
          descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, quas. Cupiditate distinctio nisi eius. Corporis excepturi maiores repudiandae hic minima.",
          imagenRecuadro: nuna1,
          imagenes: [
            {
              imagenes: nuna1,
            },
            {
              imagenes: nuna2,
            },
            {
              imagenes: nuna3,
            },
            {
              imagenes: nuna4,
            },
            {
              imagenes: nuna5,
            },
             
          ],
        },
      ],
      colores: [
        {
          azul_rey: "#4559DE",
          azul_oscuro: "#05192D",
          naranja: "#FF6122",
          blanco: "#FFFFFF",
          gris_claro: "#EDEDED",
        },
      ],
    },
  ];

   /* PARA ABRIR POPUP */

   const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

   const funcionSeleccionarProyecto = (index) => {
     setProyectoSeleccionado(index);
     document.body.classList.add("popup-open");
   };

   const cerrarPopup = () =>{
    setProyectoSeleccionado(null);
    document.body.classList.remove("popup-open");
   }

  const values = {
    infoHomeArray: Object.values(informacion[0].home),
    colores: informacion[0].colores[0], // Acceder al primer elemento directamente
    infoServiciosArray: Object.values(informacion[0].servicios),
    infoPortafolioArray: Object.values(informacion[0].portafolio),
    infoPortafolioProyectoArray: Object.values(
      informacion[0].proyectos_portafolio
    ),
    proyectoSeleccionado,
    setProyectoSeleccionado,
    funcionSeleccionarProyecto,
    cerrarPopup

  };

  return <InfoContext.Provider value={values}>{children}</InfoContext.Provider>;
};

export default InfoContextProvider;
