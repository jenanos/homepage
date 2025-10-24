import { useMemo } from 'react';
import { Billboard } from '@react-three/drei';

import type { Vector3Tuple } from 'three';

import { MinimapInteractive } from './MinimapInteractive';
import type { CameraTarget, MinimapState, MinimapStateSetter } from '../types/minimap';

const DEFAULT_MAP_POSITION: Vector3Tuple = [-18, 4, 18];
const DEFAULT_LIGHT_POSITION: Vector3Tuple = [-18.2, 4.5, 18];

const MAP_LAYOUT: Record<CameraTarget, {
  mapPosition: Vector3Tuple;
  lightPosition: Vector3Tuple;
}> = {
  start: {
    mapPosition: [-18, 4, 18] as Vector3Tuple,
    lightPosition: [-18.2, 4.5, 18] as Vector3Tuple,
  },
  about: {
    mapPosition: [-8.8, 2, 12] as Vector3Tuple,
    lightPosition: [-9, 2.4, 12] as Vector3Tuple,
  },
  law: {
    mapPosition: [2.25, 4.8, -2.5] as Vector3Tuple,
    lightPosition: [2.1, 5.3, -2.5] as Vector3Tuple,
  },
  tech: {
    mapPosition: [7.2, 2.5, 11] as Vector3Tuple,
    lightPosition: [7, 3, 11] as Vector3Tuple,
  },
  music: {
    mapPosition: [-4.8, 4.4, -4] as Vector3Tuple,
    lightPosition: [-5, 4.6, -3.9] as Vector3Tuple,
  },
};

type MinimapOverlayProps = {
  cameraPosition: CameraTarget;
  minimapState: MinimapState;
  setMinimapState: MinimapStateSetter;
};

const MinimapOverlay = ({
  cameraPosition,
  minimapState,
  setMinimapState,
}: MinimapOverlayProps) => {
  const layout = useMemo(() => MAP_LAYOUT[cameraPosition], [cameraPosition]);

  const { autoPilot, triggered } = minimapState;
  const shouldResetPosition = triggered || !autoPilot;
  const mapPosition = shouldResetPosition ? DEFAULT_MAP_POSITION : layout.mapPosition;
  const lightPosition = shouldResetPosition ? DEFAULT_LIGHT_POSITION : layout.lightPosition;

  return (
    <group>
      <group>
        <Billboard position={mapPosition}>
          <MinimapInteractive setMinimapState={setMinimapState} />
        </Billboard>
        <pointLight color="orange" intensity={0.8} position={lightPosition} distance={2} />
      </group>
    </group>
  );
};

export default MinimapOverlay;
