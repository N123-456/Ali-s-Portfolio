import React from "react";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Experience from "../Pages/Experience";
import Projects from "../Pages/Projects";
import ContactUs from "../Pages/ContactUs";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header className="header">
        <h1>Ali Haq</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
