# Copilot Instructions — Potfolio 🔧

## Quick summary
- Single-page React app built with **Vite** (dev: `npm run dev`, build: `npm run build`, preview: `npm run preview`).
- App composes feature sections (Home, About, Projects, Skills, Contact) inside `src/App.jsx` instead of using client-side routing.
- Visual scroll animations are driven by an IntersectionObserver utility in `src/utils/scrollAnimations.js` and helper hook `src/hooks/useIntersectionObserver.js`.

## What to know before coding 💡
- Page/section structure: Add a new section by creating a component under `src/pages/*` and import and mount it in `src/App.jsx`. Use an `id` on the root element (e.g., `<section id="new" ...>`) to integrate with the existing anchor navigation.
- Navigation: `src/components/layout/Navbar.jsx` uses plain anchor links (`href="#id"`). Update `navLinks` there when adding/removing sections.
- Animations: Elements with classes like `section`, `card`, `fade-in-up`, `fade-in-left` are observed by `initScrollAnimations()` in `src/utils/scrollAnimations.js`. To animate a component add the corresponding class and ensure it's rendered into the DOM.
- Mobile menu: State for mobile nav is encapsulated in `src/hooks/useMobileMenu.js` (returns `{ isOpen, toggleMenu, closeMenu }`). Prefer using this hook for consistent behavior.

## Component & styling conventions 🔧
- Components are function components with default exports and `.jsx` files (e.g., `src/components/ui/ProjectCard.jsx`).
- Reusable components often accept `className` and `style` props and apply base classes (e.g., `.card`, `.project-card`, `.btn`, `.btn-primary`). Follow this pattern for composability.
- Inline styles are used for small layout tweaks; large styles live in component CSS files (e.g., `src/components/layout/Navbar.css`, `src/index.css`).

## Code patterns and examples ✅
- Add a new section that participates in animations:
  - File: `src/pages/NewSection/NewSection.jsx`
  - Root element: `<section id="new" className="section fade-in-up">...</section>`
  - Import & mount in `src/App.jsx` and add a nav link in `src/components/layout/Navbar.jsx`.

- Hook usage example (IntersectionObserver hook):
  - `const ref = useIntersectionObserver(entry => { if (entry.isIntersecting) doSomething(); });`
  - Attach `ref` to a DOM node: `<div ref={ref} className="card">...</div>`

## Build & developer workflows 🛠️
- Start dev server: `npm run dev` (Vite with HMR).
- Lint: `npm run lint` runs `eslint .`. Note the project uses `eslint.config.js` with a rule:
  - `'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }]` — React component names and UPPER_CASE constants are ignored by this rule.
- There is no test runner configured; add tests and scripts explicitly if needed.

## Integration & external dependencies 🔗
- Primary dependencies: `react`, `react-dom`, `vite`. Optional TypeScript types (`@types/*`) exist but the codebase is JS.
- No back-end API integrations are present; projects and content are static and configured via components/data in the front end.

## What an AI assistant should avoid or be mindful of ⚠️
- Do not assume client-side routing: the app uses anchored sections (update `Navbar.jsx` and `App.jsx` when adding sections).
- When adding animations, ensure classes match the ones used by `initScrollAnimations()` or use `useIntersectionObserver` directly.
- Keep component exports and filenames consistent (default export, `.jsx`).

---

If you'd like, I can: add examples to `README.md`, scaffold a new page template in `src/pages/`, or iterate on any section of this doc. Is anything missing or unclear? 🔍