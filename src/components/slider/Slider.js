import React, { useEffect, useState } from "react";
import "./index.scss";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Graphics from "../../images/Graphics";

const Slider = ({
  slide,
  toptextDisplay,
  btntext1Display,
  btntext2Display,
  gap,
  barDisplay,
  imgwidth,
  maxwidth,
  speclass,
}) => {
  const [start, setStart] = useState(0);

  // const slide = [
  //   {
  //     img: `${Graphics.svg[5]}`,
  //     text: "After surgery",
  //   },
  //   {
  //     img: `${Graphics.svg[6]}`,
  //     text: "Severe fracture",
  //   },
  //   {
  //     img: `${Graphics.svg[7]}`,
  //     text: "With appendicitis",
  //   },
  // ];

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
  }, [start]);

  return (
    <div className="container" style={{ width: `${maxwidth}`, gap: `${gap}` }}>
      <p style={{ display: `${toptextDisplay}` }}>{text}</p>
      <div className="slider">
        <div>
          <FaChevronLeft className="scrollLeft" onClick={prev} />
        </div>

        <div className="slide">
          <img
            src={img}
            alt="slide"
            id="scrollImg"
            style={{ width: `${imgwidth}` }}
          />
          <h6
            id="scrollText"
            className="boldText"
            style={{ display: `${btntext1Display}` }}
          >
            {text}
          </h6>
        </div>
        <div>
          <FaChevronRight className="scrollRight" onClick={next} />
        </div>
      </div>
      <p style={{ display: `${btntext2Display}` }}>{text}</p>
      <div className="toggleScroll" style={{ display: `${barDisplay}` }}>
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
