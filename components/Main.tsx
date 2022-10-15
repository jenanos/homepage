import React, { useState } from 'react'
import { Canvas, useFrame, useThree, Vector3 } from '@react-three/fiber'
import { Environment, OrbitControls, Loader, PositionalAudio, ScrollControls, PerspectiveCamera, useScroll } from '@react-three/drei';
import { Model } from './Model';
import TextComponents from './TextComponents';
import { Vector } from 'three';


function ChangeCamera({ cameraPosition, targetCoordinates, setTargetCoordinates, orbitPoint, setOrbitPoint, scrollMode }) {
    const camera = useThree((state) => state.camera)
    const scroll = useScroll();
    let positionName: string;

    console.log('hei');

    if (!scrollMode) {
        if (cameraPosition === "start") {
            setTargetCoordinates([-20, 5, 20]);
            setOrbitPoint([0, 0, 0]);
        }
        else if (cameraPosition === "about") {
            setTargetCoordinates([-11, 2.5, 13]);
            setOrbitPoint([-7.3, 2, 11.3]);
        }
        else if (cameraPosition === "law") {
            setTargetCoordinates([0.6, 5.3, -4.6]);
            setOrbitPoint([3.5, 3.5, -1]);
        }
        else if (cameraPosition === "tech") {
            setTargetCoordinates([5, 2.5, 12]);
            setOrbitPoint([10, 2, 9.6]);
        }
        else if (cameraPosition === "music") {
            setTargetCoordinates([-6, 5.5, -2]);
            setOrbitPoint([-4, 4.6, -5.5]);
        }
    }

    else if (scrollMode) {

        if (scroll.offset > 0 && scroll.offset < 0.2) {
            setTargetCoordinates([-20, 5, 20]);
            setOrbitPoint([0, 0, 0]);
        }
        else if (scroll.offset > 0.2 && scroll.offset < 0.4) {
            setTargetCoordinates([-11, 2.5, 13]);
            setOrbitPoint([-7.3, 2, 11.3]);
        }
        else if (scroll.offset > 0.4 && scroll.offset < 0.6) {
            setTargetCoordinates([0.6, 5.3, -4.6]);
            setOrbitPoint([3.5, 3.5, -1]);
        }
        else if (scroll.offset > 0.6 && scroll.offset < 0.8) {
            setTargetCoordinates([5, 2.5, 12]);
            setOrbitPoint([10, 2, 9.6]);
        }
        else if (scroll.offset > 0.8 && scroll.offset < 1) {
            setTargetCoordinates([-6, 5.5, -2]);
            setOrbitPoint([-4, 4.6, -5.5]);
        }

    }

    camera.position.set(targetCoordinates[0], targetCoordinates[1], targetCoordinates[2]);
    camera.lookAt(orbitPoint[0], orbitPoint[1], orbitPoint[2]);

    // return <PerspectiveCamera makeDefault position={cameraPosition} />
    return <group />
}



function Main({ cameraPosition, setCameraPosition, scrollMode, setScrollMode }) {
    const [musicReady, setMusicReady] = useState(false);
    const [targetCoordinates, setTargetCoordinates] = useState([-40, 5, 20]);
    const [orbitPoint, setOrbitPoint] = useState([0, 0, 0]);

    return (
        <div className='w-full h-screen'>
            <Canvas onWheel={() => setScrollMode(true)}>
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
                <ScrollControls pages={5}>
                    <ChangeCamera cameraPosition={cameraPosition} targetCoordinates={targetCoordinates} setTargetCoordinates={setTargetCoordinates} orbitPoint={orbitPoint} setOrbitPoint={setOrbitPoint} scrollMode={scrollMode} />
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