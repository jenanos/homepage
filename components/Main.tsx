import React, { Suspense, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Loader, PositionalAudio, Billboard, Text3D, Text } from '@react-three/drei';
import { Model } from './Model';
import TextComponents from './TextComponents';
import * as THREE from 'three'
import { Vector3 } from 'three';
import { Minimap } from './Minimap';
import { MinimapThumb } from './MinimapThumb';



function ChangeCamera({ cameraPosition, setCameraPosition, minimapClicked, setMinimapClicked, toggleMap }) {
    let targetCoordinates: [number, number, number];
    let orbitPoint: [number, number, number];

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

    setMinimapClicked(["start", false]);


    useFrame(state => {
        let camera = state.camera;
        if (targetCoordinates) {
            let targetVector: Vector3 = new THREE.Vector3(targetCoordinates[0], targetCoordinates[1], targetCoordinates[2]);
            camera.position.lerp(targetVector, 0.01);
            camera.updateProjectionMatrix();
        }
        if (orbitPoint) {
            camera.lookAt(...orbitPoint);
        }

    })

    return null;
}

function OpenMinimap({ cameraPosition, showMap, toggleMap, setMapPostition }) {
    let targetCoordinatesText: [number, number, number] = [-20, 5, 20];
    let targetCoordinatesThumb: [number, number, number] = [-20, 5, 20];
    let textSize: number = 0.1;

    if (cameraPosition === "start") {
        targetCoordinatesText = [-19.32, 4.1, 19.2];
        targetCoordinatesThumb = [-19, 4, 19.4];
        setMapPostition([-18, 4, 18]);
        textSize = 0.05;
    }
    else if (cameraPosition === "about") {
        targetCoordinatesText = [-9.5, 1.27, 12.1];
        targetCoordinatesThumb = [-10, 1.82, 12.8];
        setMapPostition([-8.8, 2, 12]);
        textSize = 0.08;
    }
    else if (cameraPosition === "law") {
        targetCoordinatesText = [1.4, 3.75, -3.7];
        targetCoordinatesThumb = [0.92, 4.2, -3.75];
        setMapPostition([2.25, 4.8, -2.5]);
        textSize = 0.06;
    }
    else if (cameraPosition === "tech") {
        targetCoordinatesText = [6.1, 1.57, 11.35];
        targetCoordinatesThumb = [6.3, 1.57, 11.74];
        setMapPostition([7.2, 2.5, 11]);
        textSize = 0.07;
    }
    else if (cameraPosition === "music") {
        targetCoordinatesText = [-5, 3, -4.5];
        targetCoordinatesThumb = [-4.8, 3.8, -3.4];
        setMapPostition([-4.8, 4.4, -4]);
        textSize = 0.1;
    }

    return <group onClick={() => toggleMap(!showMap)}>
        <Billboard position={[...targetCoordinatesText]}>
            {/* @ts-ignore*/}
            <Text color={'white'} maxWidth={2} fontSize={textSize}>
                {'Trykk her for å\nskru av og på kartet:'}
            </Text>
        </Billboard>
        <Billboard position={[...targetCoordinatesThumb]}>
            <MinimapThumb scale={0.5} />
        </Billboard>
    </group>

}


function Main({ cameraPosition, setCameraPosition, scrollMode, setScrollMode }) {
    const [musicReady, setMusicReady] = useState(false);
    const [mapPosition, setMapPostition] = useState([-18, 4, 18]);
    const [showMap, toggleMap] = useState(true);
    const [minimapClicked, setMinimapClicked] = useState(["start", false]);

    return (
        <div className='w-full h-screen'>
            <Canvas>
                {/* first street light */}
                <pointLight color="orange" intensity={1} position={[-10.75, 2.94, 9.1]} distance={8} decay={2} />
                {/* second street light */}
                <pointLight color="orange" intensity={1} position={[-6.2, 3.2, 1.7]} distance={8} />
                <pointLight color="orange" intensity={1} position={[-3.3, 4.8, -5.4]} distance={2} />
                <pointLight color="orange" intensity={1} position={[3.6, 4, -1]} distance={3} />
                <pointLight color="white" intensity={1} position={[12.3, 1.9, 8.9]} distance={8} />
                <TextComponents musicReady={musicReady} setMusicReady={setMusicReady} cameraPosition={cameraPosition} setCameraPosition={setCameraPosition} />
                <Model musicReady={musicReady} setMusicReady={setMusicReady} />
                <ChangeCamera cameraPosition={cameraPosition} setCameraPosition={setCameraPosition} minimapClicked={minimapClicked} setMinimapClicked={setMinimapClicked} toggleMap={toggleMap} />
                {showMap &&
                    <Billboard position={[mapPosition[0], mapPosition[1], mapPosition[2]]} >
                        <Minimap minimapClicked={minimapClicked} setMinimapClicked={setMinimapClicked} />
                    </Billboard>
                }
                <OpenMinimap cameraPosition={cameraPosition} showMap={showMap} toggleMap={toggleMap} setMapPostition={setMapPostition} />
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