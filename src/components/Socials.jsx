import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Socials() {
  return (
    <div className="flex justify-center gap-3">
      <a
        href="https://github.com/karim1safan"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-200 text-surface-600 transition-colors hover:bg-surface-100 hover:text-surface-900 dark:border-surface-dark-500 dark:text-surface-dark-300 dark:hover:bg-surface-dark-700 dark:hover:text-surface-dark-50"
        aria-label="GitHub"
      >
        <FaGithub size={18} />
      </a>
      <a
        href="https://linkedin.com/in/karimsafan"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-200 text-surface-600 transition-colors hover:bg-surface-100 hover:text-surface-900 dark:border-surface-dark-500 dark:text-surface-dark-300 dark:hover:bg-surface-dark-700 dark:hover:text-surface-dark-50"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={18} />
      </a>
      <a
        href="https://x.com/karim_safan11"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-200 text-surface-600 transition-colors hover:bg-surface-100 hover:text-surface-900 dark:border-surface-dark-500 dark:text-surface-dark-300 dark:hover:bg-surface-dark-700 dark:hover:text-surface-dark-50"
        aria-label="X (Twitter)"
      >
        <FaXTwitter size={18} />
      </a>
    </div>
  );
}

export default Socials;
