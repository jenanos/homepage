import React from 'react'
import { MinimapThumb } from './MinimapThumb';
import { Minimap } from './Minimap';
import { Billboard, Text } from '@react-three/drei';

function OpenMinimap({ cameraPosition, showMap, toggleMap, minimapClicked, setMinimapClicked }) {
    let targetCoordinatesText: [number, number, number] = [-20, 5, 20];
    let targetCoordinatesThumb: [number, number, number] = [-20, 5, 20];
    let mapPosition: [number, number, number] = [-18, 4, 18];
    let mapLightPosition: [number, number, number] = [-18, 4, 18];
    let textSize: number = 0.1;
    let targetScene = cameraPosition;
    let showMapToggle = true;


    if (targetScene === "start") {
        targetCoordinatesText = [-19.32, 4.1, 19.2];
        targetCoordinatesThumb = [-19, 4, 19.4];
        mapPosition = [-18, 4, 18];
        mapLightPosition = [-18.2, 4.5, 18];
        textSize = 0.05;
        showMapToggle = false;
    }
    else if (targetScene === "about") {
        targetCoordinatesText = [-9.5, 1.27, 12.1];
        targetCoordinatesThumb = [-10, 1.82, 12.8];
        mapPosition = [-8.8, 2, 12];
        mapLightPosition = [-9, 2.4, 12];
        textSize = 0.08;
    }
    else if (targetScene === "law") {
        targetCoordinatesText = [1.4, 3.75, -3.7];
        targetCoordinatesThumb = [0.92, 4.2, -3.75];
        mapPosition = [2.25, 4.8, -2.5];
        mapLightPosition = [2.1, 5.3, -2.5];
        textSize = 0.06;
    }
    else if (targetScene === "tech") {
        targetCoordinatesText = [6.1, 1.57, 11.35];
        targetCoordinatesThumb = [6.3, 1.57, 11.74];
        mapPosition = [7.2, 2.5, 11];
        mapLightPosition = [7, 3, 11];
        textSize = 0.07;
    }
    else if (targetScene === "music") {
        targetCoordinatesText = [-5, 3, -4.5];
        targetCoordinatesThumb = [-4.8, 3.8, -3.4];
        mapPosition = [-4.8, 4.4, -4];
        mapLightPosition = [-5, 4.6, -3.9];
        textSize = 0.1;
    }

    if (minimapClicked[1] || !showMap) {
        mapPosition = [-18, 4, 18];
        mapLightPosition = [-18.2, 4.5, 18];
    }

    setMinimapClicked([targetScene, false, true]);

    return (

        <group>
            <group>
                <Billboard position={[mapPosition[0], mapPosition[1], mapPosition[2]]} >
                    <Minimap minimapClicked={minimapClicked} setMinimapClicked={setMinimapClicked} />
                </Billboard>
                <pointLight color="orange" intensity={0.8} position={[mapLightPosition[0], mapLightPosition[1], mapLightPosition[2]]} distance={2} />
            </group>
            {showMapToggle && <group onClick={() => toggleMap(!showMap)}>
                <Billboard position={[...targetCoordinatesText]}>
                    {/* @ts-ignore*/}
                    <Text color={'white'} maxWidth={2} fontSize={textSize}>
                        {'Trykk her for å\nskru av og på kartet:'}
                    </Text>
                </Billboard>
                <Billboard position={[...targetCoordinatesThumb]}>
                    <MinimapThumb scale={0.5} />
                </Billboard>
            </group>}
        </group>

    )
}

export default OpenMinimap