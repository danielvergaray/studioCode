import React from "react";
import { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
  const { infoHomeArray } = useContext(InfoContext);

  return (
    <section className="footer">
      {infoHomeArray.map((info, index) => (
        <div key={index} className="footer-icon">
          <img src={info.iconoEstrella} alt="icono-estrella" />
        </div>
      ))}

      <div className="footer-pretitulo">
        <p>CONTÁCTANOS</p>
      </div>
      <div className="footer-titulo">
        <p>Hablemos de nuestro próximo proyecto juntos</p>
      </div>
      <div className="footer-boton">
        <div className="footer-boton-texto">
          <p>ENVÍANOS UN MENSAJE</p>
        </div>

        <div className="footer-boton-flecha">
          <FiArrowRight />
        </div>
      </div>
    </section>
  );
};

export default Footer;
