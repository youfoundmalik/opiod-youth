import React, { useEffect, useState } from "react";
import "./index.scss";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Graphics from "../../images/Graphics";

const Slider = ({ slide, speclass }) => {
  const [start, setStart] = useState(0);

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
  useEffect(() => {
    const scrollB = Array.from(document.getElementsByClassName(`${speclass}`));
    scrollB[start].classList.add("active");
    for (let i = 0; i < scrollB.length; i++) {
      const scrollBars = scrollB[i];
      scrollBars.classList.remove("active");
    }
    scrollB[start].classList.add("active");
  }, [start, speclass]);

  return (
    <div className="slider_container">
      <p className="toptext">{text}</p>
      <div className="slider">
        <div className="left">
          <FaChevronLeft className="scrollLeft" onClick={prev} />
        </div>

        <div className="slide">
          <img src={img} alt="slide" id="scrollImg" />
          <h6 id="scrollText" className="boldText btntext1">
            {text}
          </h6>
        </div>
        <div className="right">
          <FaChevronRight className="scrollRight" onClick={next} />
        </div>
      </div>
      <p className="btntext2">{text}</p>
      <div className="toggleScroll">
        {slide?.map(() => {
          return (
            <hr className={`toggleView ${speclass}`} key={Math.random()} />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
