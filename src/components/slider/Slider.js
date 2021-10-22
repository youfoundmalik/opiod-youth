import React, { useState } from "react";
import "./index.scss";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Graphics from "../../images/Graphics";

const Slider = () => {
  const [start, setStart] = useState(0);

  const slide = [
    {
      img: `${Graphics.svg[5]}`,
      text: "After surgery",
    },
    {
      img: `${Graphics.svg[6]}`,
      text: "Severe fracture",
    },
    {
      img: `${Graphics.svg[7]}`,
      text: "With appendicitis",
    },
  ];

  let text = slide[start].text,
    img = slide[start].img;

  const next = () => {
    if (start === slide.length - 1) {
      setStart(0);
    } else {
      setStart((start) => {
        return start + 1;
      });
    }
  };
  const prev = () => {
    if (start === 0) {
      setStart(slide.length - 1);
    } else {
      setStart((start) => {
        return start - 1;
      });
    }
  };

  return (
    <div className="slider">
      <div>
        <FaChevronLeft className="scrollLeft" onClick={prev} />
      </div>

      <div className="slide">
        <img src={img} alt="slide" id="scrollImg" />
        <h6 id="scrollText" className="boldText">
          {text}
        </h6>
      </div>
      <div>
        <FaChevronRight className="scrollRight" onClick={next} />
      </div>
    </div>
  );
};

export default Slider;
// style={{cursor: "pointer"}}
