import React from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Environment, OrbitControls, Loader, Text, Billboard } from '@react-three/drei';
import { Model } from './Model';
import TextComponents from './TextComponents';


function ChangeCamera({ cameraPosition }) {
    const camera = useThree((state) => state.camera)
    let orbitPoint;
    if (cameraPosition === "start") {
        camera.position.set(-20, 5, 20);
        orbitPoint = [0, 0, 0];
    }
    else if (cameraPosition === "about") {
        camera.position.set(-9, 2.5, 15);
        orbitPoint = [-8, 2, 10];
    }
    else if (cameraPosition === "law") {
        camera.position.set(0.6, 5.3, -4.6);
        orbitPoint = [3.5, 3.5, -1];
    }
    else if (cameraPosition === "tech") {
        camera.position.set(6, 2.0, 11);
        orbitPoint = [10, 2, 9.6];
    }
    else if (cameraPosition === "music") {
        camera.position.set(-6, 5.5, -2);
        orbitPoint = [-4, 4.6, -5.5];
    }

    return <OrbitControls target={orbitPoint} />
}



function Main({ cameraPosition, setCameraPosition }) {
    return (
        <div className='w-full h-screen text-center'>
            <Canvas>
                <pointLight color="orange" intensity={1} position={[-11., 2.8, 8.9]} distance={8} />
                <pointLight color="orange" intensity={1} position={[-6.2, 3.2, 1.7]} distance={8} />
                <pointLight color="orange" intensity={1} position={[-3.3, 4.8, -5.4]} distance={2} />
                <pointLight color="orange" intensity={1} position={[3.6, 4, -1]} distance={3} />
                <pointLight color="white" intensity={1} position={[12.3, 1.9, 8.9]} distance={8} />
                <TextComponents cameraPosition={cameraPosition} setCameraPosition={setCameraPosition} />
                <Model />
                <ChangeCamera cameraPosition={cameraPosition} />
                <Environment
                    files="dikhololo_night_1k.hdr"
                    background
                />
            </Canvas>
            <Loader />
        </div>
    )
}

export default Main