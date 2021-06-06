import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer";
ReactDOM.render(
  <React.StrictMode>
    <Hero />
    <Main />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
