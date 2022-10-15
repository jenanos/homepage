import React, { Suspense, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Loader, PositionalAudio, ScrollControls, useScroll } from '@react-three/drei';
import { Model } from './Model';
import TextComponents from './TextComponents';
import * as THREE from 'three'
import { Vector3 } from 'three';



function ChangeCamera({ cameraPosition }) {
    let targetCoordinates: [number, number, number];
    let orbitPoint: [number, number, number];


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

function SetScrollPosition({ setCameraPosition }) {
    const scroll = useScroll();
    useFrame(() => {

        if (scroll.offset > 0 && scroll.offset < 0.2) {
            setCameraPosition("start")
        }
        else if (scroll.offset > 0.2 && scroll.offset < 0.4) {
            setCameraPosition("about")
        }
        else if (scroll.offset > 0.4 && scroll.offset < 0.6) {
            setCameraPosition("law")
        }
        else if (scroll.offset > 0.6 && scroll.offset < 0.8) {
            setCameraPosition("tech")
        }
        else if (scroll.offset > 0.8 && scroll.offset < 1) {
            setCameraPosition("music")
        }

    })
    return null;
}


function Main({ cameraPosition, setCameraPosition, scrollMode, setScrollMode }) {
    const [musicReady, setMusicReady] = useState(false);

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
                {/* @ts-ignore*/}
                <ScrollControls distance={8} damping={10}>
                    {scrollMode && <SetScrollPosition setCameraPosition={setCameraPosition} />}
                    <ChangeCamera cameraPosition={cameraPosition} />
                </ScrollControls>
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