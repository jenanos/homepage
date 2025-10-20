import { useMemo } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { Billboard, Text } from '@react-three/drei';

import type { Vector3Tuple } from 'three';

import { MinimapThumbnail } from './MinimapThumbnail';
import { MinimapInteractive } from './MinimapInteractive';
import type { CameraTarget, MinimapState, MinimapStateSetter } from '../types/minimap';

const DEFAULT_MAP_POSITION: Vector3Tuple = [-18, 4, 18];
const DEFAULT_LIGHT_POSITION: Vector3Tuple = [-18.2, 4.5, 18];

const MAP_LAYOUT: Record<CameraTarget, {
  textPosition: Vector3Tuple;
  thumbPosition: Vector3Tuple;
  mapPosition: Vector3Tuple;
  lightPosition: Vector3Tuple;
  textSize: number;
  showToggle: boolean;
}> = {
  start: {
    textPosition: [-19.32, 4.1, 19.2] as Vector3Tuple,
    thumbPosition: [-19, 4, 19.4] as Vector3Tuple,
    mapPosition: [-18, 4, 18] as Vector3Tuple,
    lightPosition: [-18.2, 4.5, 18] as Vector3Tuple,
    textSize: 0.05,
    showToggle: false,
  },
  about: {
    textPosition: [-9.5, 1.27, 12.1] as Vector3Tuple,
    thumbPosition: [-10, 1.82, 12.8] as Vector3Tuple,
    mapPosition: [-8.8, 2, 12] as Vector3Tuple,
    lightPosition: [-9, 2.4, 12] as Vector3Tuple,
    textSize: 0.08,
    showToggle: true,
  },
  law: {
    textPosition: [1.4, 3.75, -3.7] as Vector3Tuple,
    thumbPosition: [0.92, 4.2, -3.75] as Vector3Tuple,
    mapPosition: [2.25, 4.8, -2.5] as Vector3Tuple,
    lightPosition: [2.1, 5.3, -2.5] as Vector3Tuple,
    textSize: 0.06,
    showToggle: true,
  },
  tech: {
    textPosition: [6.1, 1.57, 11.35] as Vector3Tuple,
    thumbPosition: [6.3, 1.57, 11.74] as Vector3Tuple,
    mapPosition: [7.2, 2.5, 11] as Vector3Tuple,
    lightPosition: [7, 3, 11] as Vector3Tuple,
    textSize: 0.07,
    showToggle: true,
  },
  music: {
    textPosition: [-5, 3, -4.5] as Vector3Tuple,
    thumbPosition: [-4.8, 3.8, -3.4] as Vector3Tuple,
    mapPosition: [-4.8, 4.4, -4] as Vector3Tuple,
    lightPosition: [-5, 4.6, -3.9] as Vector3Tuple,
    textSize: 0.1,
    showToggle: true,
  },
};

type MinimapOverlayProps = {
  cameraPosition: CameraTarget;
  showMap: boolean;
  toggleMap: Dispatch<SetStateAction<boolean>>;
  minimapState: MinimapState;
  setMinimapState: MinimapStateSetter;
};

const MinimapOverlay = ({
  cameraPosition,
  showMap,
  toggleMap,
  minimapState,
  setMinimapState,
}: MinimapOverlayProps) => {
  const layout = useMemo(() => MAP_LAYOUT[cameraPosition], [cameraPosition]);

  const { autoPilot, triggered } = minimapState;
  const shouldResetPosition = triggered || !showMap || !autoPilot;
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
      {layout.showToggle && (
        <group onClick={() => toggleMap((value) => !value)}>
          <Billboard position={layout.textPosition}>
            <Text color="white" maxWidth={2} fontSize={layout.textSize}>
              {`Trykk her for å\nskru av og på kartet:`}
            </Text>
          </Billboard>
          <Billboard position={layout.thumbPosition}>
            <MinimapThumbnail scale={0.5} />
          </Billboard>
        </group>
      )}
    </group>
  );
};

export default MinimapOverlay;
