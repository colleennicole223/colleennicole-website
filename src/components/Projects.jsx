import React from 'react'
import { Link } from "react-router-dom";
import writergadget from '/public/images/wg_dark.png';
import thymer from '/public/images/th_dark.png';
import pixel from '/public/images/px_dark.jpeg';
import link from '/public/icon-link-1.svg';


const Projects = () => {

  const handleOpenNewTabWG = () => {
    // window.open('/WriterGadget');
  };
  
  const handleOpenNewTabTH = () => {
    window.open('/Thymer');
  };

  const handleOpenNewTabPX = () => {
    window.open('https://colleennicole223.github.io/odin-etch-a-sketch/');
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  
  
  return (
    <section id="projects" >
      <div className="section-content">
        <h2>Projects</h2>
        <p>Welcome to the project section of my portfolio. Below is a collection of my most recent projects, each presenting unique challenges and showcase my ability to solve complex problems. </p>
        <div className="projectTiles">
          <div className="tile">
            <Link onClick={scrollToTop} to="./WriterGadget">
              <img onClick={handleOpenNewTabWG} className="wgImage" src={writergadget} />
            </Link>
            <div className="tileContent">
              <h4 id='writerGadgetTile'>Writer Gadget</h4>
              <p>
                Reworking the front end of Writers Gadget, a responsive application designed to plan, organize, and track story ideas. Utilizing  
                <span className="highlight"> Figma </span> 
                for design and familiarizing myself with 
                <span className="highlight"> Flutter</span> 
                , I aim to implement an intuitive and user-friendly interface for this functional application. 
              </p>
              <a className="link" href="https://play.google.com/store/apps/details?id=com.writergadget.writer_gadget&hl=en_US" target="_blank" rel="noopener noreferrer">
                <img  className="symbolLink" src={link} />
                <h5 className='highlight'>Google Play</h5>
              </a>
              <a className="link" href="https://apps.apple.com/us/app/writer-gadget/id1621085053" target="_blank" rel="noopener noreferrer">
                <img  className="symbolLink" src={link} />
                <h5 className='highlight'>Apple Store</h5>
              </a>
            </div>
          </div>

          
          
          <div className="tile">
            <img className="thImage" src={thymer} />
            <div className="tileContent">
              <h4>Thymer</h4>
              <p>
                Developing Thymer, a time management application, that combines a to-do list, habit tracker, and Pomodoro timer. This responsive application is currently being designed with
                <span className="highlight"> Figma </span> 
                and is projected to be built with 
                <span className="highlight"> React </span> 
                and 
                <span className="highlight"> Node.js </span>. 
              </p>
            </div>
            
          </div>

          <div className="tile">
            <img onClick={handleOpenNewTabPX} className="pxImage" src={pixel} />
            <div className="tileContent">
              <h4>Pixel Art</h4>
              <p>
                Created a pixel art sketch pad using  
                <span className="highlight"> HTML</span> 
                ,
                <span className="highlight"> CSS</span> 
                , and 
                <span className="highlight"> JavaScript</span> 
                . 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Projects