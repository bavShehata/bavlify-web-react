import React, { useEffect, useState } from "react";
import axios from "axios";
import ListPortfolios from "./ListPortfolios";
const uri =
  "https://my-json-server.typicode.com/bavShehata/bavlifyWeb/portfolios";
const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  useEffect(() => {
    let script;
    axios.get(uri).then((result) => {
      console.log(result.data);
      setPortfolios(result.data);
      script = document.createElement("script");
      script.src = "/../portfolioControls.js";
      script.async = true;
      document.body.appendChild(script);
    });
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <section id="portfolio">
      <div className="slideshow-container">
        <div className="container">
          <ListPortfolios portfolios={portfolios} />
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
