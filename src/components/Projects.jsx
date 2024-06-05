import React from 'react'
import { useState } from 'react'
import project1 from '../wg-1.png';
import project2 from '../wg-2.png';
import project3 from '../th-2.png';

const Projects = () => {
  
  return (
    <section id="projects" >
      <div className="section-content">
        <h2>Projects</h2>
        <div className="projectTiles">
          <div className="tile">
            <img className="tileImg" src={project2} />
            <div className="tileContent">
              <h4>Writer Gadget</h4>
              <p>I am currently reworking the front end of an app called Writers Gadget. I am utilizing <span className="highlight">Figma</span> and familiarizing myself with <span className="highlight">Flutter</span> to implement an intuitive and user-friendly interface. </p>
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
              <h4>Productivity Application</h4>
              {/* <h5>Developing a productivity application aimed to help users manage their tasks, set goals, and 
                track progress efficiently. </h5> */}
              <div className="projectSkill">
                <button className="skill">Figma</button>
                <button className="skill">React</button>
                <button className="skill">GSAP</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Projects