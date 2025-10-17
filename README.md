# Jens Andresen Osberg – Digital portfolio

A 3D homepage built with Next.js, React Three Fiber and Tailwind CSS. The scene presents different focus areas (law, technology, music) and allows visitors to explore the island freely or jump directly to curated camera angles with a minimap.

## Prerequisites

- Node.js 18.18 or newer (Next.js 14 requirement, pinned via `.nvmrc`)
- npm 9 or newer

If you use `nvm` or another version manager, run `nvm use` before the commands below.

## Getting started

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The page updates automatically when you edit the source files.

## Available scripts

| Command        | Description                                                   |
| -------------- | ------------------------------------------------------------- |
| `npm run dev`  | Runs the Next.js development server with fast refresh.        |
| `npm run build`| Builds the production bundle.                                 |
| `npm run start`| Serves the production build.                                  |
| `npm run lint` | Runs ESLint with the Next.js rules and TypeScript checks.     |

## Project structure

```
.
├── components/          # React components (3D scene, UI widgets)
├── pages/               # Next.js pages and API routes
├── public/              # Static assets (models, audio, favicon)
├── styles/              # Global Tailwind styles
├── types/               # Shared TypeScript definitions
└── next.config.mjs      # Next.js configuration (React strict mode)
```

### 3D scene

The 3D experience is powered by:

- [`@react-three/fiber`](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) for rendering Three.js in React.
- [`@react-three/drei`](https://github.com/pmndrs/drei) utility helpers such as `Environment`, `OrbitControls`, `Text`, and `Loader`.
- GLTF models exported from Blender and loaded with `useGLTF`.

Key components:

- `Main.tsx` orchestrates the canvas, camera transitions, and audio playback.
- The canvas content is wrapped in `React.Suspense` so GLTF assets loaded with `useGLTF` follow the [recommended pattern from the React Three Fiber docs](https://r3f.docs.pmnd.rs/getting-started/introduction#first-steps).
- `OpenMinimap.tsx` renders the contextual minimap and toggles between auto-pilot and manual camera control.
- `Model.tsx` contains the island mesh hierarchy generated via [`gltfjsx`](https://github.com/pmndrs/gltfjsx).
- `TextComponents.tsx` adds floating labels for each area of the island.

## Coding standards

- Strict TypeScript is enabled (`strict: true`) to surface type issues early.
- Shared UI state lives in strongly typed helpers under `types/` (for example the minimap state machine).
- Use the `triggerMinimapTarget` helper to keep minimap interactions in sync with camera transitions.
- React state updates occur inside effects or callbacks, avoiding mutations during render.
- ESLint uses the official Next.js configuration to enforce modern best practices.

## Deployment

The application targets the static Next.js output and can be deployed to any platform that supports Node.js (e.g. Vercel, Netlify). Run `npm run build` followed by `npm run start` to verify the production bundle locally before deploying.

---

Feel free to adapt the content, models, or styles to keep the site aligned with new accomplishments and visual direction.
