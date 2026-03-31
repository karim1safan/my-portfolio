import SectionTitle from "../SectionTitle/SectionTitle";
import "./skills.css";
import { skills } from "./skills";
import { motion } from "motion/react";
import { itemMotion, sectionContentMotion, sectionMotion } from "../../utils/sectionMotion";

function Skills() {
  return (
    <motion.section id="skills" className="skills-section" {...sectionMotion}>
      <SectionTitle subtitle="What Skills I Have" title="My Skills" />

      <motion.div
        className="container container-skills"
        variants={sectionContentMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill) => (
          <motion.article className="skill-card" key={skill.id} variants={itemMotion}>
            <div className="icon">
              <img src={skill.icon} alt={skill.title} />
            </div>
            <div className="content">
              <h4>{skill.title}</h4>
              <p className="text-light">{skill.desc}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Skills;
