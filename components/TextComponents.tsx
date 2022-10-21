import React from 'react'
import { Text, Billboard } from '@react-three/drei';

function TextComponents() {
    return (
        <group>
            {/* Om meg */}
            <Billboard position={[-8, 1.5, 12]} >
                <Text color={'white'} maxWidth={2}>
                    {'Jurist og teknolog.\nJobber som seniorrådgiver om dagen.\nSpiller gitar og koder om natten.'}
                </Text>
            </Billboard>

            {/* Juss */}
            <Billboard position={[3.5, 5, -1]}>
                <Text color={'white'} maxWidth={2}>
                    Jurist med master i rettsvitenskap fra UiO. Jobber med EU-juss, særlig personvern. Ekspert på Schrems II og bruk av skytjenester.
                </Text>
            </Billboard>

            {/* Teknologi */}
            <Billboard position={[10, 2.65, 10]}>
                <Text color={'yellow'} maxWidth={2}>
                    {'Teknolog med bachelor i programmering og systemarkitektur fra UiO.\n\nSpesialisert på nettverk- og kommunikasjonssikkerhet.'}
                </Text>
            </Billboard>
            <Billboard position={[10, 1.75, 11]}>
                <Text color={'yellow'} maxWidth={1}>
                    {'Denne siden er laget med:\n- Next.js\n- React\n- Tailwind\n- Three.js\n- Blender'}
                </Text>
            </Billboard>

            {/* Musikk */}
            <Billboard position={[-5, 4, -4.5]}>
                <Text color={'white'} maxWidth={1.2} anchorX="left">
                    {'Spiller gitar i bandet Gete.\nVi er der du strømmer musikk!\n\nDu kan også klikke på radioen i tårnet.'}
                </Text>
            </Billboard>
        </group>
    )
}

export default TextComponents