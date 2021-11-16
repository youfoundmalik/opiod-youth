import React from "react";
import "./index.scss";

const ParagraphBox = ({ children, altclass }) => {
  return <div className={`paragraph-box ${altclass}`}><div className="inner">{children}</div></div>;
};

export default ParagraphBox;
