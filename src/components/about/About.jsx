import React from 'react'
import './about.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const About = () => {
  useEffect(() => {
    AOS.init({
      duration:800,
      delay:200,
      easing:200,
    });
  }, [])
  return (
    <div className="about-section">
      <div className="about-text" data-aos="zoom-in">
        <h1>Why should 
you choose
 us </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="about-images">
        <div className="image-item" data-aos="fade-left">
          <img src="/Saly-26.png" alt="Image 1" className="image" />
          <div className="image-text">
            <h2>Organization</h2>
            <p> you can keep all of your appointments and events in one place</p>
          </div>
        </div>
        <div className="image-item" data-aos="fade-right">
          <img src="/Saly-19.png" alt="Image 2" className="image" />
          <div className="image-text">
            <h2>Convenience</h2>
            <p>make it easy to stay on top of your schedule without having to constantly switch between different apps or tools.</p>
          </div>
        </div>
        <div className="image-item" data-aos="zoom-out">
          <img src="/Saly-10.png" alt="Image 3" className="image" />
          <div className="image-text">
            <h2>Efficiency</h2>
            <p>save time by automating many of the tasks associated with scheduling</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;