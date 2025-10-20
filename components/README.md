# Components Structure

This folder contains the main 3D scene components for the homepage.

## Component Organization

### Scene Components
- **`SceneModel.tsx`** - Main 3D island/scene model with all objects and lights
  - Uses types from `models/SceneModel.generated.tsx`
  - Handles music readiness and audio setup

### Minimap Components
- **`MinimapOverlay.tsx`** - Container component that positions and manages minimap display
  - Controls visibility and positioning based on camera target
  - Handles toggle functionality
  - Renders both interactive minimap and thumbnail
  
- **`MinimapInteractive.tsx`** - Interactive minimap mesh with click handlers
  - Clickable areas for navigation between scenes
  - Scale: 4x for visibility
  - Uses types from `models/MinimapModel.generated.tsx`
  
- **`MinimapThumbnail.tsx`** - Non-interactive minimap preview
  - Visual-only representation
  - Smaller scale (0.5x)
  - Same geometry as interactive version but no click handlers

### Navigation
- **`Navbar.tsx`** - Top navigation bar with camera controls
- **`Main.tsx`** - Main canvas container orchestrating all components

### Other
- **`TextComponents.tsx`** - 3D text elements in the scene

## Models Folder

The `models/` subfolder contains auto-generated GLTF type definitions:

- **`SceneModel.generated.tsx`** - Generated types for the main island scene (`my-island.glb`)
  - Exports `SceneGLTF` type
  - Contains full node and material definitions
  
- **`MinimapModel.generated.tsx`** - Generated types for the minimap (`minimap.glb`)
  - Exports `MinimapGLTF` type
  - Contains minimap-specific nodes and materials
  
- **`index.ts`** - Barrel export for clean imports
  - Re-exports both type definitions
  - Allows `import type { SceneGLTF, MinimapGLTF } from './models'`

### Regenerating Models

If you update the `.glb` files, regenerate types with:

```bash
npx gltfjsx public/my-island.glb -t -o components/models/SceneModel.generated.tsx
npx gltfjsx public/minimap.glb -t -o components/models/MinimapModel.generated.tsx
```

Then manually:
1. Add `// @ts-nocheck` at the top
2. Update the exported type name to match (`SceneGLTF` or `MinimapGLTF`)

## Naming Convention

- **`*Model.tsx`** - Components that render 3D models
- **`*Overlay.tsx`** - Components that position/manage other components
- **`*.generated.tsx`** - Auto-generated files from gltfjsx (do not edit manually)
- **`Minimap*`** - All minimap-related components share this prefix
