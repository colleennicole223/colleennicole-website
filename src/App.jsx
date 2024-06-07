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
import Footer from './components/Footer';
import WriterGadget from './components/WriterGadget';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Thymer from './components/Thymer';

// Register plugins 
gsap.registerPlugin(ScrollTrigger);

function App() {

  useEffect(() => {
    //will place GSAP in here 
    
  }, []); // Empty dependency array ensures the effect runs only once on mount **CHECK THIS**


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={
              <div id="sections">
                <Navigation />  
                <Hero  />
                <About />
                <Projects />
                <Experience />
                <Contact />
                <Footer />
              </div>
          }/>
          <Route path='/WriterGadget' element={<WriterGadget/>}/>
          <Route path='/Thymer' element={<Thymer/>}/>
        </Routes>
      </Router>       
        

        {/* <h1>Heading 1, One</h1>
        <h2>Heading 2, Two</h2>
        <h3>Heading 3, Three</h3>
        <h4>Heading 4, Four</h4>
        <p>Paragraph, <span className='highlight'>because</span> I have a lot to say</p> */}
    </>
  )
}

export default App






