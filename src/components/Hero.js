import React from "react";
import Header from "./Header";
const Hero = () => {
  return (
    <div id="hero">
      <div className="container">
        <Header />
        <div className="big-img"></div>
        <div className="absolute grid">
          <img
            src="/assets/hero/circlel.svg"
            alt="large circle"
            className="large"
          />
          <img
            src="/assets/hero/circlem.svg"
            alt="medium circle"
            className="medium"
          />
          <img
            src="/assets/hero/circles.svg"
            alt="small circle"
            className="small"
          />
        </div>
        <div className="absolute grid">
          <div className="text">
            <h1 className="bold">Own a unique web presence</h1>
            <h2>Show your business to the world</h2>
          </div>
          <div className="cta">
            <a href="#portfolio" className="btn">
              Portfolio
            </a>
            <a href="#contact" className="btn">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
