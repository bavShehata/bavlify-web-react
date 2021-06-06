import React, { useEffect } from "react";
import { plusSlides } from "./../portfolioControls";
const ListPortfolios = ({ portfolios }) => {
  return (
    <div>
      {console.log(portfolios)}
      {portfolios.map((portfolio) => {
        return (
          <div className="mySlides fade" key={portfolio.id}>
            <div className="slider">
              <a href={portfolio.websiteURL} target="_blank" rel="noreferrer">
                <div className="desktop">
                  {/* The first three videos are mobile, so we show the image in the desktop */}
                  {() => {
                    if (portfolio.id < 4)
                      return (
                        <img src={portfolio.desktopURL} alt={portfolio.title} />
                      );
                    else
                      return (
                        <video muted playsinline preload="auto">
                          <source
                            src={portfolio.videoURLwebm}
                            type="video/webm"
                          />
                          <source
                            src={portfolio.videoURLmp4}
                            type="video/mp4"
                          />
                          Can't play this video
                        </video>
                      );
                  }}
                </div>
                <div className="mobile">
                  {() => {
                    if (portfolio.id < 4)
                      return (
                        <video muted playsinline preload="auto">
                          <source
                            src={portfolio.videoURLwebm}
                            type="video/webm"
                          />
                          <source
                            src={portfolio.videoURLmp4}
                            type="video/mp4"
                          />
                          Can't play this video
                        </video>
                      );
                    else
                      return (
                        <img src={portfolio.mobileURL} alt={portfolio.title} />
                      );
                  }}
                </div>
              </a>
              <a className="prev" onClick={plusSlides(-1)}>
                <span className="icon-arrow-left"></span>
              </a>
              <a className="next" onClick={plusSlides(1)}>
                <span className="icon-arrow-right"></span>
              </a>
            </div>
            <a href={portfolio.websiteURL} className="websiteTitle">
              <h3>{portfolio.title}</h3>
            </a>
          </div>
        );
      })}
    </div>
  );
};
export default ListPortfolios;
