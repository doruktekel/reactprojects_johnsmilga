import React, { useState } from "react";
import "./Reviews.css";
import data from "../../data";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = data[index];

  const nextReview = () => {
    index >= data.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  const prevReview = () => {
    index === 0 ? setIndex(data.length - 1) : setIndex(index - 1);
  };

  const randomReview = () => {
    const newindex = Math.floor(Math.random() * 4);
    setIndex(newindex);
  };
  return (
    <div className="container">
      <img src={image} alt={name} className="image" />
      <h3 className="name">{name}</h3>
      <h3 className="job">{job}</h3>
      <p className="text">{text}</p>
      <div className="chevrons">
        <button className="chevronbtn" onClick={prevReview}>
          <FaChevronCircleLeft className="chevron" />
        </button>
        <button className="chevronbtn" onClick={nextReview}>
          <FaChevronCircleRight className="chevron" />
        </button>
      </div>
      <button className="btn" onClick={randomReview}>
        get random reviews
      </button>
    </div>
  );
};

export default Reviews;
