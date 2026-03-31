import React from "react";
import { assets } from "../../assets/assets";
import "./home.css";
import HomeSocial from "../Socials/Socials";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "motion/react";
import { itemMotion, sectionContentMotion, sectionMotion } from "../../utils/sectionMotion";

function Home() {
  return (
    <motion.section className="home" id="home" {...sectionMotion}>
      <motion.div
        className="container home-container"
        variants={sectionContentMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="home-content" variants={itemMotion}>
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
            <a href={assets.cv} className="btn btn-primary" download>
              Download CV
            </a>
            <a href="#projects" className="btn">
              View Projects
            </a>
          </div>
        </motion.div>

        <motion.div className="image" variants={itemMotion}>
          <div className="image-card">
            <img src={assets.myphoto} alt="Karim Mahmoud Safan portrait" />
          </div>
          <HomeSocial />
        </motion.div>

        <a href="#about" className="scroll-down">
          <FaArrowDown />
        </a>
      </motion.div>
    </motion.section>
  );
}

export default Home;
