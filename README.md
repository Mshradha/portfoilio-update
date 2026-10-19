# Shradha Mishra — Portfolio

Personal portfolio built with Create React App (React 17, React Router 5) and plain CSS with design tokens.
Live at https://shradha-mishra-portfolio.vercel.app/

## Run locally

```bash
yarn install
yarn start      # http://localhost:3000
yarn test       # smoke tests
yarn build      # production build in /build
```

The scripts set `NODE_OPTIONS=--openssl-legacy-provider`, which CRA 4 needs on Node 17+.
On Windows, run them from Git Bash or WSL so the `export` in the scripts works.

## Editing content

All copy lives in `src/data/`, separate from the components:

| File | Contents |
| --- | --- |
| `site.js` | Name, email, social links, résumé link, nav items |
| `projects.js` | Case studies (also used for `/work/:slug` pages) and earlier builds |
| `experience.js` | Roles and education |
| `about.js` | Snapshot strip, working principles, recognition |
| `skills.js` | Skill groups and icons |

The résumé buttons open a shared Google Drive file (`resume` in `site.js`). Uploading a new version of
that file in Drive (Manage versions) updates the site without a deploy.

## Design system

- Tokens for both themes: `src/styles/tokens.css`. Components only use the semantic `--color-*` tokens.
- Shared typography, buttons and the scroll-reveal styles: `src/styles/base.css`.
- The theme is set before first paint by the inline script in `public/index.html`, then managed by
  `src/contexts/ThemeContext.js` (OS preference on first visit, saved choice afterwards).
- Animations respect `prefers-reduced-motion`, and content stays visible without JavaScript.

## Deploy

Vercel builds with `yarn build` and serves `/build`; client-side routes such as `/work/video-boilerplate`
fall back to `index.html`. `public/_redirects` does the same on Netlify.
