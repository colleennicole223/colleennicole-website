import { useState, useEffect } from 'react'
import menu1 from '../button-menu-2.svg';
import logo from '../icon-logo.svg';
import close1 from '../button-close-1.svg';

const Navigation = () => {

    // 🚨 track state whether the nav bar is expanded or closed 
    const [navExpand, setExpandState] = useState(false);
    const expandNav = () => {
      setExpandState(!navExpand);
    }
    const closeNav = () => {
      setExpandState(false);
    }

    return (
        <>
        <section className="navigation">
          {/* 🔗 conditional class, if navExpand is true then nav-links expand otherwise nav-links is closed */}
          <img className='logo' src={logo} />
          <div className={`navLinks ${navExpand ? 'expand' : ''}`}>
                <a href="#home" onClick={closeNav}>Home</a>
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

