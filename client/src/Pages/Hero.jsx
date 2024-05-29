import React from "react";
import "./Hero.css";
import Button from "@mui/material/Button";
function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">WN-Phisher</h1>
          <p className="hero-description">
            WN-Phisher is an open source phishing tool that can be used to
            generate phishing emails.
          </p>
        </div>
        <div className="hero-image"></div>
        <div className="grid-container">
          <div className="grid-item">Instagram</div>
          <div className="grid-item">FaceBook</div>
          <div className="grid-item">Google</div>
          <div className="grid-item">X</div>
        </div>
      </div>
    </>
  );
}

export default Hero;
