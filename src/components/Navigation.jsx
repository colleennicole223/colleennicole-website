import { useState } from 'react'
import menu1 from '../button-menu-2.svg';
import logo2 from '../icon-logo-2.svg';
import close1 from '../button-close-1.svg';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Navigation = () => {

    // 🚨 track state whether the nav bar is expanded or closed 
    const [navExpand, setExpandState] = useState(false);
    const expandNav = () => {
      setExpandState(!navExpand);
    }
    const closeNav = () => {
      setExpandState(false);
    }

    // 🟢 From GSAP: to hide nav bar when scrolling down 
    const showAnim = gsap.from('.navigation', { 
      yPercent: -150,
      paused: true,
      duration: 0.2
    }).progress(1);
    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
      }
    });

    return (
        <>
        <section className="navigation">
          {/* 🔗 conditional class, if navExpand is true then nav-links expand otherwise nav-links is closed */}
          <img className='logoNav' src={logo2} />
          <div className={`navLinks ${navExpand ? 'expand' : ''}`}>
                <a href="#home" onClick={closeNav}>Home</a>
                <a href="#about" onClick={closeNav}>About</a>
                <a href="#projects" onClick={closeNav}>Projects</a>
                <a href="#experience" onClick={closeNav}>Experience</a>
                <a href="#contact" onClick={closeNav}>Contact</a>
          </div>

          <button className="navBtn" onClick={expandNav}>
            {/* ❌ conditional class, shows either the menu button of the close button  */}
            <img src={navExpand ? close1 : menu1} />
          </button>
        </section>
        </>
      );
    };

export default Navigation;

