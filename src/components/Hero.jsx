import React from 'react'
import Spline from '@splinetool/react-spline';
import getColor from 'use-prefers-color-scheme';

const Hero = () => {

  const color = getColor();

  return (
    <>
    <section id="home">
        <div className='heroContent'>
          <h1 >COLLEEN</h1>
          <h3>DESIGNER, ENGINEER, &</h3>
          <h3>PROJECT COORDINATOR</h3>
          <h1>FULTON</h1>
          </div>
          <Spline scene={color === "dark" ? "https://prod.spline.design/2OJTcEHcxFIuNNt1/scene.splinecode" : "https://prod.spline.design/kvpHO2CoNhBLwFhh/scene.splinecode"}/>
    </section>
    </>
  )
}


export default Hero