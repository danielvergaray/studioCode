import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";

const AccordionMaker = () => {
  const [activeKey, setActiveKey] = useState("1"); // Inicialmente abierto el item con eventKey "0"

  const handleToggle = (key) => {
    if (key !== activeKey) {
      // Solo cambia el activo si el nuevo key es diferente al actual
      setActiveKey(key);
    }
  };

  const { infoServiciosArray } = useContext(InfoContext);

  return (
    <Accordion activeKey={activeKey} flush>
      {infoServiciosArray.map((servicio, index) => (
        <>
          <Accordion.Item
            eventKey={servicio.item}
            onClick={() => handleToggle(servicio.item)}
            className={activeKey === servicio.item ? "item-activo" : ""}
            style={
              index === 0
                ? { backgroundColor: " #4559DE" }
                : index === 1
                ? { backgroundColor: " #05192D" }
                : { backgroundColor: " #FF6122" }
            }
          >
            <Accordion.Header
              className={activeKey === servicio.item ? "oculto" : ""}
            >
              {servicio.titulo}
              <span className="accordion-icon">
                <img src={servicio.icono_flecha} alt="icono-flecha" />
              </span>
            </Accordion.Header>
            <Accordion.Body
              className={activeKey === servicio.item ? "" : "oculto"}
            >
              <div className="home_desktop-servicios-pretitulo">
                <p>{servicio.pretitulo}</p>
              </div>
              <div className="home_desktop-servicios-titulo">
                <p>{servicio.titulo}</p>
                <div>
                  <img src="" alt="" />
                </div>
              </div>
              <div className="home_desktop-servicios-primero">
                <p>{servicio.subtitulo1}</p>
                <p>{servicio.descripcion_subtitulo1}</p>
                <i></i>
              </div>

              <p>{servicio.subtitulo2}</p>
              <p>{servicio.descripcion_subtitulo2}</p>
              <p>{servicio.subtitulo3}</p>
              <p>{servicio.descripcion_subtitulo3}</p>
            </Accordion.Body>
          </Accordion.Item>
        </>
      ))}

      {/* <Accordion.Item eventKey="0">
        <Accordion.Header onClick={() => handleToggle("0")}>
          WEB DESIGN
        </Accordion.Header>
        <Accordion.Body>web</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header onClick={() => handleToggle("1")}>
          BRANDING
        </Accordion.Header>
        <Accordion.Body>branding</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header onClick={() => handleToggle("2")}>
          EDITORIAL
        </Accordion.Header>
        <Accordion.Body>editorial</Accordion.Body>
      </Accordion.Item> */}
    </Accordion>
  );
};

export default AccordionMaker;
