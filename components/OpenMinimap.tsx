import React from 'react'
import { MinimapThumb } from './MinimapThumb';
import { Billboard, Text } from '@react-three/drei';

function OpenMinimap({ cameraPosition, showMap, toggleMap, setMapPosition, setMapLightPosition }) {
    let targetCoordinatesText: [number, number, number] = [-20, 5, 20];
    let targetCoordinatesThumb: [number, number, number] = [-20, 5, 20];
    let textSize: number = 0.1;

    if (cameraPosition === "start") {
        targetCoordinatesText = [-19.32, 4.1, 19.2];
        targetCoordinatesThumb = [-19, 4, 19.4];
        setMapPosition([-18, 4, 18]);
        setMapLightPosition([-18.2, 4.5, 18]);
        textSize = 0.05;
    }
    else if (cameraPosition === "about") {
        targetCoordinatesText = [-9.5, 1.27, 12.1];
        targetCoordinatesThumb = [-10, 1.82, 12.8];
        setMapPosition([-8.8, 2, 12]);
        setMapLightPosition([-9, 2.4, 12]);
        textSize = 0.08;
    }
    else if (cameraPosition === "law") {
        targetCoordinatesText = [1.4, 3.75, -3.7];
        targetCoordinatesThumb = [0.92, 4.2, -3.75];
        setMapPosition([2.25, 4.8, -2.5]);
        setMapLightPosition([2.1, 5.3, -2.5]);
        textSize = 0.06;
    }
    else if (cameraPosition === "tech") {
        targetCoordinatesText = [6.1, 1.57, 11.35];
        targetCoordinatesThumb = [6.3, 1.57, 11.74];
        setMapPosition([7.2, 2.5, 11]);
        setMapLightPosition([7, 3, 11]);
        textSize = 0.07;
    }
    else if (cameraPosition === "music") {
        targetCoordinatesText = [-5, 3, -4.5];
        targetCoordinatesThumb = [-4.8, 3.8, -3.4];
        setMapPosition([-4.8, 4.4, -4]);
        setMapLightPosition([-5, 4.6, -3.9]);
        textSize = 0.1;
    }
    return (

        <group onClick={() => toggleMap(!showMap)}>
            <Billboard position={[...targetCoordinatesText]}>
                {/* @ts-ignore*/}
                <Text color={'white'} maxWidth={2} fontSize={textSize}>
                    {'Trykk her for å\nskru av og på kartet:'}
                </Text>
            </Billboard>
            <Billboard position={[...targetCoordinatesThumb]}>
                <MinimapThumb scale={0.5} />
            </Billboard>
        </group>

    )
}

export default OpenMinimap