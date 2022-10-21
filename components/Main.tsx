import React, { useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Loader, PositionalAudio, Billboard, Text, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Model } from './Model';
import TextComponents from './TextComponents';
import * as THREE from 'three'
import { Vector3 } from 'three';
import OpenMinimap from './OpenMinimap';


function ChangeCamera({ cameraPosition, setCameraPosition, minimapClicked, setMinimapClicked, toggleMap }) {
    let targetCoordinates: [number, number, number];
    let orbitPoint: [number, number, number];
    let targetVector: Vector3;

    if (minimapClicked[1]) {
        setCameraPosition(minimapClicked[0]);
        toggleMap(false);
    }

    if (cameraPosition === "start") {
        targetCoordinates = [-20, 5, 20];
        orbitPoint = [0, 0, 0];
    }
    else if (cameraPosition === "about") {
        targetCoordinates = [-11, 2.5, 13];
        orbitPoint = [-7.3, 2, 11.3];
    }
    else if (cameraPosition === "law") {
        targetCoordinates = [0.6, 5.3, -4.6];
        orbitPoint = [3.5, 3.5, -1];
    }
    else if (cameraPosition === "tech") {
        targetCoordinates = [5, 2.5, 12];
        orbitPoint = [10, 2, 9.6];
    }
    else if (cameraPosition === "music") {
        targetCoordinates = [-6, 5.5, -2];
        orbitPoint = [-4, 4.6, -5.5];
    }

    setMinimapClicked(["start", false, minimapClicked[2]]);

    if (targetCoordinates) {
        targetVector = new THREE.Vector3(targetCoordinates[0], targetCoordinates[1], targetCoordinates[2]);
    }

    useFrame((state, delta) => {
        let camera = state.camera;
        if (targetCoordinates) {
            camera.position.lerp(targetVector, (2 * delta));
            camera.updateProjectionMatrix();
        }
        if (orbitPoint) {
            camera.lookAt(...orbitPoint);
        }
    })

    return null;
}

function Main({ minimapClicked, setMinimapClicked }) {
    const [musicReady, setMusicReady] = useState(false);
    const [showMap, toggleMap] = useState(true);
    const [cameraPosition, setCameraPosition] = useState("start");

    return (
        <div className='w-full h-screen'>
            <Canvas camera={{ position: [-10, 2, 10] }}>
                <OpenMinimap cameraPosition={cameraPosition} showMap={showMap} toggleMap={toggleMap} minimapClicked={minimapClicked} setMinimapClicked={setMinimapClicked} />
                {/* first street light */}
                <pointLight color="orange" intensity={1} position={[-10.75, 2.94, 9.1]} distance={8} decay={2} />
                {/* second street light */}
                <pointLight color="orange" intensity={1} position={[-6.2, 3.2, 1.7]} distance={8} />
                <pointLight color="orange" intensity={1} position={[-3.3, 4.8, -5.4]} distance={2} />
                <pointLight color="orange" intensity={1} position={[3.6, 4, -1]} distance={3} />
                <pointLight color="white" intensity={1} position={[12.3, 1.9, 8.9]} distance={8} />
                <TextComponents />
                <Model musicReady={musicReady} setMusicReady={setMusicReady} />
                {minimapClicked[2] &&
                    <ChangeCamera cameraPosition={cameraPosition} setCameraPosition={setCameraPosition} minimapClicked={minimapClicked} setMinimapClicked={setMinimapClicked} toggleMap={toggleMap} />
                }
                {!minimapClicked[2] && <OrbitControls target={[0, 0, 0]} />}
                {!minimapClicked[2] && <PerspectiveCamera makeDefault fov={75} position={[-20, 5, 20]} />}
                {!minimapClicked[2] && <Billboard position={[-18, 2.3, 17]}>
                    <Text color={'white'} maxWidth={3} anchorX="left">
                        {'Se rundt:           venstreklikk/en finger\nPanorer:            høyreklikk/to fingre\nZoom:               scroll/klyp'}
                    </Text>
                </Billboard>}
                <Environment
                    files="dikhololo_night_1k.hdr"
                    background
                />
                <group position={[-4, 4.6, -5.5]}>
                    {musicReady && <PositionalAudio autoplay loop url="/stjernan.mp3" distance={3} />}
                </group>
            </Canvas>
            <Loader containerStyles={{ background: '#6E350F', }} dataInterpolation={(p) => `${p.toFixed(2)}%\n Bruker litt tid, men er der straks.\nHopper plutselig til 100 `} />
        </div>
    )
}

export default Main