//Here is my code, I want the background of the navigation component to span the full height of the screen

import { useRef } from 'react'

import menu1 from '../button-menu-2.svg';
import logo from '../icon-logo.svg';

const Navigation = () => {
    const navRef = useRef(); 
    const showNavBar = () => {
      navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <>
        <section >
          <nav ref={navRef} id="navigation" >
                <img href="#home" src={logo} />
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#contact">Contact</a>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                  <img src={menu1} />
                </button>
          </nav>
          <button className="nav-btn" onClick={showNavBar}>
            <img className="tileImg" src={menu1} />
          </button>

        </section>
        </>
      );
    };

export default Navigation;

