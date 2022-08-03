import React from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei';

function SpaceBackground() {
    return (
        <Canvas>
            <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <mesh>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
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