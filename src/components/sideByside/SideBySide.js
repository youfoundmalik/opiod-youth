import React from "react";
import "./index.scss";

const SidebySide = ({ altclass, sideTwo, imageOne }) => {
  return (
    <div className={`side-side__ ${altclass}`} >
      <div className="side-one">
        <img src={imageOne} alt="graphic" />
      </div>
      <div className="side-two">
        {sideTwo}
      </div>
    </div>
  );
};

export default SidebySide;
