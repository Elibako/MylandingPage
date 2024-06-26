import React from 'react';
import './BaseSection.css'; // Make sure to include your CSS file
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const BaseSection = () => {
  useEffect(() => {
    AOS.init({
      duration:800,
      delay:200,
      easing:200,
    });
  }, [])
  return (
    
    <div className="third-section">
     
      <div className="third-text"data-aos="zoom-in">
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="third-image" data-aos="zoom-out">
        <img src="Saly-41.png" alt="Image" className="image" />
      </div>
    </div>
  );
};

export default BaseSection;
