import React from "react";
import { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { IoIosArrowDown } from "react-icons/io";
import InfoContext from "../infoContext/InfoContext";

const DropdownMaker = ({primerIdioma, segundoIdioma}) => {
  /*  const [idioma, setIdioma] = useState("ESP");

  const cambiarIdioma = (idioma) => {
    setIdioma(idioma);
  }; */

  const { idioma, cambiarIdioma } = useContext(InfoContext);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {idioma}
        <IoIosArrowDown />
      </Dropdown.Toggle>

      <Dropdown.Menu>
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
