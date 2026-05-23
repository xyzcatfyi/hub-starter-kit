# Hub Starter Kit — Changelog
> A minimal, themed, password-protected Hub shell.
> For when you want a personal Hub but not the therapy bill that comes with building one from scratch.

---

## 0.3.0 — 23-05-2026
### Added
- Homepage (`Home.jsx`) — landing page after login
- MODULES registry pattern — one object in the array = new module everywhere
- Home route `/` — login now lands on Home, not Module One
- Module cards on homepage — auto-generated from MODULES registry

---

## 0.2.0 — 23-05-2026
### Changed
- Applied base monochrome theme — replaces Flexoki
- Removed Google Fonts — system-ui and ui-monospace only
- Updated xyzcat-ui package to 0.4.0
### Removed
- Vite boilerplate SVGs (react.svg, vite.svg)

---

## 0.1.0 — 21-05-2026
### Added
- Vite + React scaffold
- xyzcat-ui installed as package dependency
- Password gate (Login.jsx) via `VITE_HUB_PASSWORD` env var
- Nav with ThemeToggle — Hub shell owns theme state
- Two placeholder modules (ModuleOne, ModuleTwo)
- Flexoki tokens applied via `data-theme` CSS variables
- Outfit + DM Mono typography