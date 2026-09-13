function renderBlock(block, index) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} className="text-[15px] leading-relaxed">
          {block.text}
        </p>
      );

    case "heading":
      const Tag = `h${block.level || 2}`;
      return (
        <Tag
          key={index}
          className="mt-10 mb-4 font-display font-bold text-surface-900 dark:text-surface-dark-50"
        >
          {block.text}
        </Tag>
      );

    case "code":
      return (
        <pre
          key={index}
          className="my-6 overflow-x-auto rounded-xl border border-surface-200 bg-surface-900 p-4 text-sm dark:border-surface-dark-500 dark:bg-surface-dark-800"
        >
          <code className="font-mono text-surface-100 dark:text-surface-dark-100">
            {block.code}
          </code>
        </pre>
      );

    case "list":
      return (
        <ul
          key={index}
          className="my-4 list-disc space-y-2 ps-6 text-[15px] leading-relaxed"
        >
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    case "image":
      return (
        <figure key={index} className="my-6">
          <img
            src={block.src}
            alt={block.alt || ""}
            className="w-full rounded-xl"
          />
          {block.caption && (
            <figcaption className="mt-2 text-center text-sm text-surface-500 dark:text-surface-dark-300">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "quote":
      return (
        <blockquote
          key={index}
          className="my-6 border-e-4 border-primary-500 py-1 ps-6 text-surface-600 italic dark:text-surface-dark-300"
        >
          {block.text}
        </blockquote>
      );

    case "divider":
      return (
        <hr
          key={index}
          className="my-8 border-surface-200 dark:border-surface-dark-600"
        />
      );

    default:
      return null;
  }
}

function ArticleRenderer({ content }) {
  return (
    <div className="prose-custom space-y-6" dir="rtl">
      {content.map((block, index) => renderBlock(block, index))}
    </div>
  );
}

export default ArticleRenderer;
