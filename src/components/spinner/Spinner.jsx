import React from "react";
import Spinner from 'react-bootstrap/Spinner';

const Spinner = ({texto}) => {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">{texto}</span>
    </Spinner>
  );
};

export default Spinner;
