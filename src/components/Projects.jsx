import React from 'react'
import { useState } from 'react'
import project1 from '../writer-gadget-1.png';

const Projects = () => {
  
  return (
    <section id="projects" >
      <div className="section-content">
        <h2>Projects</h2>
        <p>Write a brief introduction about yourself here.</p>

        <div className="projectTiles">
          <div className="tile">
            <img className="tileImg" src={project1} />
            <div className="tileContent">
              <h4>Writer Gadget Interface</h4>
              {/* <h5>Collaborating with the developers of Writer Gadget, a cross-platform writing application,
                in implementing an intuitive and user-friendly interface. </h5> */}
              <div className="projectSkill">
                <button className="skill">Figma</button>
                <button className="skill">Flutter</button>
              </div>
            </div>
          </div>
          <div className="tile">
            <img className="tileImg" src={project1} />
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