import React from "react";
import Heading from "../common/Heading";
import InnerDiv from "../common/innerDiv/InnerDiv";
import "./index.scss";

const ThreeInOne = ({ heading, mainImg, altclass, children }) => {
  return (
    <div className={`three-in-one__ ${altclass}`}>
      <Heading>{heading}</Heading>
      <InnerDiv altclass="ThreeinOne_inner">
        <img src={mainImg} className="ThreeinOne_inner_img" alt="3in1_img" />
        {children}
      </InnerDiv>
    </div>
  );
};

export default ThreeInOne;
