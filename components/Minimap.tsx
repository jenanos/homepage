import { useGLTF } from '@react-three/drei';
import type { GLTF } from 'three-stdlib';
import type { Material, Mesh } from 'three';

import type { CameraTarget, MinimapStateSetter } from '../types/minimap';
import { triggerMinimapTarget } from '../types/minimap';

type MinimapGLTF = GLTF & {
  nodes: Record<string, Mesh>;
  materials: Record<string, Material>;
};

type MinimapProps = {
  setMinimapState: MinimapStateSetter;
};

const handleSelection = (
  setMinimapState: MinimapStateSetter,
  target: CameraTarget,
  autoPilot: boolean,
) => {
  triggerMinimapTarget(setMinimapState, target, autoPilot);
};

export function Minimap({ setMinimapState }: MinimapProps) {
  const { nodes, materials } = useGLTF('/minimap.glb') as MinimapGLTF;

  return (
    <group scale={4} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Om_meg.geometry}
        material={nodes.Om_meg.material}
        position={[0.03, -0.02, 0.03]}
        rotation={[1.98, -0.27, 0.36]}
        scale={0.03}
        onClick={() => handleSelection(setMinimapState, 'about', true)}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Juss.geometry}
        material={nodes.Juss.material}
        position={[-0.11, 0.1, -0.03]}
        rotation={[1.78, 0, 0.21]}
        scale={0.05}
        onClick={() => handleSelection(setMinimapState, 'law', true)}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Musikk.geometry}
        material={nodes.Musikk.material}
        position={[-0.17, 0, 0]}
        rotation={[1.89, 0.35, -0.22]}
        scale={0.04}
        onClick={() => handleSelection(setMinimapState, 'music', true)}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Teknologi.geometry}
        material={nodes.Teknologi.material}
        position={[0.02, 0.1, -0.02]}
        rotation={[1.83, 0.02, 0.19]}
        scale={0.04}
        onClick={() => handleSelection(setMinimapState, 'tech', true)}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Styr_kameraet_selv.geometry}
        material={nodes.Styr_kameraet_selv.material}
        position={[-0.16, -0.05, 0.02]}
        rotation={[1.08, 0.11, 0.16]}
        scale={0.02}
        onClick={() => handleSelection(setMinimapState, 'start', false)}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Om_meg_kart.geometry}
        material={materials.kartutsnitt}
        onClick={() => handleSelection(setMinimapState, 'about', true)}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Teknologi_kart.geometry}
        material={materials.kartutsnitt}
        onClick={() => handleSelection(setMinimapState, 'tech', true)}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Juss_kart.geometry}
        material={materials.kartutsnitt}
        onClick={() => handleSelection(setMinimapState, 'law', true)}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Musikk_kart.geometry}
        material={materials.kartutsnitt}
        onClick={() => handleSelection(setMinimapState, 'music', true)}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Styr_kamera_kart.geometry}
        material={materials.kartutsnitt}
        onClick={() => handleSelection(setMinimapState, 'start', false)}
      />
    </group>
  );
}

useGLTF.preload('/minimap.glb');
