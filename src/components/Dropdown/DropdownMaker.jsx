import React from "react";
import { useContext, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { IoIosArrowDown } from "react-icons/io";
import InfoContext from "../infoContext/InfoContext";
import "animate.css/animate.min.css";

const DropdownMaker = ({ primerIdioma, segundoIdioma }) => {
  /*  const [idioma, setIdioma] = useState("ESP");

  const cambiarIdioma = (idioma) => {
    setIdioma(idioma);
  }; */

  const { idioma, cambiarIdioma } = useContext(InfoContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggle = (isOpen) => {
    setShowDropdown(isOpen); // Actualiza el estado con true o false
  };

  return (
    <Dropdown onToggle={handleToggle}>
      {" "}
      {/* Detecta si el menú está abierto o cerrado */}
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {idioma}
        <IoIosArrowDown />
      </Dropdown.Toggle>
      <Dropdown.Menu
        className={`animate__animated ${
          showDropdown ? "animate__flipInX" : ""
        }`}
      >
        <Dropdown.Item
          onClick={() => cambiarIdioma("ESP")}
          style={idioma === "ESP" ? { opacity: "1" } : null}
        >
          {primerIdioma}
        </Dropdown.Item>
        <span></span>
        <Dropdown.Item
          onClick={() => cambiarIdioma("ENG")}
          style={idioma === "ENG" ? { opacity: "1" } : null}
        >
          {segundoIdioma}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownMaker;
