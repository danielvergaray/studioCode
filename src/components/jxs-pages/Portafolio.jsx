import React, { useContext, useState } from "react";
import InfoContext from "../infoContext/InfoContext";
import { NavLink } from "react-router-dom";
import Popup from "./Popup";

const Portafolio = () => {
  const { infoPortafolioArray, infoPortafolioProyectoArray, colores } =
    useContext(InfoContext);

  const [categoriaSeleccionado, setCategoriaSeleccionada] = useState("todos");

  const seleccionarCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const funcionSeleccionarProyecto = (index) => {
    setProyectoSeleccionado(index);
    console.log(index);
  };
  return (
    <>
      {infoPortafolioArray.map((info, index) => (
        <div className="portafolio-header" key={index}>
          <p className="portafolio-header-pretitulo">{info.pretitulo}</p>
          <h1 className="portafolio-header-titulo">{info.titulo}</h1>

          <section className="portafolio-menu">
            {info.menu.map((opcion, index) => (
              <div key={index}>
                <NavLink
                  onClick={() => seleccionarCategoria(opcion.opcion)}
                  style={
                    index === 0
                      ? { backgroundColor: `${colores.blanco}`, color: `${colores.azul_oscuro}` }
                      : index === 1
                      ? { backgroundColor: `${colores.azul_rey}` }
                      : index === 2
                      ? { backgroundColor: `${colores.azul_oscuro}` }
                      : { backgroundColor: `${colores.naranja}` }
                  }
                >
                  {opcion.opcion}
                </NavLink>
              </div>
            ))}
          </section>
        </div>
      ))}

      <section className="portafolio-proyectos">
        {categoriaSeleccionado === "todos"
          ? infoPortafolioProyectoArray.map((proyecto, index) => (
              <div
                key={index}
                className="portafolio-proyectos-item"
                onClick={() => funcionSeleccionarProyecto(index)}
              >
                <img src={proyecto.imagenRecuadro} alt="" />
              </div>
            ))
          : infoPortafolioProyectoArray
              .filter(
                (proyecto) => proyecto.categoria === categoriaSeleccionado
              ) // Filtrar por categoría
              .map((proyecto, index) => (
                <div className="portafolio-proyectos-item">
                  <img src={proyecto.imagenRecuadro} alt="" />
                </div>
              ))}
      </section>

      {proyectoSeleccionado !== null ? (
        <div className="popup-container">
          <Popup proyectoSeleccionado={proyectoSeleccionado} />
        </div>
      ) : null}
    </>
  );
};

export default Portafolio;
