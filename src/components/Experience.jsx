import { useState } from 'react'
import link from '/public/icon-link-1.svg';
import up from '/public/icon-up-1.svg';
import down from '/public/icon-down-1.svg';
import resume from '/public/documents/cFulton.pdf';

const Experience = () => {

  // 🚨 track state which experience is currently opened 
  const [experienceIndex, setExperienceIndex] = useState(null);

  const experiences = [
    {
      title: "Georgia Institute of Technology",
      role: "M.S. Computer Science with a focus in Human-Computer Interactions",
      year: "Fall 2024 - 2028",
      summary: "Summary: Taking CS 6310: Software Architecture and Design where I am learning the principles involved with the analysis and design of large software systems 🔧",
      info: [""],
      link: "https://catalog.gatech.edu/programs/computer-science-ms/",
    },
    {
      title: "Independent Contractor",
      role: "Product Design Engineer",
      year: "2023 - 2024",
      summary: "Summary: assisted an engineering company consisting of five people in the design and submission of a new product under rigorous deadlines ⏰",
      info: [ 
        "Redesigned a detachable sheet metal mechanism for an electric agricultural vehicle, enhancing its ability to withstand high loads and enabling autonomous pick-up and relocation",
        "Conducted in-depth kinematic linkage studies of multiple pneumatic actuators using Matlab, ensuring compliance with estimated load",
        "Optimized sheet metal geometry and thickness, achieving cost reduction while maintaining structural integrity ",
        "Created a detailed bill of materials, updated CAD models, and finalized drawing packages for the production of an off-road vehicle",
      ],
    },
    {
      title: "DEKA Research & Development",
      role: "Mechanical Engineer, Product Lead",
      year: "2021 - 2023",
      summary: "Summary: product lead in the development of a medical device subsystem; addressed critical design flaws, reduced assembly time by 49%, and conducted test cases vital for FDA submission ⚕️",
      info: [ 
              "Managed workstream as Lead Engineer for one of the three subsystems of a disposable medical device",
              "Created CAD packages consisting of over 300 components and prepared models for both additive and subtractive manufacturing",
              "Cut subsystem assembly time in half by implementing five clean room fixtures",
              "Designed forty-two test case reports to resolve design failures, define system requirements, and evaluate design performance regarding ISO standards",
              "Managed the workflow of four interns, ensuring their contributions met project milestones while supporting their individual goals",
              "Founded a companywide group that serves as a platform to discuss professional development and foster mentorship for entry-level engineers & managers",
            ],
      link: "https://www.dekaresearch.com/"
    },
    {
      title: "Rose-Hulman Institute of Technology",
      role: "B.S. Mechanical Engineering with a minor in Robotics Engineering",
      year: "2017 - 2021",
      summary: "Summary: my experience at Rose involved rigorous coursework, hands-on projects, and many late-night study sessions. I studied subjects across mechanisms, thermodynamics, control theory, and automation. For my capstone project, I collaborated with faculty & a small team to develop an apparatus to collect precise measurements within a wind tunnel 📖",
      info: [""],
      link: "https://www.rose-hulman.edu/"
    },
    {
      title: "FIRST Robotics",
      role: "Alumni and Mentor",
      year: "2011 - Present",
      summary: "Summary: FIRST Robotics is an international high school robotics competition that aims to inspire students to pursue STEM careers 🤖",
      info: [
        "Actively volunteer at local competitions and occasionally mentor students from across the U.S.",
        "President and mechanical lead of a competitive high school robotics team consisting of up to 25 members",
        "Awarded Deans List Finalist four times for exemplary leadership in both FIRST Robotics Competition (FRC) and FIRST Tech Challenge (FTC)",
        "Led team to FIRST World Championships during the 2014 and 2017 season",
      ],
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
          Welcome to my career journey, I am
          <span className="highlight"> actively searching for a full-time role </span>
          – could it be with you?
        </p>

        {/* <a href={resume} download="cFulton.pdf"><button className="linkSection">Resume</button></a> */}

        <div>
            {experiences.map((experience, index) => (

                <div key={index} className="experienceTiles">
                    
                    <div onClick={() => handleExperience(index)}>
                      <div className={experienceIndex === index ? "experienceContainerSelected" : "experienceContainer"}>
                        <div className="experienceHeader">
                          <h4 className='experienceTopRow'>
                              {experience.title}
                              <img className={experienceIndex === index ? "symbolDown" : "symbolUp"} src={experienceIndex === index ? down : up}/>
                          </h4>
                          <h5>{experience.role}</h5>
                          <h5>{experience.year}</h5>
                          
                        </div>
                        {experienceIndex === index &&  experience.summary != "" ? <h5 className="expandTile"><div className='highlight'>{experience.summary}</div></h5> : null}
                        {experienceIndex === index &&  experience.info != "" ? (<div className='expandTile'>{experience.info.map((info, idx) => (<h5 key={idx}>{info}</h5>))}</div>) : null}
                        {experienceIndex === index &&  experience.link != null ? (<a className="link" href={experience.link} target="_blank" rel="noopener noreferrer"><img  className="symbolLink" src={link} /><h5 className='highlight'>Website</h5></a>) : null}
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