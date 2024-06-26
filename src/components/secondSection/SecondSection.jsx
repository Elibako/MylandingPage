import React from 'react';
import './SecondSection.css'; // Make sure to include your CSS file
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const SecondSection = () => {
  useEffect(() => {
    AOS.init({
      duration:800,
      delay:200,
      easing:200,
    });
  }, [])
  return (
    <div className="second-section">
        <div className="second-image" data-aos="fade-left">
        <img src="Saly-31.png" alt="Image" className="image" />
      </div>
      <div className="second-text" data-aos="fade-right">
        <h1>Top notch user feedback</h1>
        <p>
        We always ask your users for feedback on the app, and use this information to identify areas for improvement
        User feedback drives app improvement, prioritizing updates for efficiency and fostering trust. It sparks innovation, enhancing features and engagement, strengthening developer-user relationships for sustained growth.
        </p>
      </div>
      
    </div>
  );
};

export default SecondSection;
