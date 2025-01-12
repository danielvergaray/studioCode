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
        <div key={index}>
          <p>{info.pretitulo}</p>
          <h1>{info.titulo}</h1>

          <section className="desktop_portafolio">
            {info.menu.map((opcion, index) => (
              <div key={index}>
                <NavLink onClick={() => seleccionarCategoria(opcion.opcion)}>
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
