import React from "react";
import "./marquee.css";

const Marquee = () => {
  const images = [
    "assets/imgs/page/homepage3/logo1.png",
    "assets/imgs/page/homepage3/logo2.png",
    "assets/imgs/page/homepage3/logo3.png",
    "assets/imgs/page/homepage3/logo4.png",
    "assets/imgs/page/homepage3/logo5.png",
    "assets/imgs/page/homepage3/logo6.png",
    "assets/imgs/page/homepage3/logo7.png",
    "assets/imgs/page/homepage3/logo8.png",
    "assets/imgs/page/homepage3/logo9.png",
  ];

  return (
    
    <div className="marquee-container">
      <div className="marquee">
        {images.map((src, index) => (
          <div className="marquee-item" key={index}>
            <img src={src} alt={`Logo ${index + 1}`} />
          </div>
        ))}
        {/* Duplicate the list for smooth looping */}
        {images.map((src, index) => (
          <div className="marquee-item" key={`duplicate-${index}`}>
            <img src={src} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
