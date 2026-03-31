import React from "react";
import "./about.css";
import { GiAchievement } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { assets } from "../../assets/assets";
import SectionTitle from "../SectionTitle/SectionTitle";
import { motion } from "motion/react";
import { itemMotion, sectionContentMotion, sectionMotion } from "../../utils/sectionMotion";

function About() {
  const aboutContentData = [
    {
      id: 1,
      title: "Learning Journey",
      desc: "Continuously improving",
      icon: <GiAchievement />,
    },
    {
      id: 2,
      title: "Practice",
      desc: "Building real-world projects",
      icon: <FaPeopleGroup />,
    },
    {
      id: 3,
      title: "Projects",
      desc: "30+ completed projects",
      icon: <FaCode />,
    },
  ];

  return (
    <motion.section className="about" id="about" {...sectionMotion}>
      <SectionTitle subtitle="Get to Know" title="About Me" />

      <motion.div
        className="container about-container"
        variants={sectionContentMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="about-image" variants={itemMotion}>
          <div className="about-image-card">
            <img src={assets.me} alt="Karim working portrait" />
          </div>
        </motion.div>

        <motion.div className="about-content" variants={itemMotion}>
          <span className="about-tag">Creative Frontend Builder</span>

          <div className="about-cards">
            {aboutContentData.map((item) => (
              <div className="about-card" key={item.id}>
                <span className="about-card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </div>
            ))}
          </div>

          <p>
            I enjoy turning ideas into responsive interfaces that feel clear,
            smooth, and visually thoughtful. My focus is building websites that
            not only work well, but also create a strong first impression
            through layout, detail, and usability.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let&apos;s Start
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default About;
