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
  
  return (
    <>
    <div>
    </div>
      <Router>
        <Routes>
          <Route path='/' element={
              <div id="sections">
                <Navigation/>  
                <Hero  />
                <Projects />
                <About />
                <Experience />
                <Contact />
                <Footer />
              </div>
          }/>
          <Route path='/WriterGadget' element={<WriterGadget/>}/>
          <Route path='/Thymer' element={<Thymer/>}/>
        </Routes>
      </Router>       
        
    </>
  )
}

export default App






