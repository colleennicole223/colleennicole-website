import React from 'react'
import { HashLink } from 'react-router-hash-link';


const About = () => {
  
  return (
    <section id="about"> 
        <div className="section-content">
            <div className="aboutContent">
            <h2>About Me</h2>
            <p>
            Hello, my name is Colleen! Some words that describe me are: problem solver, quite friendly, and very organized. While I am an engineer, I have a knack for design and love when a product balances form and function. I am starting a
            <span className="highlight"> Master of Computer Science </span> 
            in the fall of 2024, specializing in human-computer interaction. 
            </p>
            <p>
            Outside of the professional world, I enjoy outdoor activities with my dogs, digital art, 3D modeling, and video games. Thank you for taking the time to explore my portfolio. Do you have an opportunity in mind or just want to say hi? 
            </p>
            <HashLink smooth to='/#contact' > 
              <button className="linkSection">Contact Me</button>
            </HashLink>
        </div>
      </div>
    </section>
  )
}

export default About