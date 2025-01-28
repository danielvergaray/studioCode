import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const AccordionMaker = () => {
  const [activeKey, setActiveKey] = useState("1"); // Inicialmente abierto el item con eventKey "0"

  const { infoServiciosArray, colores, setAccordionAbierto } =
    useContext(InfoContext);

  const [mostrarInfo, setMostrarInfo] = useState(0);

  const handleToggle = (key) => {
    /* acordeon externo */
    if (key !== activeKey) {
      // Solo cambia el activo si el nuevo key es diferente al actual
      setActiveKey(key);
    }
    setAccordionAbierto(key)
  };

  const toggleInfo = (index) => {
    setMostrarInfo((prevState) => (prevState === index ? 0 : index)); // Alternar índice activo
  console.log(index)
  };

  return (
    <Accordion className="acordion-externo" activeKey={activeKey} flush>
      {infoServiciosArray.map((servicio, index) => (
        <>
          <Accordion.Item
            eventKey={servicio.item}
            key={index}
            onClick={() => handleToggle(servicio.item)}
            className={activeKey === servicio.item ? "item-activo" : ""}
            style={
              index === 0
                ? { backgroundColor: `${colores.azul_rey}` }
                : index === 1
                ? { backgroundColor: `${colores.azul_oscuro}` }
                : { backgroundColor: `${colores.naranja}` }
            }
          >
            <Accordion.Header
              className={activeKey === servicio.item ? "oculto" : ""}
            >
              <p>{servicio.titulo}</p>
              <span className="accordion-icon">
                <img src={servicio.icono_flecha} alt="icono-flecha" />
              </span>
            </Accordion.Header>
            <Accordion.Body
              className={
                activeKey === servicio.item ? "cuerpo_acordion" : "oculto"
              }
            >
              <section>
                <div className="home_desktop-servicios-pretitulo">
                  <p>{servicio.pretitulo}</p>
                </div>
                <div className="home_desktop-servicios-titulo">
                  <p className="home_desktop-servicios-p">{servicio.titulo}</p>
                  <div className="home_desktop-servicios-titulo-estrella">
                    <img src={servicio.icono_estrella} alt="" />
                  </div>
                </div>
                {/* Acordion interno */}
                <>
                  <span></span>
                  {servicio.descripcion_servicios.map(
                    (descripcionServicio, index) => (
                      <section className="servicios">
                        <div className="servicios-cerrado">
                          <h2>{descripcionServicio.titulo}</h2>
                          <div
                            className="servicios-iconoAbrirCerrar"
                            onClick={() => toggleInfo(index)}
                            style={{ cursor: "pointer" }}
                          >
                            <i>
                              {mostrarInfo === index ? (
                                <CiCircleMinus />
                              ) : (
                                <CiCirclePlus />
                              )}
                            </i>
                          </div>
                        </div>
                        {mostrarInfo === index && (
                          <div className="servicios-abierto">
                            <p>{descripcionServicio.descripcion}</p>
                          </div>
                        )}
                        <span></span>
                      </section>
                    )
                  )}
                </>
              </section>

              {/*  <section className="prueba">
                  <img src={servicio.servicios_branding_foto} alt="" />
                </section> */}
            </Accordion.Body>
          </Accordion.Item>
        </>
      ))}
    </Accordion>
  );
};

export default AccordionMaker;
