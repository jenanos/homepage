import React, { useState } from 'react'
import { Canvas, useThree, Vector3 } from '@react-three/fiber'
import { Environment, OrbitControls, Loader, PositionalAudio, } from '@react-three/drei';
import { Model } from './Model';
import TextComponents from './TextComponents';


function ChangeCamera({ cameraPosition }) {
    const camera = useThree((state) => state.camera)
    let orbitPoint: Vector3;
    let targetCoordinates: [number, number, number];

    if (cameraPosition === "start") {
        targetCoordinates = [-20, 5, 20];
        orbitPoint = [0, 0, 0];
    }
    else if (cameraPosition === "about") {
        targetCoordinates = [-11, 2.5, 13];
        orbitPoint = [-7.3, 2, 11.3];
    }
    else if (cameraPosition === "law") {
        targetCoordinates = [0.6, 5.3, -4.6]
        orbitPoint = [3.5, 3.5, -1];
    }
    else if (cameraPosition === "tech") {
        targetCoordinates = [5, 2.5, 12]
        orbitPoint = [10, 2, 9.6];
    }
    else if (cameraPosition === "music") {
        targetCoordinates = [-6, 5.5, -2]
        orbitPoint = [-4, 4.6, -5.5];
    }

    camera.position.set(...targetCoordinates);

    return <OrbitControls target={orbitPoint} />
}



function Main({ cameraPosition, setCameraPosition }) {
    const [musicReady, setMusicReady] = useState(false);

    return (
        <div className='w-full h-screen text-center'>
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
                <ChangeCamera cameraPosition={cameraPosition} />
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