import React from "react";
import { useContext, useEffect } from "react";
import InfoContext from "../infoContext/InfoContext";
import { FiArrowRight } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  const { infoHomeArray, infoFooterArray } = useContext(InfoContext);

  useEffect(() => {
    Aos.init();
  }, [{ duration: 1000 }]);

  return (
    <section className="footer">
      {infoHomeArray.map((info, index) => (
        <div
          key={index}
          className="footer-icon"
          data-aos="fade-in"
          data-aos-delay="2000"
        >
          <img src={info.iconoEstrella} alt="icono-estrella" />
        </div>
      ))}

      {infoFooterArray.map((info, index) => (
        <div key={index}>
          <div className="footer-pretitulo" data-aos="fade-in">
            <p>{info.pretitulo}</p>
          </div>
          <div
            className="footer-titulo"
            data-aos="flip-up"
            data-aos-delay="1000"
          >
            <p>{info.titulo}</p>
          </div>
          <div
            className="footer-boton"
            data-aos="fade-in"
            data-aos-delay="2000"
          >
            <div className="footer-boton-texto">
              <p>{info.mensaje}</p>
            </div>

            <div className="footer-boton-flecha">
              <FiArrowRight />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Footer;
