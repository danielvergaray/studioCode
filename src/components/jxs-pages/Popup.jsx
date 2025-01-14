import React from "react";
import { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";

const Popup = ({ proyectoSeleccionado }) => {
  const { infoPortafolioProyectoArray } = useContext(InfoContext);

  /*  console.log(proyectoSeleccionado)
  console.log(infoPortafolioProyectoArray) */
  console.log(infoPortafolioProyectoArray[proyectoSeleccionado].categoria);

  return (
    <>
      <div className="popup-botonCerrar">
        <p>boto de cerrar</p>
      </div>
      <div className="popup-categoria">
        <p>{infoPortafolioProyectoArray[proyectoSeleccionado].categoria}</p>
      </div>
      <div className="popup-informacion">
        <div className="popup-informacion-titulo">
          <p>{infoPortafolioProyectoArray[proyectoSeleccionado].titulo}</p>
          <p>{infoPortafolioProyectoArray[proyectoSeleccionado].cliente}</p>
        </div>
        <div className="popup-informacion-descripcion">
          <p>{infoPortafolioProyectoArray[proyectoSeleccionado].descripcion}</p>
        </div>
      </div>
      <div className="popup-carrusel"></div>
    </>
  );
};

export default Popup;
