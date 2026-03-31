import SectionTitle from "../SectionTitle/SectionTitle";
import { certificationsData } from "./certificationsData";
import "./certifications.css";
import { motion } from "motion/react";
import { itemMotion, sectionContentMotion, sectionMotion } from "../../utils/sectionMotion";

function Certifications() {
  return (
    <motion.section id="certifications" className="certification" {...sectionMotion}>
      <SectionTitle subtitle="My Achievements" title="Certifications" />

      <motion.div
        className="container container-certification"
        variants={sectionContentMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {certificationsData.map((cert) => (
          <motion.article className="cert-card" key={cert.id} variants={itemMotion}>
            <div className="cert-image">
              <img src={cert.image} alt={cert.title} />
            </div>

            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            <small>{cert.year}</small>

            <a href={cert.link} target="_blank" rel="noreferrer">
              View Certificate
            </a>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Certifications;
