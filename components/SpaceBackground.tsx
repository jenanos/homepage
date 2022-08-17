import React from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Environment, OrbitControls, Text3D } from '@react-three/drei';
import { Model } from './Model';

function SpaceBackground() {
    return (
        <Canvas>
            <ambientLight intensity={0.03} />
            <pointLight color="orange" intensity={1} position={[-11.4, 2.8, 8.8]} distance={8} />
            <pointLight color="orange" intensity={1} position={[-3.2, 3, 4.5]} distance={8} />
            <pointLight color="orange" intensity={1} position={[3.6, 4, -1]} distance={2} />
            <pointLight color="white" intensity={1} position={[12.3, 1.9, 8.9]} distance={8} />
            <Text3D font={'/assets/Roboto_Medium_Regular.json'} position={[-5, 10, 10]}>
                Hei, jeg er Jens!
                <meshNormalMaterial />
            </Text3D>
            <Model />
            <OrbitControls />
            <Environment
                files={[
                    'corona_ft.png',
                    'corona_bk.png',
                    'corona_up.png',
                    'corona_dn.png',
                    'corona_rt.png',
                    'corona_lf.png'
                ]}
                path='/background/'
                background
            />
        </Canvas>
    )
}

export default SpaceBackground