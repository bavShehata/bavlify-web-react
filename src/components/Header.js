import React from "react";
const Header = () => {
  return (
    <header>
      <a href="/" id="logo">
        <img src="/assets/hero/logo.svg" alt="Logo" />
        <h2 className="bold">Bavlify Web</h2>
      </a>
      <nav>
        <a href="#about">about</a>
      </nav>
      <div className="absolute">
        <button className="btn" id="theme">
          Halloween!
        </button>
      </div>
    </header>
  );
};
export default Header;
