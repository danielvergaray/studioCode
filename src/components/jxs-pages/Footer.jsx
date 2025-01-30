import React from "react";
import { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
  const { infoHomeArray, infoFooterArray } = useContext(InfoContext);

  return (
    <section className="footer">
      {infoHomeArray.map((info, index) => (
        <div key={index} className="footer-icon">
          <img src={info.iconoEstrella} alt="icono-estrella" />
        </div>
      ))}

      {infoFooterArray.map((info, index) => (
        <div key={index}>
          <div className="footer-pretitulo">
            <p>{info.pretitulo}</p>
          </div>
          <div className="footer-titulo">
            <p>{info.titulo}</p>
          </div>
          <div className="footer-boton">
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
