# Poonam Kashide — Web Development Portfolio

A modern, fast, and fully responsive frontend portfolio built with React + Vite to showcase projects, landing pages, and performance-focused web work.

## Demo
Open index.html or run the dev server and visit http://localhost:5173 (Vite default).

## Highlights / Features
- Dynamic project rendering driven by a single configuration array (Projects component).
- Sticky, glassmorphism-style header with smooth hover animations and subtle glowing shadows.
- Fully responsive layout (desktop, tablet, mobile) with custom CSS.
- Fast developer experience and production builds via Vite.
- Small, dependency-light React app (no heavy UI frameworks).

## Tech stack
- Language(s): JavaScript, CSS, HTML
- Framework / runtime: React (Functional Components) + Vite
- Notable dev deps: @vitejs/plugin-react, eslint (with React plugins)

## Repository structure
Top-level:
```
index.html               # App entry HTML (loads /src/main.jsx)
package.json             # npm scripts and dependencies
vite.config.js           # Vite configuration (React plugin)
eslint.config.js         # ESLint configuration
.gitignore
package-lock.json
public/                  # Static assets used by index.html (favicons, manifest)
src/                     # Application source
```

src/ (key files)
```
src/main.jsx             # React entry — mounts <App />
src/App.jsx              # Root component (Header, Projects, Footer)
src/Header.jsx           # Sticky navigation / hero area (Header.css)
src/Projects.jsx         # Projects list + rendering logic (Projects.css)
src/Footer.jsx           # Footer component (Footer.css)
src/index.css, App.css   # Global and component styles
src/assets/              # Images & icons (hero.png, react.svg, vite.svg)
```

How it fits together:
- index.html loads the app and Vite serves /src/main.jsx.
- main.jsx mounts App which composes Header, Projects, and Footer.
- Projects.jsx maps a configuration array to project cards and alternates layout styles; styling is handled via component CSS files in src/.

## Getting started (development)
Prerequisites: Node.js (LTS recommended)

Install and run locally:
```bash
# clone repo
git clone https://github.com/mdmbypoonam/Web-Development-Portfolio.git
cd Web-Development-Portfolio

# install
npm install

# dev server
npm run dev

# build for production
npm run build

# preview production build locally
npm run preview
```

Scripts available (from package.json):
- npm run dev — start Vite dev server
- npm run build — produce optimized production build
- npm run preview — locally preview the production build
- npm run lint — run ESLint across the project

Entry point: src/main.jsx → App.jsx

## Deployment
This is ready for common static hosts:
- Vercel: point to the repository, set the build command to `npm run build` (or let Vercel auto-detect).
- Netlify: build command `npm run build`, publish `dist/`.
- GitHub Pages: build and deploy the `dist/` output (additional config or GitHub Action may be needed).

## Customization tips
- Projects data: update the array inside `src/Projects.jsx` to add/edit projects (title, description, images, links).
- Styling: modify the component CSS files (`src/*.css`) to tweak glassmorphism, colors, spacing, and animations.
- Favicons & manifest: update files in `public/` to change site icons and PWA metadata.

## Notes
- There is currently no LICENSE file in the repository — add a license if you plan to publish or share the code.
- The project is intentionally lightweight (no CSS frameworks) so styles are easy to customize.

## Contributing
- Found a bug or want to suggest a change? Open an issue.
- Fork, create a branch, and submit a pull request for code changes. Run lint and verify the dev server builds locally.

## Contact
- GitHub: https://github.com/mdmbypoonam
- Author: Poonam Kashide
