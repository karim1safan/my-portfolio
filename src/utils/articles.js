const modules = import.meta.glob("../content/articles/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function parseFrontmatter(raw) {
  const match = raw.match(/^\s*---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { meta: {}, content: raw };

  const yaml = match[1];
  const content = match[2].trim();
  const meta = {};

  for (const line of yaml.split("\n")) {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""));
    } else {
      value = value.replace(/^["']|["']$/g, "");
    }

    meta[key] = value;
  }

  return { meta, content };
}

export const articles = Object.values(modules)
  .map((raw) => {
    const { meta, content } = parseFrontmatter(raw);
    return { ...meta, content };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));
