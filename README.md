# 🌍 Jens Andresen Osberg — Interactive 3D Portfolio

This repository contains the code for Jens Andresen Osberg's 3D homepage. The site is built with Next.js 15, React 19, and React Three Fiber to guide visitors through law, technology, and music highlights on a stylised island.

## 🧭 Feature Tour
- **Guided camera tours** driven by a minimap with curated targets (`about`, `law`, `tech`, `music`) and an auto-pilot toggle.
- **Hands-on exploration** that hands control back to the visitor using `<OrbitControls>` when auto-pilot is turned off.
- **Ambient storytelling** via positional audio (`/public/stjernan.mp3`) once the island scene signals it is ready.
- **Accessible navigation** with keyboard-friendly menus, skip-to-start buttons, and semantic labelling for screen readers.
- **Optimised loading flow** that wraps models in `React.Suspense`, shows the Drei `Loader`, and gradually fades in lighting.

## 🛠️ Tech Stack
| Layer | Details |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org/) with the Pages Router |
| UI & State | React 19, TypeScript (strict mode) |
| 3D Rendering | `@react-three/fiber`, `@react-three/drei`, `three` |
| Styling | Tailwind CSS 4 with global overrides in `styles/globals.css` |
| Icons & Media | `react-icons`, custom GLB models exported via [`gltfjsx`](https://github.com/pmndrs/gltfjsx) |

## 🚀 Getting Started
1. Ensure Node.js `>=18 <25` (the range enforced in `package.json`).
2. Install dependencies and start the dev server:

   ```bash
   npm install
   npm run dev
   ```

3. Visit [http://localhost:3000](http://localhost:3000). Changes are hot-reloaded.

> **Tip:** An `.nvmrc` file is provided—run `nvm use` if you manage Node versions with `nvm`.

## 📦 Available Scripts
| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server with Fast Refresh. |
| `npm run build` | Create an optimised production bundle. |
| `npm run start` | Serve the production build locally (after `npm run build`). |
| `npm run lint` | Run ESLint using the Next.js + TypeScript configuration. |

## 🧱 Project Structure
```
.
├── components/          # Scene orchestration, minimap controls, navigation, and 3D text
│   ├── Main.tsx         # Sets up the <Canvas>, camera logic, and audio lifecycle
│   ├── Navbar.tsx       # Fixed navigation that triggers minimap targets
│   ├── SceneModel.tsx   # Island composition that forwards music readiness
│   ├── TextComponents.tsx
│   ├── MinimapOverlay.tsx
│   ├── MinimapInteractive.tsx
│   ├── MinimapThumbnail.tsx
│   └── models/          # gltfjsx generated components & types
├── pages/
│   ├── _app.tsx         # Tailwind + global layout wiring
│   └── index.tsx        # Renders <Navbar/> and <Main/> with the initial minimap state
├── public/              # GLB assets, HDR environment map, audio, and favicon
├── styles/              # Tailwind entrypoint with base style overrides
├── types/               # Shared TypeScript contracts (e.g., minimap state)
└── next.config.mjs      # Next.js configuration
```

### 🎯 Key Modules
- `types/minimap.ts` centralises the `MinimapState`, `CameraTarget`, and the `triggerMinimapTarget` helper.
- `components/SceneModel.tsx` imports generated geometry from `components/models` to render the island and emit a callback when textures are ready.
- `components/Main.tsx` manages camera lerping, minimap toggling, Suspense fallbacks, and audio playback.
- `components/MinimapOverlay.tsx` positions the interactive minimap in 3D space and displays a thumbnail toggle when relevant.

### 🗺️ Minimap Interaction
- Desktop navigation buttons in `Navbar.tsx` call `triggerMinimapTarget` to jump the camera and optionally switch auto-pilot off.
- When auto-pilot is disabled, visitors can orbit freely; the current target is still synchronised so the minimap highlights remain accurate.
- Re-enabling auto-pilot (by clicking a minimap region) recenters the camera and hides manual controls.

## 🎨 Assets & Tooling
- Update GLB files under `public/` and regenerate the corresponding React components with:
  ```bash
  npx gltfjsx public/my-island.glb -t -o components/models/SceneModel.generated.tsx
  npx gltfjsx public/minimap.glb -t -o components/models/MinimapModel.generated.tsx
  ```
- The generated files should keep the `// @ts-nocheck` pragma and exported type names (`SceneGLTF`, `MinimapGLTF`).
- HDR environments (e.g., `dikhololo_night_1k.hdr`) live in `public/` and are referenced in `Main.tsx` via Drei's `<Environment />`.

## ✅ Deployment Checklist
1. Run `npm run lint` to ensure the project passes static analysis.
2. Build the production bundle locally:

   ```bash
   npm run build
   npm run start
   ```

3. Deploy to any Node-compatible host (Vercel, Netlify, self-managed server). The project expects static assets to remain in `public/`.

---

Questions or improvements? Feel free to open an issue or adjust the scene to reflect new milestones—enjoy exploring the island! 🏝️
