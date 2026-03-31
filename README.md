# Karim Mahmoud Safan Portfolio

A responsive personal portfolio website built with React and Vite to showcase projects, skills, certifications, and contact information in a clean single-page experience.

## Overview

This project is a frontend developer portfolio designed to present personal branding, recent work, technical skills, and achievements in a simple and modern layout. It includes scroll-triggered motion effects, project cards, certification highlights, and quick contact options.

## Features

- Hero section with introduction, role, highlights, and CV download
- About section with personal summary and profile cards
- Services section to present offered frontend work
- Skills section with technology cards
- Projects section with featured work
- Certifications section for achievements and credentials
- Contact section with direct contact methods and a form layout
- Scroll-based section reveal animations using `motion`

## Tech Stack

- React 19
- Vite
- Motion
- CSS
- Toaster 
- Web3forms

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd bukhari-hadith
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

## Project Structure

```text
src/
  assets/                Static images, icons, and CV
  components/            Portfolio sections and UI pieces
  utils/                 Shared animation configuration
  App.jsx                Main page composition
```

## Main Sections

- `Home`: personal introduction and quick actions
- `About`: short professional summary
- `Services`: frontend services overview
- `Skills`: core technologies and tools
- `Projects`: selected portfolio work
- `Certifications`: certificates and achievements
- `Contact`: social/contact links and message form

## Customization

You can easily make this portfolio your own by editing:

- `src/assets/assets.js` for images, CV, and asset references
- `src/components/Projects/projects.js` for project content
- `src/components/Certification/certificationsData.js` for certifications
- section component files inside `src/components/` for text and layout

## Notes

- Some project demo and GitHub links are still empty in the current data files and can be updated before publishing.
- The repository field in `package.json` is still a placeholder and should be replaced with the real GitHub URL.
- The lint script currently expects an ESLint flat config file, so ESLint setup may need to be completed before using `npm run lint`.

## Deployment

This project can be deployed easily on platforms such as:

- Vercel
- Netlify
- GitHub Pages

For Vercel or Netlify, the default build settings are:

- Build command: `npm run build`
- Output directory: `dist`

## Author

Karim Mahmoud Safan

Frontend Developer focused on building responsive and modern web interfaces.
