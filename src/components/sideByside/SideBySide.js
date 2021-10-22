import React from "react";
import "./index.scss";

const SidebySide = ({ maxwidth, sideTwo, imageOne }) => {
  return (
    <div className="side-side__" style={{ width: `${maxwidth}` }}>
      <div className="side-two">
        <img src={imageOne} alt="graphic" />
      </div>
      <div className="side-one">
        {sideTwo}
      </div>
    </div>
  );
};

export default SidebySide;
