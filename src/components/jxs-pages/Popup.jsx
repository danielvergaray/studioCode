import React from "react";
import { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";
import CarouselMaker from "../carousel/CarouselMaker";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

const Popup = ({ proyectoSeleccionado, proyectosFiltrados }) => {


  const { colores, cerrarPopup } = useContext(InfoContext);

  /*  console.log(proyectoSeleccionado)
  console.log(infoPortafolioProyectoArray) */
  //console.log(infoPortafolioProyectoArray[proyectoSeleccionado].categoria);

  const categoriaSeleccionada =
    proyectosFiltrados[proyectoSeleccionado].categoria;

  return (
    <>
      <div className="popup-botonCerrar" onClick={cerrarPopup}>
        <div>
          <IoIosClose />
        </div>
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
        <p>{proyectosFiltrados[proyectoSeleccionado].categoria}</p>
      </div>
      <div className="popup-informacion-desktop">
        <div className="popup-informacion-textos">
          <div className="popup-informacion-textos-titulo">
            <p className="popup-informacion-textos-titulo-proyecto">
              {proyectosFiltrados[proyectoSeleccionado].titulo}
            </p>
            <p className="popup-informacion-textos-titulo-proyecto-cliente">
              {proyectosFiltrados[proyectoSeleccionado].cliente}
            </p>
          </div>
          <div className="popup-informacion-descripcion">
            <p>{proyectosFiltrados[proyectoSeleccionado].descripcion}</p>
          </div>
        </div>

        <div className="popup-carrusel">
          <CarouselMaker
            infoPortafolioProyectoArray={proyectosFiltrados}
            proyectoSeleccionado={proyectoSeleccionado}
          />
        </div>
      </div>

      <div className="popup-informacion-mobile">

        
          <div className="popup-informacion-textos-titulo">
            <p className="popup-informacion-textos-titulo-proyecto">
              {proyectosFiltrados[proyectoSeleccionado].titulo}
            </p>
            <p className="popup-informacion-textos-titulo-proyecto-cliente">
              {proyectosFiltrados[proyectoSeleccionado].cliente}
            </p>
          </div>

          <div className="popup-carrusel">
            <CarouselMaker
              infoPortafolioProyectoArray={proyectosFiltrados}
              proyectoSeleccionado={proyectoSeleccionado}
            />
          </div>
          <div className="popup-informacion-descripcion">
            <p>{proyectosFiltrados[proyectoSeleccionado].descripcion}</p>
          </div>
      
      </div>
    </>
  );
};

export default Popup;
