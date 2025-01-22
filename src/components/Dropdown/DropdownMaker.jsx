import React  from "react";
import { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { IoIosArrowDown } from "react-icons/io";
import InfoContext from "../infoContext/InfoContext";



const DropdownMaker = () => {
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
        <Dropdown.Item onClick={() => cambiarIdioma("ESP")}>
          ESPAÑOL
        </Dropdown.Item>
        <span></span>
        <Dropdown.Item onClick={() => cambiarIdioma("ENG")}>
          ENGLISH
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownMaker;
