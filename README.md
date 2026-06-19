# hrudesh.in

Personal portfolio site for Hrudesh Lenka, built with React and Vite.

Live at [hrudesh.in](https://hrudesh.in).

## Tech stack

- React 18
- Vite
- Plain CSS with custom properties for theming (light/dark, default dark)

## Getting started

```bash
npm install
npm run dev
```

Opens the dev server at the port Vite assigns (printed in the terminal).

## Available scripts

### `npm run dev` / `npm start`

Starts the Vite dev server with hot module replacement.

### `npm run build`

Builds the app for production into the `dist/` folder.

### `npm run preview`

Serves the production build from `dist/` locally, for a final check before deploying.

### `npm run deploy`

Builds the app and publishes the `dist/` folder to the `master` branch via `gh-pages`, which GitHub Pages serves at the custom domain configured in `CNAME`.

## Project structure

```
src/
  components/
    body/        # page sections: about, projects, skills, education, work, contact
    header/       # nav (desktop + mobile) and theme toggle
    footer/
    common/       # shared UI: badge, separator, social-contact, theme-toggle
    data/         # content data files (projects, skills, work, education, etc.)
  styles/
    theme.css     # CSS variable design tokens, light/dark theme definitions
```
