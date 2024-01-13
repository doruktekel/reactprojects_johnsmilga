import React, { useState } from "react";
import "./Question.css";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const Question = (que) => {
  const [showInfo, setShowInfo] = useState(false);
  const { title, info } = que;
  return (
    <div className="question">
      <div className="firstline">
        <h4 className="title">{title}</h4>
        <button
          onClick={() => {
            setShowInfo(!showInfo);
          }}
          className="btn"
        >
          {showInfo ? (
            <FaMinusCircle className="icon" />
          ) : (
            <FaPlusCircle className="icon" />
          )}
        </button>
      </div>

      {showInfo && <p className="info">{info}</p>}
    </div>
  );
};

export default Question;
