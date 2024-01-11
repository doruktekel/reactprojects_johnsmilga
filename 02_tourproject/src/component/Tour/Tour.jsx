import React, { useState } from "react";
import "./Tour.css";

const Tour = (props) => {
  const [readmore, setReadmore] = useState(false);
  const { id, name, info, image, price, removeItem } = props;
  return (
    <div className="tour">
      <img src={image} alt={name} className="img" />
      <div className="details">
        <div className="headerline">
          <h3>{name}</h3>
          <h3 className="price">$ {price}</h3>
        </div>
        <p className="info">
          {readmore ? info : info.slice(0, 200)}
          <button
            className="readmore"
            onClick={() => {
              setReadmore(!readmore);
            }}
          >
            {readmore ? "Less show" : "Read More..."}
          </button>
        </p>
      </div>
      <button
        className="remove"
        onClick={() => {
          removeItem(id);
        }}
      >
        Not Interested
      </button>
    </div>
  );
};

export default Tour;
