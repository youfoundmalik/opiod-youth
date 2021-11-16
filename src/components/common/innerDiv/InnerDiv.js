import React from "react";
import "./index.scss";

const InnerDiv = ({ altclass, children }) => {
  return (
    <div
      className={`inner-div_ ${altclass}`}
    >
      {children}
    </div>
  );
};

export default InnerDiv;
