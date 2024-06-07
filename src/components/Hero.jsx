import React from 'react'
// import video1 from '../video-1.mp4';
import Spline from '@splinetool/react-spline';

const Hero = () => {

  

  return (
    <>
    <section id="home">
      {/* <video className="backgroundVideo" src={video1} autoPlay loop muted>
        </video> */}
        {/* <h4> hello, my name is</h4> */}
        <div className='heroContent'>
          <h1 >COLLEEN</h1>
          <h3>DESIGNER, ENGINEER, &</h3>
          <h3>PROJECT COORDINATOR</h3>
          <h1>FULTON</h1>
          </div>
          <Spline scene="https://prod.spline.design/2OJTcEHcxFIuNNt1/scene.splinecode" />
        {/* <h4>welcome to my portfolio</h4> */}
      <div className="heroFooter"></div> 
    </section>
    </>
  )
}


export default Hero