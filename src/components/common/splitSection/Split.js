import React, { Children } from "react";
import "./index.scss";

const Split = ({
  maxwidth,
  columns,
  alignI,
  alignT,
  gap,
  margin,
  children,
}) => {
  return (
    <div
      className="split__"
      style={{
        width: `${maxwidth}`,
        gridTemplateColumns: `${columns}`,
        alignItems: `${alignI}`,
        textAlign: `${alignT}`,
        gap: `${gap}`,
        margin: `${margin}`,
      }}
    >
      {children}
    </div>
  );
};

export default Split;
