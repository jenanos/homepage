import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Text3D, Loader, PerspectiveCamera, Billboard, Text, Html } from '@react-three/drei';
import { Model } from './Model';


function Main({ cameraPosition }) {
    let camera;
    if (cameraPosition === 1) {
        camera = <PerspectiveCamera makeDefault fov={75} position={[-20, 5, 20]} />
    }
    else if (cameraPosition === 2) {
        camera = <PerspectiveCamera makeDefault fov={75} position={[-10, 5, 20]} />
    }
    else if (cameraPosition === 3) {
        camera = <PerspectiveCamera makeDefault fov={75} position={[-5, 5, 20]} />
    }

    return (
        <div className='w-full h-screen text-center'>
            <Canvas>
                {camera}
                <ambientLight intensity={0.03} />
                <pointLight color="orange" intensity={1} position={[-11.4, 2.8, 8.8]} distance={8} />
                <pointLight color="orange" intensity={1} position={[-3.2, 3, 4.5]} distance={8} />
                <pointLight color="orange" intensity={1} position={[3.6, 4, -1]} distance={2} />
                <pointLight color="white" intensity={1} position={[12.3, 1.9, 8.9]} distance={8} />
                {/* @ts-ignore*/}
                <Text3D font={'/Roboto_Medium_Regular.json'} position={[-10, 8, 0]} rotation={[0, -0.5, 0]}>
                    Hjemmesiden min er under arbeid!
                    <meshNormalMaterial />
                </Text3D>
                <Billboard
                    follow={true}
                    lockX={false}
                    lockY={false}
                    lockZ={false} // Lock the rotation on the z axis (default=false)
                    position={[0, -15, 0]}>
                    <Html>
                        <h1>hello</h1>
                        <p>world</p>
                    </Html>
                </Billboard>
                <Model />

                <OrbitControls />
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