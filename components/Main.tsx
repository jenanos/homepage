import React, { useState } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Environment, OrbitControls, Text3D, Loader, PerspectiveCamera, Text, Billboard } from '@react-three/drei';
import { Model } from './Model';


function ChangeCamera({ cameraPosition }) {
    const camera = useThree((state) => state.camera)
    let orbitPoint;
    if (cameraPosition === 1) {
        camera.position.set(-20, 5, 20);
        camera.lookAt(0, 0, 0);
        orbitPoint = [0, 0, 0];
    }
    else if (cameraPosition === 2) {
        camera.position.set(-9, 2.5, 14);
        camera.lookAt(-10, 2, 10);
        orbitPoint = [-8, 2, 10];
    }
    else if (cameraPosition === 3) {
        camera.position.set(0.6, 5.3, -4.6);
        camera.lookAt(3.5, 3.5, -1);
        orbitPoint = [3.5, 3.5, -1];
    }
    else if (cameraPosition === 4) {
        camera.position.set(6, 2.0, 11);
        camera.lookAt(10, 2, 9.6);
        orbitPoint = [10, 2, 9.6];
    }
    else if (cameraPosition === 5) {
        camera.position.set(-6, 5.5, -2);
        camera.lookAt(-4, 4.6, -5.5);
        orbitPoint = [-4, 4.6, -5.5];
    }

    return <OrbitControls target={orbitPoint} />
}



function Main({ cameraPosition }) {
    return (
        <div className='w-full h-screen text-center'>
            <Canvas>
                <pointLight color="orange" intensity={1} position={[-11., 2.8, 8.9]} distance={8} />
                <pointLight color="orange" intensity={1} position={[-6.2, 3.2, 1.7]} distance={8} />
                <pointLight color="orange" intensity={1} position={[-3.3, 4.8, -5.4]} distance={2} />
                <pointLight color="orange" intensity={1} position={[3.6, 4, -1]} distance={3} />
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
                <Billboard position={[-8, 1.5, 12]}>
                    <Text color={'white'} maxWidth={2}>
                        Hei, jeg er Jens! Jurist og teknolog. Jobber som seniorrådgiver om dagen. Spiller gitar og koder om natten.
                    </Text>
                </Billboard>
                <Billboard position={[3.5, 5, -1]}>
                    <Text color={'white'} maxWidth={2}>
                        Utdannet jurist med master i rettsvitenskap fra UiO. Jobber med EU-juss, særlig personvern. Ekspert på Schrems II og bruk av skytjenester.
                    </Text>
                </Billboard>
                <Billboard position={[10, 2.5, 10]}>
                    <Text color={'yellow'} maxWidth={2}>
                        Utdannet teknolog med en bachelor i programmering og systemarkitektur fra UiO. Er spesialisert på nettverk- og kommunikasjonssikkerhet. Denne siden er laget med Next.js, React, Tailwind, og Three.js. Modellen er laget i Blender.
                    </Text>
                </Billboard>
                <Billboard position={[-4, 4.6, -3.5]}>
                    <Text color={'white'} maxWidth={2}>
                        Spiller gitar i bandet Gete. Vi er der du strømmer musikk!
                    </Text>
                </Billboard>
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