# Hub Starter Kit — README
---

A minimal, themed, password-protected personal Hub shell.
Clone it, rename it, plug in your modules, and try not to cry.

> [!NOTE]
> - Built with Vite + React
> - Themed with [Flexoki](https://stephango.com/flexoki) via [xyzcat-ui](https://github.com/xyzcatfyi/xyzcat-ui) 
> - Password-protected and yours

---


### What's in it?
---
- Password gate via environment variable
- Flexoki dark/light theme — Hub shell owns theme state, passes to modules as props
- Nav with `ThemeToggle`
- Two placeholder modules ready to replace
- Outfit + DM Mono typography
- Cloudflare Pages ready

---


### How to use this template
---

#### 1. Clone the repo
```bash
git clone https://github.com/xyzcatfyi/hub-starter-kit.git my-hub
```

```bash
cd my-hub
```


#### 2. Install dependencies
```bash
npm install
```


#### 3. Set your password
Copy `.env.example` to `.env.local` and set your password:
```bash
cp .env.example .env.local
```

Then edit `.env.local`:
```
VITE_HUB_PASSWORD=yourpassword
```


#### 4. Run locally
```bash
npm run dev
```


#### 5. Add a module
1. Duplicate `src/pages/ModuleOne.jsx` and rename it 
2. Add a `NavLink` in `src/components/Nav.jsx` 
3. Add a `Route` in `src/App.jsx` 


---

### Deploy to Cloudflare Pages

1. Push your repo to GitHub 
2. Connect it in the [Cloudflare Pages dashboard](https://dash.cloudflare.com) 
3. Build settings:
	- **Framework preset:** Vite
	- **Build command:** `npm run build` 
	- **Build output directory:** `dist` 
4. Add your environment variable:
	- `VITE_HUB_PASSWORD` → your password


---

### Tech stack

|               |                                                            |
| ------------- | ---------------------------------------------------------- |
| Framework     | Vite + React                                               |
| Routing       | React Router v6                                            |
| Design system | [xyzcat-ui](https://github.com/xyzcatfyi/xyzcat-ui)        |
| Colours       | [Flexoki](https://stephango.com/flexoki) — Steph Ango, MIT |
| Typography    | Outfit + DM Mono                                           |
| Hosting       | Cloudflare Pages                                           |


---

*Part of the [xyzcat ecosystem](https://xyzcat.fyi).*

---