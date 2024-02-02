import React, { useEffect } from "react";
import "./style.css";

const Alert = (props) => {
  const { removeAlert, msg, type, list } = props;

  useEffect(() => {
    const showAlert = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(showAlert);
  }, [list]);

  return (
    <div className={`${type}`}>
      <p>{msg}</p>
    </div>
  );
};

export default Alert;
