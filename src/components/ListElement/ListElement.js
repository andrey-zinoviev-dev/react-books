import React from "react";
import './ListElement.css';

function ListElement(props) {
  const { classValue } = props;
  
  return (
    <li className={classValue}>
      {props.children}
  </li>
  );
};

export default ListElement;