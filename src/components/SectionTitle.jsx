import Reveal from "./Reveal";

function SectionTitle({ subtitle, title }) {
  return (
    <Reveal>
      <div className="mb-12 text-center">
        {subtitle && (
          <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-primary-600 dark:text-primary-400">
            {subtitle}
          </span>
        )}
        <h2 className="font-display text-3xl font-bold tracking-tight text-surface-900 dark:text-surface-dark-50 sm:text-4xl">
          {title}
        </h2>
      </div>
    </Reveal>
  );
}

export default SectionTitle;
