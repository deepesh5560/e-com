import React from "react";
import sam from "./pics/Phone1.png";
import "./slider.css";

function Slider() {
  return (
    <div className="slideshow-container">
      <div className="mySlides fade">
        <img src={sam} alt="jj" className="slide-img" />
      </div>

      <div className="mySlides fade"></div>

      <div className="mySlides fade"></div>

      <a className="prev" onClick="plusSlides(-1)" href="google.com">
        ❮
      </a>
      <a className="next" onClick="plusSlides(1)" href="google.com">
        ❯
      </a>
    </div>
  );
}

export default Slider;
