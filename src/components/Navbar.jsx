import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../context/ThemeContext";
import {
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiTool,
  FiCode,
  FiFolder,
  FiAward,
  FiMail,
} from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#home", icon: FiHome },
  { label: "About", href: "#about", icon: FiUser },
  { label: "Services", href: "#services", icon: FiTool },
  { label: "Skills", href: "#skills", icon: FiCode },
  { label: "Projects", href: "#projects", icon: FiFolder },
  { label: "Certifications", href: "#certifications", icon: FiAward },
  { label: "Contact", href: "#contact", icon: FiMail },
];

const mobileMenuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleEscape = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileOpen]);

  return (
    <nav className="sticky top-0 z-50 border-b border-surface-200 bg-surface-50/85 backdrop-blur-lg dark:border-surface-dark-500/20 dark:bg-surface-dark-900/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a
          href="#home"
          className="font-display text-xl font-bold text-surface-900 dark:text-surface-dark-50"
        >
          KS
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-surface-700 transition-colors hover:bg-surface-200 hover:text-surface-900 dark:text-surface-dark-200 dark:hover:bg-surface-dark-500 dark:hover:text-surface-dark-50"
                >
                  <Icon size={14} />
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full text-surface-600 transition-colors hover:bg-surface-200 dark:text-surface-dark-200 dark:hover:bg-surface-dark-500"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-surface-600 transition-colors hover:bg-surface-200 dark:text-surface-dark-200 dark:hover:bg-surface-dark-500 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
            onClick={() => setMobileOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
        {mobileOpen && (
          <motion.div
            className="relative z-50 overflow-hidden border-t border-surface-200 bg-surface-50 px-4 dark:border-surface-dark-500 dark:bg-surface-dark-900 md:hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="flex flex-col gap-1 pb-4 pt-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-surface-700 transition-colors hover:bg-surface-200 dark:text-surface-dark-200 dark:hover:bg-surface-dark-500"
                    >
                      <Icon size={16} />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
