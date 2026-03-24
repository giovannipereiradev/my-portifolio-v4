# Portfolio v4

<div align="center">

<img src="portifolio-v4.png" alt="Portfólio v4" width="720" />

![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-Non--Commercial-red?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

</div>

[Para ler em Português, clique aqui!](README.pt-BR.md)

## About the Project

Personal portfolio built with **React 19** and **Vite**, styled with **Tailwind CSS 4** and animated with **Framer Motion**. The site features a minimalist design with monospace typography, light/dark theme switching, multilingual support (Portuguese/English), and interactive components such as a scroll-hijacked certification carousel, custom cursor, and per-letter name animation.

## Features

| Feature | Description |
|---|---|
| **Brutalist Design** | Minimalist aesthetic with IBM Plex Mono for headings, explicit borders, and asymmetric layouts. |
| **Light/Dark Theme** | Toggle in the navbar with `localStorage` persistence. |
| **Multilingual** | Full Portuguese and English support with global context and `localStorage` persistence. |
| **Certifications Carousel** | Scroll hijacking captures the scroll event and navigates between badges via Embla Carousel. Each badge links to Credly. |
| **Projects Section** | Cards with screenshot, tech stack, year, and links to live demo and GitHub repository. |
| **Custom Cursor** | Custom cursor animation replacing the browser's default pointer. |
| **Per-Letter Animation** | Name heading with individual letter color animation on hover. |
| **Smart Navbar** | Sticky with automatic active section highlighting via `IntersectionObserver`. |
| **Framer Motion Animations** | Smooth entrance transitions on all page sections. |
| **Responsive** | Mobile-adapted layout with `useMobile` hook and Tailwind breakpoints. |
| **Error Boundary** | React error handling component to prevent blank screen. |
| **Express Server** | `main.ts` serves the static build and redirects all routes to `index.html` (SPA). |

## Architecture

The app follows a clear separation between **client** (React/Vite) and **server** (Express). `client/src/App.tsx` sets up global providers (`ThemeProvider`, `LanguageProvider`, `TooltipProvider`, `ErrorBoundary`) and routing via **Wouter**. The main page (`Home.tsx`) composes all sections in sequence. Project data and translations are centralized in `lib/projects.ts` and `lib/i18n.ts`, decoupled from the visual components.

## Technologies Used

- **[React](https://react.dev/) `^19.2.1`** : main library for building the interface; uses modern hooks and functional components.
- **[Vite](https://vitejs.dev/) `^7.1.7`** : ultra-fast bundler and dev server with HMR; configured with React and Tailwind CSS plugins.
- **[TypeScript](https://www.typescriptlang.org/) `^5.6.3`** : static typing throughout the project, on both the client and the Express server.
- **[Tailwind CSS](https://tailwindcss.com/) `^4.1.14`** : CSS utilities; integrated as a Vite plugin (`@tailwindcss/vite`).
- **[Framer Motion](https://www.framer.com/motion/) `^12.23.22`** : declarative entrance, exit, and hover animations on all page components.
- **[Radix UI](https://www.radix-ui.com/)** : accessible UI primitives (tooltip, scroll-area, tabs, dialog, and 30+ other components).
- **[Embla Carousel React](https://www.embla-carousel.com/) `^8.6.0`** : certification slider carousel with programmatic control via API.
- **[Wouter](https://github.com/molefrog/wouter) `^3.3.5`** : lightweight client-side router; defines routes `/` (Home) and `*` (NotFound).
- **[Express](https://expressjs.com/) `^4.21.2`** : HTTP server for serving the static build in production on port `8080`.
- **[lucide-react](https://lucide.dev/)** : SVG icons as React components.

## Installation

Prerequisites:

- **Node.js** `>= 18.0.0`

```bash
git clone https://github.com/giovannipereiradev/my-portifolio-v4.git
cd my-portifolio-v4
npm install
```

## Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Starts the Vite dev server on port `5173` with HMR. |
| `pnpm build` | Generates the production build in the `dist/` folder. |
| `pnpm start` | Starts the Express server (`main.ts`) serving the build on port `8080`. |
| `pnpm preview` | Previews the production build locally via Vite. |
| `pnpm check` | Runs TypeScript type checking (`tsc --noEmit`). |
| `pnpm format` | Formats all files with Prettier. |

## Folder Structure

```
my-portifolio-v4/
│
├── main.ts                           # Express server : serves the static build
├── vite.config.ts                    # Vite configuration (plugins, alias @)
├── tsconfig.json                     # Root TypeScript config (for main.ts)
├── package.json
├── discloud.config                   # Deployment configuration (Discloud)
├── LICENSE
│
└── client/                           # React application
    ├── index.html                    # HTML template (IBM Plex fonts via Google Fonts)
    ├── tsconfig.json                 # Client TypeScript config
    │
    └── src/
        ├── main.tsx                  # Entry point : ReactDOM.createRoot
        ├── App.tsx                   # Global providers + routing (Wouter)
        ├── index.css                 # Global styles + CSS variables + Tailwind
        │
        ├── pages/
        │   ├── Home.tsx              # Main page : composes all sections
        │   └── NotFound.tsx          # 404 page
        │
        ├── components/
        │   ├── Navbar.tsx            # Sticky navigation with IntersectionObserver
        │   ├── HeroSection.tsx       # Opening section with animations and CTAs
        │   ├── AboutSection.tsx      # About section
        │   ├── CertificationsSection.tsx # Certifications carousel (scroll hijacking)
        │   ├── ProjectsSection.tsx   # Projects grid
        │   ├── ContactSection.tsx    # Contact section
        │   ├── Footer.tsx            # Footer
        │   ├── CustomCursor.tsx      # Custom animated cursor
        │   ├── LetterHover.tsx       # Per-letter color animation
        │   ├── ErrorBoundary.tsx     # React error boundary
        │   └── ui/                   # 57 Radix UI components
        │
        ├── contexts/
        │   ├── ThemeContext.tsx       # Light/dark theme context
        │   └── LanguageContext.tsx   # PT/EN language context
        │
        ├── hooks/
        │   ├── useMobile.tsx         # Detects mobile breakpoint
        │   ├── useComposition.ts     # Composition helper hook
        │   └── usePersistFn.ts       # Function reference persistence
        │
        └── lib/
            ├── i18n.ts               # PT and EN translations
            ├── projects.ts           # Project data and social links
            ├── animations.ts         # Reusable Framer Motion variants
            └── utils.ts              # General utilities (cn, etc.)
```

## How to Use

```bash
# Development
npm run dev

# Production build
npm run build

# Serve in production
npm start
```

**Adding a new project**

Edit `client/src/lib/projects.ts` and add a new object to the `projects` array:

```ts
{
  title: "Project Name",
  description: "Brief description.",
  image: "/images/my-project.png",
  tech: ["React", "TypeScript", "Node.js"],
  year: "2025",
  demo: "https://my-project.com",
  github: "https://github.com/user/my-project"
}
```

**Adding a new certification**

Place the badge image in `client/public/images/` and add the entry to the certifications array in `CertificationsSection.tsx`:

```ts
{
  name: "Certification Name",
  image: "/images/my-badge.png",
  link: "https://credly.com/my-badge"
}
```

**Adding a new translation**

Edit `client/src/lib/i18n.ts` and add the key to both the `pt` and `en` objects:

```ts
export const translations = {
  pt: {
    myKey: "My text in Portuguese",
  },
  en: {
    myKey: "My text in English",
  }
}
```

## License

Distributed under a custom non-commercial license. See the [LICENSE](LICENSE) file for more details.

<div align="center">
  Developed by <a href="https://giovannitavares.com">Giovanni Tavares</a>
</div>
