import { useGLTF } from '@react-three/drei';
import type { ThreeElements } from '@react-three/fiber';
import type { MinimapGLTF } from './models/MinimapGLB';

type MinimapThumbProps = ThreeElements['group'];

export function MinimapThumb(props: MinimapThumbProps) {
  // @ts-expect-error drei returns GLTF & ObjectMap; gltfjsx provides refined typings for our asset
  const { nodes, materials } = useGLTF('/minimap.glb') as MinimapGLTF;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Om_meg.geometry}
        material={nodes.Om_meg.material}
        position={[0.03, -0.02, 0.03]}
        rotation={[1.98, -0.27, 0.36]}
        scale={0.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Juss.geometry}
        material={nodes.Juss.material}
        position={[-0.11, 0.1, -0.03]}
        rotation={[1.78, 0, 0.21]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Musikk.geometry}
        material={nodes.Musikk.material}
        position={[-0.17, 0, 0]}
        rotation={[1.89, 0.35, -0.22]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Teknologi.geometry}
        material={nodes.Teknologi.material}
        position={[0.02, 0.1, -0.02]}
        rotation={[1.83, 0.02, 0.19]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Styr_kameraet_selv.geometry}
        material={nodes.Styr_kameraet_selv.material}
        position={[-0.16, -0.05, 0.02]}
        rotation={[1.08, 0.11, 0.16]}
        scale={0.02}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Om_meg_kart.geometry}
        material={materials.kartutsnitt}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Teknologi_kart.geometry}
        material={materials.kartutsnitt}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Juss_kart.geometry}
        material={materials.kartutsnitt}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Musikk_kart.geometry}
        material={materials.kartutsnitt}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Styr_kamera_kart.geometry}
        material={materials.kartutsnitt}
      />
    </group>
  );
}

useGLTF.preload('/minimap.glb');
