import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { IoIosArrowDown } from "react-icons/io";

const DropdownMaker = () => {
  const [idioma, setIdioma] = useState("ESP");

  const cambiarIdioma = (idioma) => {
    setIdioma(idioma);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {idioma}
        <IoIosArrowDown />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>cambiarIdioma("ESP")}>ESPAÑOL</Dropdown.Item>
        <span></span>
        <Dropdown.Item onClick={()=>cambiarIdioma("ING")}>INGLÉS</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownMaker;
