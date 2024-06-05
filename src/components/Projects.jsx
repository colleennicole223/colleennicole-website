import React from 'react'
import { useState } from 'react'
import project1 from '../wg-1.png';
import project2 from '../wg-2.png';
import project3 from '../th-2.png';
import link from '../icon-link-1.svg';

const Projects = () => {
  
  return (
    <section id="projects" >
      <div className="section-content">
        <h2>Projects</h2>
        <p>Welcome to the project section of my portfolio. Below is a collection of my most recent projects, each presenting unique challenges and showcase my ability to solve complex problems. </p>
        <div className="projectTiles">
          <div className="tile">
            <img className="tileImg" src={project2} />
            <div className="tileContent">
              <h4>Writer Gadget</h4>
              <p>
                I am reworking the front end of Writers Gadget, a responsive application designed to plan, organize, and track story ideas. Utilizing  
                <span className="highlight"> Figma </span> 
                for design and familiarizing myself with 
                <span className="highlight"> Flutter</span> 
                , I aim to implement an intuitive and user-friendly interface for this functional application. 
              </p>
              <a className="link" href="https://play.google.com/store/apps/details?id=com.writergadget.writer_gadget&hl=en_US" target="_blank" rel="noopener noreferrer">
                <img  src={link} />
                <h5 className='highlight'>Google Play</h5>
              </a>
              {/* <h5>Collaborating with the developers of Writer Gadget, a cross-platform writing application,
                in implementing an intuitive and user-friendly interface. </h5> */}
              {/* <div className="projectSkill">
                <button className="skill">Figma</button>
                <button className="skill">Flutter</button>
              </div> */}
            </div>
            
          </div>
          
          <div className="tile">
            <img className="tileImg" src={project3} />
            <div className="tileContent">
              <h4>Thymer</h4>
              <p>
                I am developing Thymer, a time management application, that combines a to-do list, habit tracker, and Pomodoro timer. This responsive application is currently being designed with
                <span className="highlight"> Figma </span> 
                and is projected to be built with 
                <span className="highlight"> React </span> 
                and 
                <span className="highlight"> Node.js </span>. 
              </p>
              {/* <h5>Developing a productivity application aimed to help users manage their tasks, set goals, and 
                track progress efficiently. </h5> */}
              {/* <div className="projectSkill">
                <button className="skill">Figma</button>
                <button className="skill">React</button>
                <button className="skill">GSAP</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Projects