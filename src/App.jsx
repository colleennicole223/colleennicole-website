// Import dependencies
import { useEffect } from 'react'
import React, { useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import About from './components/About';

// Register plugins 
gsap.registerPlugin(ScrollTrigger);

function App() {

  useEffect(() => {
    //will place GSAP in here 
    
  }, []); // Empty dependency array ensures the effect runs only once on mount **CHECK THIS**


  return (
    <>
      <div>
        
        <div id="sections">
        <Navigation />  
        <Hero  />
        <About />
        <Projects />
        <Experience />
        <Contact />
        </div>



        <h1>Heading 1, One</h1>
        <h2>Heading 2, Two</h2>
        <h4>Heading 4, Four</h4>
        <p>Paragraph, <span className='highlight'>because</span> I have a lot to say</p>
      </div>
    </>
  )
}

export default App






