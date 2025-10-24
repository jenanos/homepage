import { useMemo, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import type { ThreeElements } from '@react-three/fiber';

import type { CameraTarget, MinimapStateSetter } from '../types/minimap';
import { triggerMinimapTarget } from '../types/minimap';

import type { MinimapGLTF } from './models';

type MinimapProps = {
  setMinimapState: MinimapStateSetter;
  onRegionSelect?: () => void;
};

const handleSelection = (
  setMinimapState: MinimapStateSetter,
  target: CameraTarget,
  autoPilot: boolean,
  onRegionSelect?: () => void,
) => {
  triggerMinimapTarget(setMinimapState, target, autoPilot);
  onRegionSelect?.();
};

type MeshProps = ThreeElements['mesh'];

interface InteractiveMeshProps extends MeshProps {
  onSelect: () => void;
  hoverScale?: number;
}

const DEFAULT_HOVER_SCALE = 1.12;

const scaleWithHover = (
  scale: InteractiveMeshProps['scale'],
  hoverScale: number,
  hovered: boolean,
) => {
  if (scale === undefined) {
    return scale;
  }

  const multiplier = hovered ? hoverScale : 1;

  if (Array.isArray(scale)) {
    return scale.map((value) => value * multiplier) as typeof scale;
  }

  return scale * multiplier;
};

const setCursor = (cursor: string) => {
  if (typeof document === 'undefined') {
    return;
  }

  document.body.style.cursor = cursor;
};

const InteractiveMesh = ({
  onSelect,
  hoverScale = DEFAULT_HOVER_SCALE,
  scale,
  ...props
}: InteractiveMeshProps) => {
  const [hovered, setHovered] = useState(false);

  const resolvedScale = useMemo(
    () => scaleWithHover(scale, hoverScale, hovered),
    [hoverScale, hovered, scale],
  );

  return (
    <mesh
      {...props}
      scale={resolvedScale}
      onClick={(event) => {
        event.stopPropagation();
        onSelect();
      }}
      onPointerOver={(event) => {
        event.stopPropagation();
        setHovered(true);
        setCursor('pointer');
      }}
      onPointerOut={(event) => {
        event.stopPropagation();
        setHovered(false);
        setCursor('');
      }}
    />
  );
};

export function MinimapInteractive({ setMinimapState, onRegionSelect }: MinimapProps) {
  // @ts-expect-error drei returns GLTF & ObjectMap; gltfjsx provides refined typings for our asset
  const { nodes, materials } = useGLTF('/minimap.glb') as MinimapGLTF;

  return (
    <group scale={4} dispose={null}>
      <InteractiveMesh
        castShadow
        receiveShadow
        geometry={nodes.Om_meg.geometry}
        material={nodes.Om_meg.material}
        position={[0.03, -0.02, 0.03]}
        rotation={[1.98, -0.27, 0.36]}
        scale={0.03}
        onSelect={() => handleSelection(setMinimapState, 'about', true, onRegionSelect)}
      />
      <InteractiveMesh
        castShadow
        receiveShadow
        geometry={nodes.Juss.geometry}
        material={nodes.Juss.material}
        position={[-0.11, 0.1, -0.03]}
        rotation={[1.78, 0, 0.21]}
        scale={0.05}
        onSelect={() => handleSelection(setMinimapState, 'law', true, onRegionSelect)}
      />
      <InteractiveMesh
        castShadow
        receiveShadow
        geometry={nodes.Musikk.geometry}
        material={nodes.Musikk.material}
        position={[-0.17, 0, 0]}
        rotation={[1.89, 0.35, -0.22]}
        scale={0.04}
        onSelect={() => handleSelection(setMinimapState, 'music', true, onRegionSelect)}
      />
      <InteractiveMesh
        castShadow
        receiveShadow
        geometry={nodes.Teknologi.geometry}
        material={nodes.Teknologi.material}
        position={[0.02, 0.1, -0.02]}
        rotation={[1.83, 0.02, 0.19]}
        scale={0.04}
        onSelect={() => handleSelection(setMinimapState, 'tech', true, onRegionSelect)}
      />
      <InteractiveMesh
        castShadow
        receiveShadow
        geometry={nodes.Styr_kameraet_selv.geometry}
        material={nodes.Styr_kameraet_selv.material}
        position={[-0.16, -0.05, 0.02]}
        rotation={[1.08, 0.11, 0.16]}
        scale={0.02}
        onSelect={() => handleSelection(setMinimapState, 'start', false, onRegionSelect)}
      />
      <InteractiveMesh
        castShadow
        receiveShadow
        geometry={nodes.Om_meg_kart.geometry}
        material={materials.kartutsnitt}
        hoverScale={1.02}
        onSelect={() => handleSelection(setMinimapState, 'about', true, onRegionSelect)}
      />
      <InteractiveMesh
        castShadow
        receiveShadow
        geometry={nodes.Teknologi_kart.geometry}
        material={materials.kartutsnitt}
        hoverScale={1.02}
        onSelect={() => handleSelection(setMinimapState, 'tech', true, onRegionSelect)}
      />
      <InteractiveMesh
        castShadow
        receiveShadow
        geometry={nodes.Juss_kart.geometry}
        material={materials.kartutsnitt}
        hoverScale={1.02}
        onSelect={() => handleSelection(setMinimapState, 'law', true, onRegionSelect)}
      />
      <InteractiveMesh
        castShadow
        receiveShadow
        geometry={nodes.Musikk_kart.geometry}
        material={materials.kartutsnitt}
        hoverScale={1.02}
        onSelect={() => handleSelection(setMinimapState, 'music', true, onRegionSelect)}
      />
      <InteractiveMesh
        castShadow
        receiveShadow
        geometry={nodes.Styr_kamera_kart.geometry}
        material={materials.kartutsnitt}
        hoverScale={1.02}
        onSelect={() => handleSelection(setMinimapState, 'start', false, onRegionSelect)}
      />
    </group>
  );
}

useGLTF.preload('/minimap.glb');
