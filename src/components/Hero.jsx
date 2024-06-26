import { React } from 'react'
import Spline from '@splinetool/react-spline';
import getColor from 'use-prefers-color-scheme';

const Hero = () => {

  const color = getColor();
  return (
    <>
    <section id="home">
        <div className='section-content'>
          <div></div>
          {/* <h2>Hello, my name is</h2>
          <h1>Colleen</h1> */}
          
          <Spline 
            scene={color === "dark" ? "https://prod.spline.design/fXLZ73mK6pTQAzB5/scene.splinecode" : "https://prod.spline.design/vy39nqah9k40oSvF/scene.splinecode"} 
            onLoad={(spline) => {
              if(window.innerWidth<1200){
                spline.setZoom(window.innerWidth/400); }else{
                  spline.setZoom(2)
                }
            }}
            />
            </div>
    </section>
    </>
  )
}


export default Hero