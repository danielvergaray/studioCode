import React, { useState } from "react";
import InfoContext from "./InfoContext";
import home_fondo from "../../assets/imagenes/home/home_fondo.jpg";
import navBar_nombreEmpresa from "../../assets/imagenes/navbar/nombreEmpresa.png";
import iconoEstrella from "../../assets/imagenes/home/iconoEstrella.png";
import iconoFlecha from "../../assets/imagenes/servicios/flecha.png";
import bodaDaniPao1 from "../../assets/imagenes/proyectos/boda_dani-pao/BODA-DANI-Y-PAO_01.jpeg";
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
import servicios_branding_foto from "../../assets/imagenes/servicios/BRANDING_small.jpg";
import servicios_webdesign_foto from "../../assets/imagenes/servicios/WEBDESIGN_small.jpg";
import servicios_editorial_foto from "../../assets/imagenes/servicios/EDITORIAL_small.jpg";

const InfoContextProvider = ({ children }) => {
  const informacion = [
    {
      home: [
        {
          home_fondo,
          titulo: "hola, somos",
          nombreEmpresa: "studioCode",
          nombreEmpresaMobile: "studio",
          nombreEmpresaMobile2: "code",
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
          imagen_servicio: servicios_webdesign_foto,
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
          imagen_servicio: servicios_branding_foto,
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
          imagen_servicio: servicios_editorial_foto,
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
            "Este proyecto fue creado con un enfoque único y personal, pensado especialmente para Dani y Pao. A través de un diseño visual adaptado a sus gustos y personalidad, logramos contar su historia de una forma auténtica y significativa. La disposición interactiva de la información no solo hace la invitación práctica, sino que también la convierte en una experiencia memorable. Una manera moderna y creativa de invitar a sus seres queridos a ser parte de un día tan especial.",
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
          titulo: "Invitación digital de cumpleaños",
          cliente: "Cliente por definir",
          descripcion:
            "Creamos esta invitación digital para el cumpleaños de Sebas, inspirada en la épica temática de Star Wars. Con un diseño simple y elegante, logramos un estilo moderno que se adapta perfectamente a esta ocasión especial. Cada detalle ha sido pensado para transportar a los invitados a este fascinante universo, haciendo de esta invitación una experiencia increíble. ¡Que la Fuerza esté con todos en este día tan especial!",
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
          titulo: "Branding para redes sociales",
          cliente: "Cyn Alaluna",
          descripcion:
            "Desarrollamos el branding para las redes sociales de una marca enfocada en comunicación interna. Este diseño, fresco y lleno de energía, busca ser cercano y auténtico, creando una conexión genuina entre los equipos. Cada elemento visual ha sido cuidadosamente pensado para mostrar los temas de comunicación interna de manera efectiva y dinámica.",
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
          titulo: "Logotipo y branding",
          cliente: "Mondi",
          descripcion:
            "Nos enamoramos por completo de este proyecto, donde tuvimos el privilegio de acompañar a nuestro cliente en la creación de una marca que trasciende lo convencional. En este camino, el logotipo juega un papel clave, reflejando perfectamente la esencia de la marca y conectando con su concepto integral. La marca no solo transmite información, sino también emociones, experiencias y narrativas que hacen que se sienta auténtica y significativa.",
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
          titulo: "Bitacora de actividades",
          cliente: "Enseña Perú",
          descripcion:
            "Compartimos un proyecto muy especial, el diseño de una bitácora de aprendizaje socioemocional creada especialmente para acompañar a los maestros en su labor, cuidar su bienestar y permitirles educar desde el corazón. La propuesta de diseño y diagramación está pensada para evitar que la lectura sea monótona y hacerla visualmente atractiva. Con una estructura gráfica dinámica y fluida, la bitácora facilita su uso y convierte la experiencia en algo más agradable, tanto para los maestros como para cualquiera que lo lea.",
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
          titulo: "Logotipo y branding",
          cliente: "Nuna",
          descripcion:
            "Para este proyecto, creamos un logotipo pensado para acompañar a una marca de juguetes que inspiran a los niños a descubrir el mundo de manera divertida. La propuesta visual refleja un enfoque tanto educativo como lúdico, con un diseño fresco, caracterizado por formas amigables que fomentan la exploración y el juego. Los colores, vibrantes y armoniosos, no solo atraen la mirada, sino que también representan la diversidad de experiencias que los juguetes brindan, invitándolos a aprender a través de la creatividad.",
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
      footer: [
        {
          pretitulo: "CONTÁCTANOS",
          titulo: "Hablemos de nuestro próximo proyecto juntos",
          mensaje: "ENVÍANOS UN MENSAJE",
        },
      ],
      colores: [
        {
          azul_rey: "#4559DE",
          azul_oscuro: "#05192D",
          naranja: "#FF6122",
          blanco: "#FFFFFF",
          gris_claro: "#EDEDED",
          gris_oscuro: "#B3B3B3",
        },
      ],
      imagenes_servicio_acordion:[
        {
          servicios_branding_foto,
          servicios_webdesign_foto,
          servicios_editorial_foto,
        }
      ]
    },
  ];

  const informacion_ingles = [
    {
      home: [
        {
          home_fondo,
          titulo: "hello, we are",
          nombreEmpresa: "studioCode",
          nombreEmpresaMobile: "studio",
          nombreEmpresaMobile2: "code",
          subtitulo: "web & design",
          iconoEstrella,
          navBar_nombreEmpresa,
        },
      ],

      servicios: [
        {
          item: "1",
          pretitulo: "What we do",
          titulo: "web design",
          icono_flecha: iconoFlecha,
          icono_estrella: iconoEstrella,
          servicios_branding_foto,
          descripcion_servicios: [
            {
              titulo: "web page",
              descripcion:
                "We create functional, attractive websites tailored to the needs of your project to strengthen your brand's digital presence.",
            },
            {
              titulo: "Landingpage",
              descripcion:
                "We develop simple, temporary websites, specifically designed for a specific purpose, and optimize them to ensure you achieve what you need. They are ideal for campaigns, reports and more.",
            },
            {
              titulo: "DIGITAL INVITATION",
              descripcion:
                "We design interactive invitations with links, images and visual elements to tell our clients' story. These are the ideal choice for events such as weddings, parties, conferences and other celebrations.",
            },
          ],
        },
        {
          item: "2",
          pretitulo: "What we do",
          titulo: "branding",
          icono_flecha: iconoFlecha,
          icono_estrella: iconoEstrella,
          descripcion_servicios: [
            {
              titulo: "Logo",
              descripcion:
                "We will help you create a unique visual representation for your brand using text, symbols or images. We will design an easily recognizable identity that reflects your brand values ​​and personality.",
            },
            {
              titulo: "Corporate identity",
              descripcion:
                "Give your brand a unique and coherent style, through visual elements that represent it. Together, we will discover the colors, fonts, graphic styles and custom pieces that best suit your needs.",
            },
            {
              titulo: "Packaging",
              descripcion:
                "We will design your product packaging not only with a functional focus, but also to attract consumers, reflecting the identity and values ​​of your brand.",
            },
          ],
        },
        {
          item: "3",
          pretitulo: "What we do",
          titulo: "editorial",
          icono_flecha: iconoFlecha,
          icono_estrella: iconoEstrella,
          descripcion_servicios: [
            {
              titulo: "Brochures",
              descripcion:
                "We create graphic pieces, both printed and digital, such as brochures, leaflets and brochures, to convey the information you need in a visually striking and effective way.",
            },
            {
              titulo: "Publications",
              descripcion:
                "We focus on the design and layout of printed and digital publications, such as magazines, guides and books, ensuring an attractive, professional and consistent visual presentation with the identity of your content.",
            },
            {
              titulo: "Reports",
              descripcion:
                "Communicate your company's figures and progress clearly, using infographics, visual reports and data presentations, transforming results and achievements into easily understandable and attractive graphic elements.",
            },
          ],
        },
      ],

      portafolio: [
        {
          pretitulo: "Our projects",
          titulo: "Check out what we've been creating",
          menu: [
            {
              opcion: "all",
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
      footer: [
        {
          pretitulo: "CONTACT US",
          titulo: "Let's talk about our next project together",
          mensaje: "SEND US A MESSAGE",
        },
      ],
      proyectos_portafolio: [
        {
          id: 1,
          categoria: "webdesign",
          titulo: "digital wedding invitation",
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
          titulo: "sebas digital invitation",
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
          titulo: "sebas birthday",
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
          titulo: "entel guide",
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
      imagenes_servicio_acordion:[
        {
          servicios_branding_foto,
          servicios_webdesign_foto,
          servicios_editorial_foto,
        }
      ],
    },
  ];

  const informacion_colores = [
    {
      colores: [
        {
          azul_rey: "#4559DE",
          azul_oscuro: "#05192D",
          naranja: "#FF6122",
          blanco: "#FFFFFF",
          gris_claro: "#EDEDED",
          gris_oscuro: "#B3B3B3",
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

  const cerrarPopup = () => {
    setProyectoSeleccionado(null);
    document.body.classList.remove("popup-open");
  };

  /* CAMBIO DE IDIOMA */

  const [idioma, setIdioma] = useState("ESP");

  const cambiarIdioma = (idioma) => {
    setIdioma(idioma);
  };

  /*  const arraySegunIdioma =
    idioma === "ENG" ? infoHomeArray_ingles : infoHomeArray; */

    /* PARA MOSTRAR IMAGEN AL LADO DEL ACORDION */

  const [accordionAbierto, setAccordionAbierto] = useState("1");


  const values = {
    //infoHomeArray: Object.values(informacion[0].home),
    infoHomeArray: Object.values(
      idioma === "ENG" ? informacion_ingles[0].home : informacion[0].home
    ),
    //infoHomeArray_ingles: Object.values(informacion_ingles[0].home),
    colores: informacion_colores[0].colores[0], // Acceder al primer elemento directamente
    infoServiciosArray: Object.values(
      idioma === "ENG"
        ? informacion_ingles[0].servicios
        : informacion[0].servicios
    ),

    infoServiciosAcordionArray: Object.values(
      idioma === "ENG"
        ? informacion_ingles[0].imagenes_servicio_acordion
        : informacion[0].imagenes_servicio_acordion
    ),


    infoPortafolioArray: Object.values(
      idioma === "ENG"
        ? informacion_ingles[0].portafolio
        : informacion[0].portafolio
    ),
    infoPortafolioProyectoArray: Object.values(
      idioma === "ENG"
        ? informacion_ingles[0].proyectos_portafolio
        : informacion[0].proyectos_portafolio
    ),
    infoFooterArray: Object.values(
      idioma === "ENG" ? informacion_ingles[0].footer : informacion[0].footer
    ),



    

    //infoColoresArray: Object.values (informacion_colores[0].colores),
    proyectoSeleccionado,
    setProyectoSeleccionado,
    funcionSeleccionarProyecto,
    cerrarPopup,
    idioma,
    setIdioma,
    cambiarIdioma,
    accordionAbierto, 
    setAccordionAbierto
  };

  return <InfoContext.Provider value={values}>{children}</InfoContext.Provider>;
};

export default InfoContextProvider;
