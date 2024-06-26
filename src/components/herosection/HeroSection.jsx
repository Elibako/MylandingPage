import React from 'react'
import './HeroSection.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration:800,
      delay:200,
      easing:200,
    });
  }, [])
  return (
    <div className="hero-section">
      <div className="hero-text" data-aos="fade-right">
        <h1>Streamline Your Schedule with Asterikks </h1>
        <p>Make the most of your time with Asterikss. 
Schedule appointments, manage your calendar, and stay organized with ease. Try it now and simplify your life!</p>
        <button className='button'>Get Started</button>
      </div>
      <div className="hero-image"data-aos="fade-left">
        <img src="Saly-42.png" alt="Hero Image" />
      </div>
    </div>
  )
}

export default HeroSection