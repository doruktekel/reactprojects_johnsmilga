import React from "react";
import "./Tabs.css";

const Tabs = ({ categories, filterItem }) => {
  return (
    <div className="tabs">
      {categories.map((cat, index) => {
        return (
          <button className="btn" key={index} onClick={() => filterItem(cat)}>
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
