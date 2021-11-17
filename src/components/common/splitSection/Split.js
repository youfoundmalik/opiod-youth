import React from "react";
import "./index.scss";

const Split = ({ altclass, children }) => {
  return <div className={`split__ ${altclass}`}>{children}</div>;
};

export default Split;
