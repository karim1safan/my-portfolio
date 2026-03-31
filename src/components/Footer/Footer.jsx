import Socials from "../Socials/Socials";

import "./footer.css";

import { motion } from "motion/react";

function Footer() {
  const links = [
    "home",
    "about",
    "skills",
    "services",
    "projects",
    "certifications",
    "contact",
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <a href="#" className="footer-logo">
        Karim Safan
      </a>
      <ul className="links">
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link}`}>{link.toUpperCase()}</a>
          </li>
        ))}
      </ul>

      <Socials />

      <div className="footer-copyright">
        <small>
          &copy; {new Date().getFullYear()} <a href="#">Karim Safan</a> All
          Right Reserved
        </small>
      </div>
    </motion.footer>
  );
}

export default Footer;
