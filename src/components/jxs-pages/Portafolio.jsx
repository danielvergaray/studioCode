import React, { useContext, useState, useEffect } from "react";
import InfoContext from "../infoContext/InfoContext";
import { NavLink } from "react-router-dom";
import Popup from "./Popup";
import Aos from "aos";
import "aos/dist/aos.css";

const Portafolio = () => {
  const {
    infoPortafolioArray,
    infoPortafolioProyectoArray,
    colores,
    proyectoSeleccionado,
    funcionSeleccionarProyecto,
    idioma,
  } = useContext(InfoContext);

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");

  const seleccionarCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  // Crear un estado de hover para cada menú
  const [hoverState, setHoverState] = useState([]);

  const handleMouseEnter = (index) => {
    const newHoverState = [...hoverState];
    newHoverState[index] = true;
    setHoverState(newHoverState);
  };

  const handleMouseLeave = (index) => {
    const newHoverState = [...hoverState];
    newHoverState[index] = false;
    setHoverState(newHoverState);
  };

  // Filtrar los proyectos basados en la categoría seleccionada
  const proyectosFiltrados =
    categoriaSeleccionada === "todos"
      ? infoPortafolioProyectoArray
      : infoPortafolioProyectoArray.filter(
          (proyecto) => proyecto.categoria === categoriaSeleccionada
        );

  /* BOTON VER MAS */

  const [cantProyectos, setCantProyectos] = useState(6); //Para mostrar solamente 6 productos
  const [cantProyectosMobile, setCantProyectosMobile] = useState(3);

  const verMasProyectos = () => {
    setCantProyectos(cantProyectos + 6);
    setCantProyectosMobile(cantProyectos + 3);
    setVerMas(!verMas);
  };

  const [verMas, setVerMas] = useState(true);

  useEffect(() => {
    Aos.init();
  }, [{ duration: 1000 }]);

  return (
    <>
      {infoPortafolioArray.map((info, index) => (
        <div className="portafolio-header" key={index}>
          <p
            className="portafolio-header-pretitulo"
            data-aos="fade-in"
            data-aos-duration="1000"
          >
            {info.pretitulo}
          </p>
          <h1
            className="portafolio-header-titulo"
            data-aos="flip-up"
            data-aos-delay="300"
            data-aos-easing="linear"
          >
            {info.titulo}
          </h1>

          <section className="portafolio-menu">
            {info.menu.map((opcion, menuIndex) => (
              <div key={menuIndex}>
                <NavLink
                  onMouseEnter={() => handleMouseEnter(menuIndex)}
                  onMouseLeave={() => handleMouseLeave(menuIndex)}
                  onClick={() => seleccionarCategoria(opcion.opcion)}
                  style={{
                    backgroundColor:
                      opcion.opcion === categoriaSeleccionada ||
                      hoverState[menuIndex]
                        ? "transparent" // Fondo transparente para estado activo o hover
                        : menuIndex === 0
                        ? colores.gris_oscuro
                        : menuIndex === 1
                        ? colores.azul_rey
                        : menuIndex === 2
                        ? colores.azul_oscuro
                        : menuIndex === 3
                        ? colores.naranja
                        : "transparent", // Fondo definido para estado inactivo
                    color:
                      opcion.opcion === categoriaSeleccionada ||
                      hoverState[menuIndex]
                        ? menuIndex === 0
                          ? colores.gris_oscuro
                          : menuIndex === 1
                          ? colores.azul_rey
                          : menuIndex === 2
                          ? colores.azul_oscuro
                          : menuIndex === 3
                          ? colores.naranja
                          : colores.blanco // Color de texto correspondiente al fondo inactivo
                        : colores.blanco, // Texto blanco en estado inactivo
                    border: `1px solid`,
                    borderColor:
                      menuIndex === 0
                        ? colores.gris_oscuro
                        : menuIndex === 1
                        ? colores.azul_rey
                        : menuIndex === 2
                        ? colores.azul_oscuro
                        : menuIndex === 3
                        ? colores.naranja
                        : null,
                  }}
                  data-aos="fade-in"
                  data-aos-delay={menuIndex * 600}
                >
                  {opcion.opcion}
                </NavLink>
              </div>
            ))}
          </section>

          <section className="portafolio-menu-mobile">
            {info.menu.map((opcion, menuIndex) => (
              <div key={menuIndex}>
                <NavLink
                  onMouseEnter={() => handleMouseEnter(menuIndex)}
                  onMouseLeave={() => handleMouseLeave(menuIndex)}
                  onClick={() => seleccionarCategoria(opcion.opcion)}
                  style={{
                    backgroundColor:
                      opcion.opcion === categoriaSeleccionada
                        ? "transparent" // Fondo transparente para estado activo o hover
                        : menuIndex === 0
                        ? colores.gris_oscuro
                        : menuIndex === 1
                        ? colores.azul_rey
                        : menuIndex === 2
                        ? colores.azul_oscuro
                        : menuIndex === 3
                        ? colores.naranja
                        : "transparent", // Fondo definido para estado inactivo
                    color:
                      opcion.opcion === categoriaSeleccionada
                        ? menuIndex === 0
                          ? colores.gris_oscuro
                          : menuIndex === 1
                          ? colores.azul_rey
                          : menuIndex === 2
                          ? colores.azul_oscuro
                          : menuIndex === 3
                          ? colores.naranja
                          : colores.blanco // Color de texto correspondiente al fondo inactivo
                        : colores.blanco, // Texto blanco en estado inactivo
                    border: `1px solid`,
                    borderColor:
                      menuIndex === 0
                        ? colores.gris_oscuro
                        : menuIndex === 1
                        ? colores.azul_rey
                        : menuIndex === 2
                        ? colores.azul_oscuro
                        : menuIndex === 3
                        ? colores.naranja
                        : null,
                  }}
                  data-aos="fade-in"
                  data-aos-delay={menuIndex * 600}
                >
                  {opcion.opcion}
                </NavLink>
              </div>
            ))}
          </section>
        </div>
      ))}

      <section className="portafolio-proyectos">
        {categoriaSeleccionada === "todos" || categoriaSeleccionada === "all"
          ? infoPortafolioProyectoArray
              .slice(0, cantProyectos)
              .map((proyecto, index) => (
                <div
                  key={index}
                  className="portafolio-proyectos-item"
                  onClick={() => funcionSeleccionarProyecto(index)}
                  data-aos="fade-in"
                  data-aos-delay="1000"
                >
                  <img src={proyecto.imagenRecuadro} alt={proyecto.titulo} />
                </div>
              ))
          : infoPortafolioProyectoArray
              .filter(
                (proyecto) => proyecto.categoria === categoriaSeleccionada
              ) // Filtrar por categoría
              .map((proyecto, index) => (
                <div
                  key={index}
                  className="portafolio-proyectos-item"
                  onClick={() => funcionSeleccionarProyecto(index)}
                >
                  <img src={proyecto.imagenRecuadro} alt="" />
                </div>
              ))}
      </section>

      <section className="portafolio-proyectos-mobile">
        {categoriaSeleccionada === "todos" || categoriaSeleccionada === "all"
          ? infoPortafolioProyectoArray
              .slice(0, cantProyectosMobile)
              .map((proyecto, index) => (
                <div
                  key={index}
                  className="portafolio-proyectos-item"
                  onClick={() => funcionSeleccionarProyecto(index)}
                  data-aos="fade-in"
                  data-aos-delay="1000"
                >
                  <img src={proyecto.imagenRecuadro} alt={proyecto.titulo} />
                </div>
              ))
          : infoPortafolioProyectoArray
              .filter(
                (proyecto) => proyecto.categoria === categoriaSeleccionada
              ) // Filtrar por categoría
              .map((proyecto, index) => (
                <div
                  key={index}
                  className="portafolio-proyectos-item"
                  onClick={() => funcionSeleccionarProyecto(index)}
                >
                  <img src={proyecto.imagenRecuadro} alt="" />
                </div>
              ))}
      </section>

      {verMas && proyectosFiltrados.length > 6 && (
        <section className="portafolio-proyectos-btn-verMas">
          {idioma === "ENG" ? (
            <button onClick={verMasProyectos}>See more projects</button>
          ) : (
            <button onClick={verMasProyectos}>ver más</button>
          )}
        </section>
      )}

      {proyectoSeleccionado !== null ? (
        <div className="popup-container">
          <Popup
            proyectoSeleccionado={proyectoSeleccionado}
            proyectosFiltrados={proyectosFiltrados}
          />
        </div>
      ) : null}
    </>
  );
};

export default Portafolio;
