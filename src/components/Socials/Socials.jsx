import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./socials.css";

import { motion } from "motion/react";

function HomeSocial() {
  return (
    <div className="socials">
      <motion.a href="#" target="_blank">
        <FaGithub />
      </motion.a>
      <a href="#" target="_blank">
        <FaLinkedin />
      </a>
    </div>
  );
}

export default HomeSocial;
