# React Projects Collection

A collection of small, self-contained React apps (counter, calculator, currency
converter, password generator, to-do list, NASA APOD viewer and more) rendered
through a single shell with routing.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)
![Biome](https://img.shields.io/badge/Biome-2-60A5FA?logo=biome&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Tech stack

| Tool           | Version | Notes                                                            |
| -------------- | ------- | ---------------------------------------------------------------- |
| React          | 19.3    | Modern JSX transform, `StrictMode`, document metadata hoisting    |
| Vite           | 8.3     | Rolldown powered build, `@vitejs/plugin-react` 6                  |
| Tailwind CSS   | 4.3     | CSS-first config (`@theme` in `src/index.css`), no JS config file |
| React Router   | 7.18    | `HashRouter` + `Routes`/`Route`                                   |
| Biome          | 2.5     | Linter + formatter + import sorting (replaces ESLint/Prettier)    |
| mathjs         | 15.2    | Calculator engine, imported through the tree-shakable `/number`   |
| uuid           | 14      | To-do ids                                                         |
| react-icons    | 5.7     | Icon set                                                          |
| swapy          | 1.0     | Drag and drop for the to-do list                                  |
| pnpm           | 12      | Pinned through the `packageManager` field                         |

## Requirements

- **Node.js** `^20.19.0 || >=22.12.0` (see `.nvmrc`, Node 22 LTS is used in CI and Docker)
- **pnpm 12** — enable it once with `corepack enable` (Corepack ships with Node and
  installs the exact version pinned in `package.json`)

## Getting started

```bash
git clone https://github.com/AnshRoshan/React-Projects.git
cd React-Projects

corepack enable        # makes the pinned pnpm version available
pnpm install

cp .env.example .env   # optional, only needed for the NASA API key
pnpm dev               # http://localhost:3000
```

## Scripts

| Script            | Description                                             |
| ----------------- | ------------------------------------------------------- |
| `pnpm dev`        | Start the Vite dev server on port 3000 with HMR         |
| `pnpm build`      | Production build into `dist/`                           |
| `pnpm preview`    | Serve the production build on port 4173                 |
| `pnpm lint`       | Run Biome and write safe/unsafe fixes (`src/`)          |
| `pnpm lint:ci`    | Run Biome in read-only mode — used by the CI workflow   |
| `pnpm format`     | Format `src/` with Biome                                |
| `pnpm clean`      | Remove `dist/` and the Vite cache                       |

## Environment variables

Only Vite variables (prefixed with `VITE_`) reach the browser. Copy
`.env.example` to `.env` and adjust:

| Variable            | Default  | Description                                                                  |
| ------------------- | -------- | ---------------------------------------------------------------------------- |
| `VITE_NASA_API_KEY` | `DEMO_KEY` | Key for [api.nasa.gov](https://api.nasa.gov). `DEMO_KEY` is enough for light use |
| `VITE_BASE`         | –        | Overrides the build base path (defaults to `/React-Projects/` for `pnpm build`) |

## Projects

Every project lives in `src/projects/` and is registered as a route in
`src/App.jsx`. Routes are lazily loaded, so each app is only downloaded when it
is opened.

| Route          | Project            | Source                                  |
| -------------- | ------------------ | --------------------------------------- |
| `/`            | Project gallery    | `src/pages/Project.jsx`                 |
| `/counter`     | Counter            | `src/projects/Counter.jsx`              |
| `/passgen`     | Password generator | `src/projects/PassGen.jsx`              |
| `/currency`    | Currency converter | `src/projects/Currency.jsx`             |
| `/accordion`   | Accordion          | `src/projects/Accordion.jsx`            |
| `/calculator`  | Calculator         | `src/projects/Calculator.jsx`           |
| `/color`       | Color generator    | `src/projects/Color.jsx`                |
| `/todo`        | To-do list         | `src/projects/Todo/`                    |
| `/nasa`        | NASA APOD viewer   | `src/projects/NASA/`                    |
| `/fit`         | Fitness app        | `src/projects/Fitness/`                 |
| `/nike`        | Nike landing page  | `src/projects/NikeLanding.jsx`          |
| `/discord`     | Discord layout     | `src/projects/Discord.jsx`              |
| `/invoice`     | Invoice form       | `src/projects/Invoice/`                 |
| `/quiz`        | Quiz (placeholder) | `src/projects/Quiz.jsx`                 |
| `/about`       | About              | `src/pages/About.jsx`                   |
| `/contact`     | Contact            | `src/pages/Contact.jsx`                 |
| `*`            | 404 page           | `src/pages/ErrorPage.jsx`               |

## Project structure

```
.
├── .github/
│   ├── dependabot.yml          # weekly dependency updates
│   └── workflows/
│       ├── ci.yml              # lint + build on every PR
│       ├── deploy-pages.yml    # GitHub Pages deployment
│       └── docker-publish.yml  # multi-arch image published to GHCR
├── public/                     # static files served as-is
├── src/
│   ├── assets/                 # images imported by the components
│   ├── components/             # shared UI (Navbar, Footer, Card, InputBox)
│   ├── config/                 # layout experiments (Scaffolding, Text)
│   ├── hooks/                  # custom hooks (useCurrencyInfo)
│   ├── pages/                  # routed pages
│   ├── projects/               # one folder/file per mini app
│   ├── util/                   # project metadata used by the gallery
│   ├── App.jsx                 # route table (lazy loaded)
│   ├── index.css               # Tailwind import + theme tokens
│   └── main.jsx                # React root + HashRouter
├── biome.json                  # lint/format configuration
├── Dockerfile / Dockerfile.dev # production image / dev container
├── nginx.conf                  # SPA + caching config for the image
└── vite.config.js              # Vite config (base path, alias, ports)
```

## Theming

Colors are exposed as RGB channels in `src/index.css` (`:root` for the light
theme, `.dark` for the dark theme) and hooked into Tailwind with `@theme`, which
generates the `bg-primary`, `text-text`, `bg-background` … utilities. The
navbar's theme toggle flips the `dark` class on `<html>` and remembers the
choice in `localStorage`.

## Deployment

### GitHub Pages

Pushing to `main` triggers `.github/workflows/deploy-pages.yml`, which installs
with pnpm, builds with `pnpm build` (base path `/React-Projects/`) and publishes
`dist/` to GitHub Pages. `HashRouter` is used so deep links such as
`#/calculator` work without any server-side rewrite rules.

### Docker

```bash
docker build -t react-projects .
docker run -p 8080:80 react-projects   # http://localhost:8080
```

The image is a multi-stage build (Node 22 → nginx alpine) served from the domain
root and published to GHCR on every push to `main`:
`ghcr.io/anshroshan/react-project-ghcr:latest`.

For local development inside a container use `Dockerfile.dev`, which runs the
Vite dev server on port 3000.

## Contributing

Contributions are welcome — please read [CONTRIBUTING.md](CONTRIBUTING.md) and the
[Code of Conduct](CODE_OF_CONDUCT.md) first. Run `pnpm lint` and `pnpm build`
before opening a pull request; CI runs the same checks.

## License

Released under the [MIT License](LICENSE).
