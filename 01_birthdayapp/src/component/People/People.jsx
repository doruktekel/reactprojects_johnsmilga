import React from "react";
import "./People.css";

const People = ({ users }) => {
  return (
    <div className="users">
      {users.map((user) => {
        const { id, name, age, image } = user;
        return (
          <div key={id} className="user">
            <div className="image">
              <img src={image} alt={name} />
            </div>
            <div className="information">
              <h2>{name}</h2>
              <h3>{age}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default People;
