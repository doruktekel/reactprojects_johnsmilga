import React from "react";
import Tour from "../Tour";
import "./Tours.css";

const Tours = ({ data, removeItem }) => {
  return (
    <div className="tours">
      {data.map((item) => {
        return <Tour key={item.id} {...item} removeItem={removeItem} />;
      })}
    </div>
  );
};

export default Tours;
