# AGENTS.md

## Project

Single-page React 19 portfolio site built with Vite 7. Styled with Tailwind CSS v4. Dark/light theme toggle via `localStorage`. No TypeScript.

## Commands

```bash
npm run dev        # Vite dev server
npm run build      # Production build -> dist/
npm run preview    # Preview prod build locally
npm run lint       # ESLint (flat config)
```

**No test runner, no typecheck, no formatter configured.**

## Architecture

```
src/
  main.jsx                           Entry point (StrictMode + createRoot)
  App.jsx                            Composes all sections, mounts <Toaster> + <ThemeProvider>
  index.css                          Tailwind imports + custom theme tokens (fonts, colors)
  context/
    ThemeContext.jsx                  Dark/light toggle, localStorage persistence
  data/
    skills.js                        Skill content data (imports own SVGs)
    certifications.js                Certification content data (imports own PNGs)
    projects.js                      Project content data (imports own PNGs)
    # services data is inlined in Services.jsx
    # contact data is inlined in Contact.jsx
  content/
    articles/                        Markdown article files with YAML frontmatter
  assets/
    my_photo.jpg                     Profile photo
    skills/                          Skill icon SVGs
    certificates/                    Certificate PNGs
    projects/                        Project screenshot PNGs
  components/
    Home.jsx                         Hero section
    About.jsx                        About section with card stats
    Services.jsx                     Services section
    Skills.jsx                       Skills section
    Projects.jsx                     Projects section
    Certifications.jsx               Certifications with lightbox + Show More
    Contact.jsx                      Contact form (Web3Forms API, key from .env)
    SectionTitle.jsx                 Reusable section heading
    Socials.jsx                      Social icon links
    Navbar.jsx                       Sticky nav with anchor links + theme toggle + mobile menu
    Footer.jsx                       Site footer
    articles/
      Articles.jsx                   Articles listing page (grid of ArticleCards, Show More)
      ArticleCard.jsx                Individual card component for the listing
      ArticleDetail.jsx              Single article view (full content rendering + prev/next nav)
  utils/
    articleRenderer.jsx              Markdown renderer using react-markdown + remark-gfm
    articles.js                      Loads .md files via import.meta.glob, parses frontmatter
```

## Conventions

- **Data pattern**: Content data lives in `src/data/`. Each data file imports its own images directly (no centralized barrel export). To add a new item, edit only the relevant data file.
- **CSS**: Tailwind v4 via `@tailwindcss/vite`. Custom theme tokens in `index.css` `@theme` block. Dark mode via `.dark` class on `<html>` with `@custom-variant dark`. Use `dark:` prefix for dark variants.
- **Fonts**: Space Grotesk (`font-display`) for headings, Outfit (`font-body`) for body text.
- **Colors**: `primary-*` (blue), `surface-*` (light grays), `surface-dark-*` (dark grays). Accent is `primary-600` light / `primary-400` dark.
- **Section IDs**: `#home`, `#about`, `#services`, `#skills`, `#projects`, `#certifications`, `#contact` — used by Navbar anchor links.
- **Icons**: `react-icons` throughout. Import specific icons (e.g., `FaGithub`, `FiSun`).
- **Theme**: `useTheme()` hook from `src/context/ThemeContext.jsx` provides `{ theme, toggleTheme }`.
- **No TypeScript**: All files are `.js`/`.jsx`.

## Known Issues

- Some project demo/GitHub links are placeholders (`#`).
- Deployment target is `dist/` (Vite default). Works with Vercel/Netlify zero-config.
