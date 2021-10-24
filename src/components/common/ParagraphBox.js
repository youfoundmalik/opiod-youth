import React from "react";
import "./index.scss";

const ParagraphBox = ({
  children,
  size,
  spacing,
  background,
  align,
  height,
  alignI,
  justifyI
}) => {
  return (
    <div
      className="paragraph-box"
      style={{
        width: `${size}`,
        padding: `${spacing}`,
        backgroundColor: `${background}`,
        textAlign: `${align}`,
        height: `${height}`,
        alignItems: `${alignI}`,
        justifyItems: `${justifyI}`,
      }}
    >
      {children}
    </div>
  );
};

export default ParagraphBox;
