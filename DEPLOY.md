# Deploy to GitHub Pages

Vite + TypeScript portfolio → **https://prathamesh-patekar.github.io/**

This repo is a **user site** (`username.github.io`). GitHub Pages must publish the **production `dist` build**, not the Vite source. Publishing `master` from `/(root)` serves `main.tsx` and the browser shows:

`Failed to load module script … MIME type of 'application/octet-stream'`

Use **GitHub Actions** (already in `.github/workflows/deploy.yml`). Do not set Pages to **Deploy from a branch → master / (root)**.

---

## 1. Install `gh-pages` (once)

From the `portfolio` folder:

```bash
npm install --save-dev gh-pages
```

Optional local deploy command (pushes `dist` to a `gh-pages` branch). For this repo name, **Actions is what actually goes live**.

---

## 2. `vite.config.ts`

`base` must be `/` for a user site:

```ts
import { copyFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'github-pages-spa',
      closeBundle() {
        copyFileSync('dist/index.html', 'dist/404.html')
      },
    },
  ],
  base: '/',
})
```

`public/.nojekyll` is required so GitHub does not treat the site as Jekyll.

---

## 3. `package.json` scripts

```json
{
  "name": "prathamesh-patekar.github.io",
  "homepage": "https://prathamesh-patekar.github.io",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

| Command | Use |
|---|---|
| `npm run dev` | Local only (`localhost:5173`) |
| `npm run build` | Production files in `dist/` |
| `npm run preview` | Check `dist` locally (`localhost:4173`) |
| `git push origin master` | **Live deploy** via Actions |
| `npm run deploy` | Pushes `dist` to `gh-pages` branch — not used for this user site |

---

## 4. Build locally (optional check)

```bash
cd "/var/www/html/peronsal/Porfolio website/portfolio"
npm run build
npm run preview
```

Confirm `dist/index.html` references `/assets/*.js`, **not** `/src/main.tsx`.

---

## 5. Deploy (new changes)

```bash
cd "/var/www/html/peronsal/Porfolio website/portfolio"

git add .
git status
git commit -m "Describe the change"
git push origin master
```

If HTTPS auth fails:

```bash
git push git@github.com:Prathamesh-Patekar/prathamesh-patekar.github.io.git master
```
---

## 6. Enable GitHub Pages (once)

1. Repo → **Settings → Pages**
2. **Source:** **GitHub Actions** (not “Deploy from a branch”)
3. **Actions** tab → wait for **Deploy GitHub Pages** (green)
4. Ignore red **pages build and deployment** — that is the old Jekyll/branch path

---

## 7. Final URL

**https://prathamesh-patekar.github.io/**

Hard-refresh after a green Actions run.
