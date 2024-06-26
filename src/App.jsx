import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar/NavBar'
import React from 'react';
import HeroSection from './components/herosection/HeroSection';
import About from './components/about/About';
import SecondSection from './components/secondSection/SecondSection';
import BaseSection from './components/baseSection/BaseSection';
import Footer from './components/footer/Footer';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

const App =() => {
  return (
      <div>
        <NavBar/>
        <HeroSection/>
        <About/>
        <SecondSection/>
        <BaseSection/>
        <Footer/>

      </div>




    
  )
}

export default App ;
