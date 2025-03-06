import React from "react";
import { useContext, useEffect, useState } from "react";
import InfoContext from "../infoContext/InfoContext";
import DropdownMaker from "../Dropdown/DropdownMaker";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import "animate.css/animate.min.css";

const Home = () => {
  const { infoHomeArray } = useContext(InfoContext);
  const [showFinalPosition, setShowFinalPosition] = useState(false);
  const [primeraPantalla, setPrimeraPantalla] = useState(true);
  const [primeraPantallaMobile, setPrimeraPantallaMobile] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFinalPosition(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timerPaantalla = setTimeout(() => {
      setPrimeraPantalla(false);
    }, 3500);
  });

  useEffect(() => {
    const timerPaantalla = setTimeout(() => {
      setPrimeraPantallaMobile(false);
    }, 4000);
  });

  return (
    <section className="home_desktop">
      {infoHomeArray.map((info, index) => (
        <div key={index}>
          <div className="home_desktop-navbar">
            <motion.div
              className="home_desktop-navbar-logo"
              initial={{
                x: "75vw", // Centrado horizontalmente
                y: "40vh", // Centrado verticalmente
                opacity: 1,
                scale: 2,
              }}
              animate={
                showFinalPosition
                  ? { x: 0, y: 0, opacity: 1, scale: 1 }
                  : { x: "75vw", y: "40vh", opacity: 1, scale: 2 }
              }
              transition={{ duration: 3, ease: "easeOut" }}
            >
              <img
                src={info.navBar_nombreEmpresa}
                alt="logo-studioCode"
                data-aos="zoom-in"
              />
            </motion.div>
            {!primeraPantalla && (
              <div className="home_desktop-navbar-idioma animate__animated animate__fadeIn animate__slow animate__delay-3s">
                <DropdownMaker primerIdioma="ESPAÑOL" segundoIdioma="ENGLISH" />
              </div>
            )}
          </div>

          <div className="home_mobile-navbar">
            {!primeraPantalla ? (
              <div className="home_mobile-navbar-idioma">
                <DropdownMaker primerIdioma="ESP" segundoIdioma="ENG" />
              </div>
            ) : (
              <div style={{ height: "34.5px" }}>
                {/* Para que dejar el contenedor disponible mientras el logo llega a su lugar */}
              </div>
            )}

            <motion.div
              className="home_desktop-navbar-logo"
              initial={{
                x: "0vw", // Centrado horizontalmente
                y: "45vh", // Centrado verticalmente
                opacity: 1,
                scale: 0.6,
              }}
              animate={
                showFinalPosition
                  ? { x: 0, y: 0, opacity: 1, scale: 0.5 }
                  : { x: "0vw", y: "45vh", opacity: 1, scale: 2 }
              }
              transition={{ duration: 3, ease: "easeOut" }}
            >
              <img
                src={info.navBar_nombreEmpresa}
                alt="logo-studioCode"
                data-aos="zoom-in"
              />
            </motion.div>

            {/* <div className="home_mobile-navbar-logo">
              <img src={info.navBar_nombreEmpresa} alt="logo-studioCode" />
            </div> */}
          </div>

          <div className="home_desktop-title">
            {!primeraPantalla && (
              <>
                {/*   <p>{info.titulo}</p>
                <p>{info.nombreEmpresa}</p> */}
                <p>
                  <ReactTyped
                    strings={[`${info.titulo}`]}
                    startWhenVisible
                    typeSpeed={200}
                    showCursor={false}
                  />
                </p>
                <p>
                  <ReactTyped
                    strings={[`${info.nombreEmpresa}`]}
                    startWhenVisible
                    typeSpeed={200}
                  />
                </p>
              </>
            )}
          </div>

          <div className="home_mobile-title">
            {!primeraPantallaMobile && (
              <>
                <p>
                  {/* {info.titulo} */}
                  <ReactTyped
                    strings={[`${info.titulo}`]}
                    startWhenVisible
                    typeSpeed={150}
                    showCursor={false}
                  />
                </p>
                <p>
                  {/*  {info.nombreEmpresaMobile} */}

                  <ReactTyped
                    strings={[`${info.nombreEmpresaMobile}`]}
                    startWhenVisible
                    typeSpeed={150}
                    showCursor={false}
                    startDelay={2000}
                  />
                </p>
                <p>
                  {/* {info.nombreEmpresaMobile2} */}
                  <ReactTyped
                    strings={[`${info.nombreEmpresaMobile2}`]}
                    startWhenVisible
                    typeSpeed={150}
                    showCursor={false}
                    startDelay={3000}
                  />
                </p>
              </>
            )}
          </div>

          {!primeraPantalla && (
            <div className="home_desktop-icon">
              <img src={info.iconoEstrella} alt="icono-estrella" />
            </div>
          )}

          {!primeraPantalla && (
            <div
              className="home_desktop-subtitulo
              animate__animated animate__fadeIn animate__slow animate__delay-3s"
            >
              <p>{info.subtitulo}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Home;
