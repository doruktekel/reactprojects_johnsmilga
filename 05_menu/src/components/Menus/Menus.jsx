import React from "react";
import "./Menus.css";

const Menus = ({ menuItem }) => {
  return (
    <div className="items">
      {menuItem.map((item) => {
        return (
          <section className="item" key={item.id}>
            <img src={item.img} alt={item.title} className="img" />
            <div className="right">
              <div className="line">
                <h3 className="title">{item.title}</h3>
                <h4 className="price">$ {item.price}</h4>
              </div>
              <div className="underline2"></div>
              <p className="desc">{item.desc}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Menus;
