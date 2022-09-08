import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Text3D, Loader } from '@react-three/drei';
import { Model } from './Model';

export const Main = () => {
    return (
        <div className='w-full h-screen text-center'>
            <Canvas camera={{ position: [-20, 5, 20] }}>
                <ambientLight intensity={0.03} />
                <pointLight color="orange" intensity={1} position={[-11.4, 2.8, 8.8]} distance={8} />
                <pointLight color="orange" intensity={1} position={[-3.2, 3, 4.5]} distance={8} />
                <pointLight color="orange" intensity={1} position={[3.6, 4, -1]} distance={2} />
                <pointLight color="white" intensity={1} position={[12.3, 1.9, 8.9]} distance={8} />
                {/* @ts-ignore*/}
                <Text3D font={'/Roboto_Medium_Regular.json'} position={[-6, 10, 5]} rotation={[0, -0.5, 0]}>
                    Hei, jeg er Jens!
                    <meshNormalMaterial />
                </Text3D>
                {/* @ts-ignore*/}
                <Text3D font={'/Roboto_Medium_Regular.json'} position={[-10, 8, 0]} rotation={[0, -0.5, 0]}>
                    Hjemmesiden min er under arbeid!
                    <meshNormalMaterial />
                </Text3D>
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
