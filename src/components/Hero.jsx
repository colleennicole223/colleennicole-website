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
          <h1>C O L L E E N</h1>
          <h1>F U L T O N</h1>
          
          <Spline 
            scene={color === "dark" ? "https://prod.spline.design/2OJTcEHcxFIuNNt1/scene.splinecode" : "https://prod.spline.design/kvpHO2CoNhBLwFhh/scene.splinecode"} 
            onLoad={(spline) => {
              if(window.innerWidth<1200){
                spline.setZoom(window.innerWidth/1000); }else{
                  spline.setZoom(1)
                }
            }}
            />
            </div>
    </section>
    </>
  )
}


export default Hero