import React from "react";
import { useContext } from "react";
import InfoContext from "../infoContext/InfoContext";
import DropdownMaker from "../Dropdown/DropdownMaker";

const Home = () => {
  const { infoHomeArray } = useContext(InfoContext);

  //const arraySegunIdioma = idioma === "ENG" ? infoHomeArray_ingles : infoHomeArray;

  return (
    <section className="home_desktop">
      {
      
      infoHomeArray.map((info, index) => (
        <div key={index}>
          <div className="home_desktop-navbar">
            <div className="home_desktop-navbar-logo">
              <img src={info.navBar_nombreEmpresa} alt="logo-studioCode" />
            </div>
            <div className="home_desktop-navbar-idioma">
              <DropdownMaker/>
            </div>
          </div>

          <div className="home_desktop-title" >
            <p>{info.titulo}</p>
            <p>{info.nombreEmpresa}</p>
          </div>

          <div className="home_mobile-title">
            <p>{info.titulo}</p>
            <p>{info.nombreEmpresaMobile}</p>
            <p>{info.nombreEmpresaMobile2}</p>
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
