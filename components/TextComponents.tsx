import React from 'react'
import { Text, Billboard } from '@react-three/drei';

function TextComponents({ cameraPosition, setCameraPosition }) {
    return (
        <group>
            <Billboard position={[-8, 1.5, 12]} onClick={() => setCameraPosition("about")}>
                <Text color={'white'} maxWidth={2}>
                    Jurist og teknolog. Jobber som seniorrådgiver om dagen. Spiller gitar og koder om natten.
                </Text>
            </Billboard>
            <Billboard position={[3.5, 5, -1]} onClick={() => setCameraPosition("law")}>
                <Text color={'white'} maxWidth={2}>
                    Utdannet jurist med master i rettsvitenskap fra UiO. Jobber med EU-juss, særlig personvern. Ekspert på Schrems II og bruk av skytjenester.
                </Text>
            </Billboard>
            <Billboard position={[10, 2.5, 10]} onClick={() => setCameraPosition("tech")}>
                <Text color={'yellow'} maxWidth={2}>
                    Utdannet teknolog med bachelor i programmering og systemarkitektur fra UiO. Spesialisert på nettverk- og kommunikasjonssikkerhet.
                </Text>
            </Billboard>
            <Billboard position={[10, 1.5, 11]} onClick={() => setCameraPosition("tech")}>
                <Text color={'yellow'} maxWidth={2}>
                    Denne siden er laget med Next.js, React, Tailwind, og Three.js. Modellen er laget i Blender.
                </Text>
            </Billboard>
            <Billboard position={[-5, 4.3, -4.5]} onClick={() => setCameraPosition("music")}>
                <Text color={'white'} maxWidth={2} anchorX="left">
                    Spiller gitar i bandet Gete. Vi er der du strømmer musikk!
                </Text>
            </Billboard>
            <Billboard position={[-18, 2.8, 17]}>
                <Text color={'white'} maxWidth={2} anchorX="left">
                    Venstreklikk/en finger: se rundt
                </Text>
            </Billboard>
            <Billboard position={[-18, 2.6, 17]}>
                <Text color={'white'} maxWidth={2} anchorX="left">
                    Høyreklikk/to fingre: panorer
                </Text>
            </Billboard>
            <Billboard position={[-18, 2.4, 17]}>
                <Text color={'white'} maxWidth={2} anchorX="left">
                    Scroll/klyp: zoom
                </Text>
            </Billboard>
        </group>
    )
}

export default TextComponents