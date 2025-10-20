import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Loader, OrbitControls, PerspectiveCamera, PositionalAudio } from '@react-three/drei';
import type { CSSProperties, Dispatch, SetStateAction } from 'react';
import { Vector3 } from 'three';
import type { Vector3Tuple } from 'three';

import OpenMinimap from './OpenMinimap';
import TextComponents from './TextComponents';
import { Model } from './Model';
import type { CameraTarget, MinimapState, MinimapStateSetter } from '../types/minimap';

const CAMERA_LERP_SPEED = 2;

const CAMERA_TARGETS: Record<CameraTarget, { position: Vector3Tuple; orbit: Vector3Tuple }> = {
  start: { position: [-20, 5, 20] as Vector3Tuple, orbit: [0, 0, 0] as Vector3Tuple },
  about: { position: [-11, 2.5, 13] as Vector3Tuple, orbit: [-7.3, 2, 11.3] as Vector3Tuple },
  law: { position: [0.6, 5.3, -4.6] as Vector3Tuple, orbit: [3.5, 3.5, -1] as Vector3Tuple },
  tech: { position: [5, 2.5, 12] as Vector3Tuple, orbit: [10, 2, 9.6] as Vector3Tuple },
  music: { position: [-6, 5.5, -2] as Vector3Tuple, orbit: [-4, 4.6, -5.5] as Vector3Tuple },
};

const LOADER_STYLES: CSSProperties = {
  background: '#6E350F',
};

const AUDIO_POSITION: Vector3Tuple = [-4, 4.6, -5.5];

const LOADER_MESSAGE = `Bruker litt tid, men er der straks.\nHopper plutselig til 100%`;

interface MainProps {
  minimapState: MinimapState;
  setMinimapState: MinimapStateSetter;
}

interface ChangeCameraProps {
  cameraPosition: CameraTarget;
  setCameraPosition: Dispatch<SetStateAction<CameraTarget>>;
  minimapState: MinimapState;
  setMinimapState: MinimapStateSetter;
  toggleMap: Dispatch<SetStateAction<boolean>>;
}

const ChangeCamera = ({
  cameraPosition,
  setCameraPosition,
  minimapState,
  setMinimapState,
  toggleMap,
}: ChangeCameraProps) => {
  const targetVector = useRef(new Vector3(...CAMERA_TARGETS.start.position));
  const orbitVector = useRef(new Vector3(...CAMERA_TARGETS.start.orbit));
  const currentTarget = useMemo(() => CAMERA_TARGETS[cameraPosition], [cameraPosition]);

  useEffect(() => {
    targetVector.current.fromArray(currentTarget.position);
    orbitVector.current.fromArray(currentTarget.orbit);
  }, [currentTarget]);

  const { target, triggered } = minimapState;

  useEffect(() => {
    if (!triggered) {
      return;
    }

    setCameraPosition(target);
    toggleMap(false);
    setMinimapState((state) => ({ ...state, triggered: false }));
  }, [setCameraPosition, setMinimapState, target, toggleMap, triggered]);

  useFrame(({ camera }, delta) => {
    camera.position.lerp(targetVector.current, CAMERA_LERP_SPEED * delta);
    camera.lookAt(orbitVector.current);
  });

  return null;
};

const Main = ({ minimapState, setMinimapState }: MainProps) => {
  const [musicReady, setMusicReady] = useState(false);
  const [showMap, setShowMap] = useState(true);
  const [cameraPosition, setCameraPosition] = useState<CameraTarget>('start');
  const [cameraInstructionsVisible, setCameraInstructionsVisible] = useState(false);
  const { autoPilot, target, triggered } = minimapState;

  const previousAutoPilot = useRef(autoPilot);

  useEffect(() => {
    if (!triggered || autoPilot) {
      return;
    }

    setCameraPosition(target);
    setShowMap(false);
    setMinimapState((state) => ({ ...state, triggered: false }));
  }, [autoPilot, setCameraPosition, setMinimapState, target, triggered]);

  useEffect(() => {
    if (autoPilot) {
      setCameraInstructionsVisible(false);
    } else if (previousAutoPilot.current) {
      setCameraInstructionsVisible(true);
    }

    previousAutoPilot.current = autoPilot;
  }, [autoPilot]);

  useEffect(() => {
    if (triggered) {
      return;
    }

    setMinimapState((state) => {
      if (state.target === cameraPosition && !state.triggered) {
        return state;
      }

      return { ...state, target: cameraPosition, triggered: false };
    });
  }, [cameraPosition, setMinimapState, triggered]);

  return (
    <div className="relative w-full h-screen">
      <Canvas camera={{ position: CAMERA_TARGETS.start.position }}>
        <Suspense fallback={null}>
          <OpenMinimap
            cameraPosition={cameraPosition}
            showMap={showMap}
            toggleMap={setShowMap}
            minimapState={minimapState}
            setMinimapState={setMinimapState}
          />
          <pointLight color="orange" intensity={1} position={[-10.75, 2.94, 9.1]} distance={8} decay={2} />
          <pointLight color="orange" intensity={1} position={[-6.2, 3.2, 1.7]} distance={8} />
          <pointLight color="orange" intensity={1} position={[-3.3, 4.8, -5.4]} distance={2} />
          <pointLight color="orange" intensity={1} position={[3.6, 4, -1]} distance={3} />
          <pointLight color="white" intensity={1} position={[12.3, 1.9, 8.9]} distance={8} />
          <TextComponents />
          <Model musicReady={musicReady} setMusicReady={setMusicReady} />
          {autoPilot && (
            <ChangeCamera
              cameraPosition={cameraPosition}
              setCameraPosition={setCameraPosition}
              minimapState={minimapState}
              setMinimapState={setMinimapState}
              toggleMap={setShowMap}
            />
          )}
          {!autoPilot && <OrbitControls target={[0, 0, 0]} />}
          {!autoPilot && (
            <PerspectiveCamera makeDefault fov={75} position={CAMERA_TARGETS.start.position} />
          )}
          <Environment files="dikhololo_night_1k.hdr" background />
          <group position={AUDIO_POSITION}>
            {musicReady && <PositionalAudio autoplay loop url="/stjernan.mp3" distance={3} />}
          </group>
        </Suspense>
      </Canvas>
      {!autoPilot && cameraInstructionsVisible && (
        <div className="absolute top-28 right-4 max-w-xs rounded-lg bg-black/80 p-4 text-white shadow-lg">
          <div className="flex items-start gap-3">
            <p className="text-sm leading-relaxed whitespace-pre-line">
              {`Se rundt: venstreklikk/en finger\nPanorer: høyreklikk/to fingre\nZoom: scroll/klyp`}
            </p>
            <button
              type="button"
              onClick={() => setCameraInstructionsVisible(false)}
              className="ml-auto text-white/70 transition hover:text-white"
              aria-label="Lukk kamerainstruksjoner"
            >
              ×
            </button>
          </div>
        </div>
      )}
      {!autoPilot && !cameraInstructionsVisible && (
        <button
          type="button"
          onClick={() => setCameraInstructionsVisible(true)}
          className="absolute top-28 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/80 text-lg font-semibold text-white shadow-lg transition hover:bg-black/70"
          aria-label="Vis kamerainstruksjoner"
        >
          ?
        </button>
      )}
      <Loader
        containerStyles={LOADER_STYLES}
        dataInterpolation={(progress) => `${progress.toFixed(0)}%\n${LOADER_MESSAGE}`}
      />
    </div>
  );
};

export default Main;
