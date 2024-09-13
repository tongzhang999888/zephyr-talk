import "./bg.scss";
import React from "react";

const BG = ({ children }) => {
  return (
    <>
      <div className="bg">
        <div className="bottom"></div>
        <div className="center"></div>
        <div className="top"></div>
      </div>
      <div className="authcontainer">{children}</div>
    </>
  );
};

export default BG;
