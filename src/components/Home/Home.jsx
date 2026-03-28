import React from "react";
import { assets } from "../../assets/assets";
import "./home.css";
import HomeSocial from "./HomeSocial";
import { FaArrowDown } from "react-icons/fa";

function Home() {
  return (
    <section className="home" id="home">
      <div className="container home-container">
        <div className="home-content">
          <span className="home-eyebrow">Hello, I&apos;m</span>
          <h1>Karim Mahmoud Safan</h1>
          <h4 className="home-role">Frontend Developer</h4>
          <p className="home-description text-light">
            I build responsive, modern web experiences with a clean eye for
            layout, motion, and usability.
          </p>

          <div className="home-highlights">
            <span>React</span>
            <span>JavaScript</span>
            <span>UI Focused</span>
          </div>

          <div className="buttons">
            <a href="#contact" className="btn btn-primary">
              Let&apos;s Talk
            </a>
            <a href="#projects" className="btn">
              View Projects
            </a>
          </div>
        </div>

        <div className="image">
          <div className="image-card">
            <img src={assets.myphoto} alt="Karim Mahmoud Safan portrait" />
          </div>
          <HomeSocial />
        </div>

        <a href="#about" className="scroll-down">
          <FaArrowDown />
        </a>
      </div>
    </section>
  );
}

export default Home;
