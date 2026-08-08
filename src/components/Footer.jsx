import { motion } from "motion/react";
import Socials from "./Socials";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="border-t border-surface-200 bg-surface-50 py-12 dark:border-surface-dark-500 dark:bg-surface-dark-900">
      <motion.div
        className="mx-auto max-w-6xl px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <a
          href="#home"
          className="mb-6 inline-block font-display text-xl font-bold text-surface-900 dark:text-surface-dark-50"
        >
          Karim Safan
        </a>

        <ul className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-surface-600 transition-colors hover:text-surface-900 dark:text-surface-dark-300 dark:hover:text-surface-dark-50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Socials />

        <div className="mt-6 text-center">
          <small className="text-xs text-surface-500 dark:text-surface-dark-300">
            &copy; {new Date().getFullYear()} Karim Safan. All rights reserved.
          </small>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
