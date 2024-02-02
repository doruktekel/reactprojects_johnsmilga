import React from "react";
import "./style.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ id, title, removeItem, editItem }) => {
  //   const { id, title } = props;
  return (
    <div className="listitem">
      <h3>{id && title}</h3>
      <div className="buttons">
        <button className="icons" onClick={() => editItem(id)}>
          <FaEdit />
        </button>
        <button className="icons" onClick={() => removeItem(id)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default List;
