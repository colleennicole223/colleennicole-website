import React from 'react'
import writergadgetHF from '/public/images/wg-recent-pages.png';
import writergadgetP from '/public/images/wg-draft-pages.png';
import link from '/public/icon-link-1.svg';
import close1 from '/public/button-close-1.svg';
import { HashLink } from 'react-router-hash-link';

const WriterGadget = () => {

  
  return (
    <>
        
        <section id="writerGadget">
          
          <div className="section-content">

            <div className='closeComponent'>
              <HashLink smooth to='/#projects' > 
                <img className="symbolClose" src={close1} /> 
              </HashLink>
            </div>

            <h1>Writer Gadget </h1>
            <p>
            Actively creating prototypes and high-fidelity visuals on the front end of Writers Gadget – a responsive application designed to plan, organize, and track story ideas. Utilizing <span className="highlight"> Figma </span>  to create an intuitive and user-friendly interface for this functional application.
            </p>
            <h2>Prototyping</h2>
            <p>
            Conducted an iterative brainstorming process with the developers and users of the existing application. Identified upcoming features and drafted a user flow for the reworked application. 
            </p>
            <p>
            The challenge of this stage was finding ways to display information while maintaining a minimal interface. It was crucial to ensure that the interface did not distract or hinder the user's creative process. 
            </p>
            <img className="wgProtoImage" src={writergadgetP} />
            
            <h2>High Fidelity Prototype</h2>
            <p>
            Actively developing high-fidelity prototypes to provide a more realistic representation of the final product. I am in the early stage of this process and am excited to share some of the revised user flow soon. Here are some of the reworked pages next to the original application. 
            </p>
              <a className="link" href="https://www.figma.com/proto/gHQHCu02ChysNPOCDqwj84/App-UI?page-id=96%3A542&node-id=96-543&viewport=243%2C493%2C0.36&t=vdvMgBNv9s1NqhL3-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=96%3A543" target="_blank" rel="noopener noreferrer">
                  <img  className="symbolLink" src={link} />
                  <h5 className='highlight'>Figma Preview</h5>
                </a>
            <img className="wgHighImage" src={writergadgetHF} />
            
            <h2>Upcoming</h2>
            <p>
            There is much more to be done and I look forward to my ongoing collaboration with Writer Gadget. Moving forward, the priority will be expanding and refining the high-fidelity prototypes in preparation for a usability test with local writers.
            </p>

              <HashLink to='/#projects' > 
                <button className="linkSection">Back to Projects</button>
              </HashLink>

          </div>
          
        </section>
    </>
  )
}

export default WriterGadget