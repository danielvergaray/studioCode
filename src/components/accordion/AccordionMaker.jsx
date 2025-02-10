import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";
import { BiPlus, BiMinus } from "react-icons/bi";

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
    setAccordionAbierto(key);
  };

  const toggleInfo = (index) => {
    setMostrarInfo((prevState) => (prevState === index ? 0 : index)); // Alternar índice activo
    console.log(index);
  };

  const scrollFunction = () => {
    const scrollAmount= 500;
    window.scrollTo({
      top: scrollAmount,
      behavior: "instant",
    });
  };

  const handleToggleMobile = (key) => {
    /* acordeon externo */
    if (key !== activeKey) {
      // Solo cambia el activo si el nuevo key es diferente al actual
      setActiveKey(key);
    }
    setAccordionAbierto(key);
    scrollFunction();
  };

  return (
    <>
      <Accordion
        className="acordion-externo-desktop"
        activeKey={activeKey}
        flush
      >
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
                    <p className="home_desktop-servicios-p">
                      {servicio.titulo}
                    </p>
                    {/*     <div className="home_desktop-servicios-titulo-estrella">
                    <img src={servicio.icono_estrella} alt="" />
                  </div> */}
                  </div>
                  {/* Acordion interno */}
                  <>
                    <span></span>
                    {servicio.descripcion_servicios.map(
                      (descripcionServicio, index) => (
                        <section className="servicios" key={index}>
                          <div className="servicios-cerrado">
                            <h2>{descripcionServicio.titulo}</h2>
                            <div
                              className="servicios-iconoAbrirCerrar"
                              onClick={() => toggleInfo(index)}
                              style={{ cursor: "pointer" }}
                            >
                              {mostrarInfo === index ? (
                                <div>
                                  <BiMinus />
                                </div>
                              ) : (
                                <div>
                                  <BiPlus />
                                </div>
                              )}
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

      <section className="acordion-externo-mobile">
        <Accordion activeKey={activeKey} flush>
          {infoServiciosArray.map((servicio, index) => (
            <>
              <Accordion.Item
                eventKey={servicio.item}
                key={index}
                onClick={() => handleToggleMobile(servicio.item)}
                className={activeKey === servicio.item ? "item-activo" : ""}
                style={
                  index === 0
                    ? { backgroundColor: `${colores.azul_rey}`, border: "none" }
                    : index === 1
                    ? {
                        backgroundColor: `${colores.azul_oscuro}`,
                        border: "none",
                      }
                    : { backgroundColor: `${colores.naranja}`, border: "none" }
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
                  <section className="acordion-contenido">
                    <div className="home_mobile-servicios-pretitulo">
                      <p>{servicio.pretitulo}</p>
                    </div>
                    <div className="home_mobile-servicios-titulo">
                      <p className="home_mobile-servicios-p">
                        {servicio.titulo}
                      </p>
                      {/*     <div className="home_desktop-servicios-titulo-estrella">
                    <img src={servicio.icono_estrella} alt="" />
                  </div> */}
                    </div>
                    {/* Acordion interno */}
                    <>
                      <span></span>
                      {servicio.descripcion_servicios.map(
                        (descripcionServicio, index) => (
                          <section className="servicios" key={index}>
                            <div className="servicios-cerrado">
                              <h2>{descripcionServicio.titulo}</h2>
                              <div
                                className="servicios-iconoAbrirCerrar"
                                onClick={() => toggleInfo(index)}
                                style={{ cursor: "pointer" }}
                              >
                                {mostrarInfo === index ? (
                                  <div>
                                    <BiMinus />
                                  </div>
                                ) : (
                                  <div>
                                    <BiPlus />
                                  </div>
                                )}
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
                  <section className="home_mobile-servicios-imagen">
                    <img src={servicio.imagen_servicio} alt={servicio.titulo} />
                  </section>
                </Accordion.Body>
              </Accordion.Item>
            </>
          ))}
        </Accordion>
      </section>
    </>
  );
};

export default AccordionMaker;
