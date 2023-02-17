import React, { useState } from 'react'
import { FaAlignJustify, faAlignJustify } from 'react-icons/fa';
// import "./Navbar.css"

const Navbar = () => {

const [state, setState]=useState(true);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
          <div className="navbar__left-logo">
            <img src="./image/ss.png" alt="logo"/>
          </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
           
            </ul>
            
          ) : (
          
              "" 
          )
         
          }
         
        </div>
       
      </div>
      
      <div className="toggle" 
       
      onClick={() => setState(!state)}>
            <FaAlignJustify />
      </div>
    </nav>
  )
}

export default Navbar