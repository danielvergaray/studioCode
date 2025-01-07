import React from "react";
import { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";

const Home = () => {
  const { infoHomeArray } = useContext(InfoContext);

  return (
    <section className="home_desktop">
      {infoHomeArray.map((info, index) => (
        <div key={index}>
          
          <div className="home_desktop-navbar" >
            <img src={info.navBar_nombreEmpresa} alt="logo-studioCode" />
          </div>

          <div className="home_desktop-title" key={index}>
            <p>{info.titulo}</p>
            <p>{info.nombreEmpresa}</p>
          </div>

          <div className="home_desktop-icon">
            <img src={info.iconoEstrella} alt="icono-estrella" />
          </div>

          <div className="home_desktop-subtitulo">
            <p>{info.subtitulo}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Home;
