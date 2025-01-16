import React from "react";
import { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";
import CarouselMaker from "../carousel/CarouselMaker";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Popup = ({ proyectoSeleccionado }) => {
  const { infoPortafolioProyectoArray, colores } = useContext(InfoContext);

  /*  console.log(proyectoSeleccionado)
  console.log(infoPortafolioProyectoArray) */
  console.log(infoPortafolioProyectoArray[proyectoSeleccionado].categoria);

  const categoriaSeleccionada =
    infoPortafolioProyectoArray[proyectoSeleccionado].categoria;

  return (
    <>
      <div className="popup-botonCerrar">
        <IoIosCloseCircleOutline />
      </div>
      <div
        className="popup-categoria"
        style={
          categoriaSeleccionada === "webdesign"
            ? { backgroundColor: `${colores.azul_rey}` }
            : categoriaSeleccionada === "branding"
            ? { backgroundColor: `${colores.azul_oscuro}` }
            : { backgroundColor: `${colores.naranja}` }
        }
      >
        <p>{infoPortafolioProyectoArray[proyectoSeleccionado].categoria}</p>
      </div>
      <div className="popup-informacion">
        <div className="popup-informacion-titulo">
          <p className="popup-informacion-titulo-proyecto">
            {infoPortafolioProyectoArray[proyectoSeleccionado].titulo}
          </p>
          <p className="popup-informacion-titulo-cliente">
            {infoPortafolioProyectoArray[proyectoSeleccionado].cliente}
          </p>
        </div>
        <div className="popup-informacion-descripcion">
          <p>{infoPortafolioProyectoArray[proyectoSeleccionado].descripcion}</p>
        </div>
      </div>
      <div className="popup-carrusel">
        <CarouselMaker
          infoPortafolioProyectoArray={infoPortafolioProyectoArray}
          proyectoSeleccionado={proyectoSeleccionado}
        />
      </div>
    </>
  );
};

export default Popup;
