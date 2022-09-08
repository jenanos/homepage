import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei';
import { Model } from './Model';

export const Main = () => {
    return (
        <div className='w-full h-screen text-center'>
            <Canvas>
                <ambientLight intensity={0.03} />
                <pointLight color="orange" intensity={1} position={[-11.4, 2.8, 8.8]} distance={8} />
                <pointLight color="orange" intensity={1} position={[-3.2, 3, 4.5]} distance={8} />
                <pointLight color="orange" intensity={1} position={[3.6, 4, -1]} distance={2} />
                <pointLight color="white" intensity={1} position={[12.3, 1.9, 8.9]} distance={8} />
                <Model />
                <OrbitControls />
                <Environment
                    files="dikhololo_night_1k.hdr"
                    background
                />
            </Canvas>
        </div>
    )
}
