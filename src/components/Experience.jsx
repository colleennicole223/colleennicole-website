import { useState } from 'react'
import link from '../icon-link-1.svg';




const Experience = () => {

  // 🚨 track state which experience is currently opened 
  const [experienceIndex, setExperienceIndex] = useState(null);

  const experiences = [
    {
      title: "Georgia Institute of Technology",
      role: "M.S. Computer Science with a focus in Human-Computer Interactions",
      year: "Fall 2024 - 2028",
      info: [""],
      expand: 0,
      link: "https://catalog.gatech.edu/programs/computer-science-ms/",
    },
    {
      title: "Independent Contractor",
      role: "Mechanical Engineer",
      year: "2023 - 2024",
      info: [ 
        "Redesigned a detachable sheet metal mechanism for an electric agricultural vehicle, enhancing its ability to withstand high loads and enabling autonomous pick-up and relocation",
        "Conducted in-depth kinematic linkage studies of multiple pneumatic actuators using Matlab, ensuring compliance with estimated load",
        "Optimized sheet metal geometry and thickness, achieving cost reduction while maintaining structural integrity ",
        "Created a detailed bill of materials, updated CAD models, and finalized drawing packages for the production of an off-road vehicle",
      ],
      expand: 1,
    },
    {
      title: "DEKA Research & Development",
      role: "Mechanical Engineer",
      year: "2021 - 2023",
      info: [ 
              "Managed workstream as Lead Engineer for one of the three subsystems of a disposable medical device",
              "Created CAD packages consisting of over 300 components and prepared models for both additive and subtractive manufacturing",
              "Cut subsystem assembly time in half by implementing five clean room fixtures",
              "Designed forty-two test case reports to resolve design failures, define system requirements, and evaluate design performance regarding ISO standards",
              "Managed the workflow of four interns, ensuring their contributions met project milestones while supporting their individual goals",
              "Founded a companywide group that serves as a platform to discuss professional development and foster mentorship for entry-level engineers & managers",
            ],
      expand: 1,
      link: "https://www.dekaresearch.com/"
    },
    {
      title: "Rose-Hulman Institute of Technology",
      role: "B.S. Mechanical Engineering with a minor in Robotics Engineering",
      year: "2017 - 2021",
      info: [""],
      expand: 0,
      link: "https://www.rose-hulman.edu/"
    },
    {
      title: "FIRST Robotics",
      role: "Alumni and Mentor",
      year: "2011 - Present",
      info: [""],
      expand: 0,
      link: "https://www.firstinspires.org/robotics/frc"
    }
  ];

  const handleExperience = (index) => {
    setExperienceIndex(experienceIndex === index ? null : index);
  };


  return (
    <section id="experience">
      <div className="section-content">
        <h2>Professional Experience</h2>
        <p>
          Welcome to my career journey, where I've recently jumped from the world of mechanical engineering to the realm of computer science!
          <span className="highlight"> I'm on the lookout for the perfect full-time role to launch my career in software </span> 
          – could it be with you?
        </p>

        <div>
            {experiences.map((experience, index) => (

                <div key={index} className="experienceTiles">
                    
                    <div onClick={() => handleExperience(index)}>
                      <div className={experienceIndex === index ? "experienceContainerSelected" : "experienceContainer"}>
                        <div className="experienceHeader">
                          <h4>{experience.title}</h4>
                          <h5>{experience.role}</h5>
                          <h5>{experience.year}</h5>
                          {/* {experienceIndex === index ? '-' : '+'} */}
                        </div>
                        {/* {experienceIndex === index && <h5 className="highlight">{experience.info}</h5>} */}
                        {experienceIndex === index &&  experience.expand === 1 ? (<div className='expandTile'>{experience.info.map((info, idx) => (<h5 key={idx}>{info}</h5>))}</div>) : null}
                        {experienceIndex === index &&  experience.link != null ? (<a className="link" href={experience.link} target="_blank" rel="noopener noreferrer"><img  src={link} /><h5 className='highlight'>Website</h5></a>) : null}
                      </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </section>
  )
}

export default Experience