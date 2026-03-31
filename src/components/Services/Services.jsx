import SectionTitle from "../SectionTitle/SectionTitle";
import "./services.css";
import { servicesData } from "./servicesData";
import { motion } from "motion/react";
import { itemMotion, sectionContentMotion, sectionMotion } from "../../utils/sectionMotion";

function Services() {
  return (
    <motion.section id="services" className="services" {...sectionMotion}>
      <SectionTitle title="Services" />
      <motion.div
        className="container container-services"
        variants={sectionContentMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {servicesData.map((service) => {
          const Icon = service.icon;

          return (
            <motion.div key={service.id} variants={itemMotion}>
              <Icon />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}

export default Services;
