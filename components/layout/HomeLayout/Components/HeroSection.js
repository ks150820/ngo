import React from "react";

// import { Button } from './Button';

function HeroSection() {
  return (
    <div className="hero-container text-center">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h2 className="text-white">Global Health Initiative </h2>
      <div className="w-32 h-32">
        <img
          src="/images/logo-2.jpg"
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-white">
        Dr APJ Abdul Kalam Global Health University & Center of Excellence
      </p>
      <p className="text-white">and</p>
      <p className="text-white">Khajuraho Global Health City.</p>
    </div>
  );
}

export default HeroSection;
