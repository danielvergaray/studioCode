import React, { useContext, useState } from "react";
import InfoContext from "../infoContext/InfoContext";
import { NavLink } from "react-router-dom";

const Portafolio = () => {
  const { infoPortafolioArray, infoPortafolioProyectoArray } =
    useContext(InfoContext);

  const [categoriaSeleccionado, setCategoriaSeleccionada] = useState("todos");

  const seleccionarCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
    console.log(categoria);
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
                <NavLink onClick={() => seleccionarCategoria(opcion.opcion)}
                  style={
                    index === 0
                      ? { backgroundColor: "white", color: "#05192D" }
                      : index === 1
                      ? { backgroundColor: " #4559DE" }
                      : index === 2
                      ? { backgroundColor: " #05192D" }
                       : { backgroundColor: " #FF6122" }
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
              <div className="portafolio-proyectos-item">
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
    </>
  );
};

export default Portafolio;
