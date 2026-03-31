import SectionTitle from "../SectionTitle/SectionTitle";
import { projects } from "./projects";
import { motion } from "motion/react";
import { itemMotion, sectionContentMotion, sectionMotion } from "../../utils/sectionMotion";

import "./projects.css";

function Projects() {
  return (
    <motion.section
      id="projects"
      className="projects-section"
      {...sectionMotion}
    >
      <SectionTitle subtitle="My Recent Work" title="Projects" />

      <motion.div
        className="container projects-container"
        variants={sectionContentMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <motion.article className="project-item" key={project.id} variants={itemMotion}>
            <div className="project-item-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-item-content">
              <h3>{project.title}</h3>
              <p className="text-light">{project.desc}</p>

              <div className="techs">
                {project.tech.map((item) => (
                  <span key={item} className="tech-badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-buttons">
              <a
                href={project.github || "#"}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={project.live || "#"}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Projects;
