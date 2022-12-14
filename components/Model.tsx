// @ts-nocheck
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model({ musicReady, setMusicReady }) {
    const { nodes, materials } = useGLTF("/my-island.glb");
    return (
        <group dispose={null}>
            <group
                position={[12.34, 1.9, 8.93]}
                rotation={[-1.55, 0.06, -0.92]}
                scale={[0.53, 0.01, 0.27]}
            >
                <group position={[1.04, 76.73, -0.19]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.TV_2_0_1.geometry}
                        material={materials["tv-onyx"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.TV_2_0_2.geometry}
                        material={materials["tv-grey"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.TV_2_0_3.geometry}
                        material={materials["tv-white"]}
                    />
                </group>
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Water_low.geometry}
                material={materials.Water}
                position={[1.49, 0.73, 6.92]}
                scale={[5.76, 0.24, 4.42]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone.geometry}
                material={materials.Ground}
                position={[-0.11, -3.93, -0.07]}
            />
            <group position={[1.04, -0.42, -0.95]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube004.geometry}
                    material={materials.Ground}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube004_1.geometry}
                    material={materials.Surface}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube004_2.geometry}
                    material={materials.Pathway}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Water_high.geometry}
                material={materials.Water}
                position={[10.47, 5.21, 6.95]}
                scale={[4.38, 2.5, 2.79]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rock_1.geometry}
                material={materials["Rock.002"]}
                position={[8.09, 3.6, -6.71]}
                rotation={[-0.02, 0, -0.07]}
                scale={2.6}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rock_2.geometry}
                material={materials["Rock.001"]}
                position={[4.45, 3.52, -13.44]}
                rotation={[-0.02, 0, -0.01]}
                scale={8.5}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rock_3.geometry}
                material={materials.Rock}
                position={[8.8, 3.32, -13.02]}
                rotation={[-0.03, 0, -0.02]}
                scale={3.43}
            />
            <group position={[1.85, 0.96, 5.87]} rotation={[0.01, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder016.geometry}
                    material={materials["Green.001"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder016_1.geometry}
                    material={materials.Pink}
                />
            </group>
            <group position={[-0.8, 0.97, 9.17]} rotation={[0, 0, 0.01]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder016.geometry}
                    material={materials["Green.001"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder016_1.geometry}
                    material={materials.Pink}
                />
            </group>
            <group position={[-12.04, 0.98, -13.43]} rotation={[0.02, 0, 0.08]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder018.geometry}
                    material={materials["Wood.002"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder018_1.geometry}
                    material={materials["Green.002"]}
                />
            </group>
            <group position={[13.34, 5.48, 0.46]} rotation={[0.04, 0, -0.03]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder018.geometry}
                    material={materials["Wood.002"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder018_1.geometry}
                    material={materials["Green.002"]}
                />
            </group>
            <group position={[10.45, 5.25, 10.76]} rotation={[0.06, 0, 0.02]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder025.geometry}
                    material={materials["Wood.004"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder025_1.geometry}
                    material={materials["Green.005"]}
                />
            </group>
            <group position={[11.41, 5.14, 12.92]} rotation={[0.06, 0, 0.02]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder028.geometry}
                    material={materials["Wood.005"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder028_1.geometry}
                    material={materials["Green.006"]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plant_3.geometry}
                material={materials["DarkGreen.004"]}
                position={[-8.13, 0.96, 10.81]}
                rotation={[0.04, 0, 0.08]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plant_4.geometry}
                material={materials["Green.007"]}
                position={[-6.92, 1.27, -7.42]}
                rotation={[0.02, 0, 0.08]}
            />
            <group position={[-5.49, 1.43, -8.29]} rotation={[-0.05, 0, 0.06]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube082.geometry}
                    material={materials["White.003"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube082_1.geometry}
                    material={materials["Black.003"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube082_2.geometry}
                    material={materials["Orange.004"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube082_3.geometry}
                    material={materials["LightOrange.003"]}
                />
            </group>
            <group
                position={[-8.23, 1.12, -11.85]}
                rotation={[-0.05, 0, 0.01]}
                scale={1.22}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube081.geometry}
                    material={materials["White.004"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube081_1.geometry}
                    material={materials["Black.004"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube081_2.geometry}
                    material={materials["Orange.005"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube081_3.geometry}
                    material={materials["LightOrange.004"]}
                />
            </group>
            <group position={[-11.8, 1, -6.49]} rotation={[-0.03, 0, 0.07]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube089.geometry}
                    material={materials["Wood.001"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube089_1.geometry}
                    material={materials["Orange.003"]}
                />
            </group>
            <group position={[-6.86, 1.42, -5.08]} rotation={[-0.03, 0, 0.07]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube090.geometry}
                    material={materials["Wood.003"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube090_1.geometry}
                    material={materials["Orange.006"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube090_2.geometry}
                    material={materials["LightOrange.005"]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Grass.geometry}
                material={materials["Green.008"]}
                position={[-3.96, 1.31, 4.75]}
                rotation={[0.07, 0, 0.04]}
            />
            <group
                position={[3.69, 3.47, -1.1]}
                rotation={[0.04, 0, 0.01]}
                scale={0.82}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder009.geometry}
                    material={materials["Wood.006"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder009_1.geometry}
                    material={materials.LightWood}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder009_2.geometry}
                    material={materials.Fire}
                />
            </group>
            <group
                position={[12.94, 3.45, -2.93]}
                rotation={[-0.01, 0, -0.02]}
                scale={13.59}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube021.geometry}
                    material={materials["Rock.003"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube021_1.geometry}
                    material={materials.Green}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rock_6.geometry}
                material={materials["Rock.004"]}
                position={[13.12, 3.03, -10.84]}
                rotation={[-0.02, 0, -0.01]}
                scale={7.91}
            />
            <group
                position={[0.83, 3.48, -12.98]}
                rotation={[-0.02, 0, -0.03]}
                scale={3.26}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube019.geometry}
                    material={materials["Rock.005"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube019_1.geometry}
                    material={materials["moss.green"]}
                />
            </group>
            <group
                position={[0.51, 1.8, -8.37]}
                rotation={[0.07, 0, 0.05]}
                scale={3.13}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube019.geometry}
                    material={materials["Rock.005"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube019_1.geometry}
                    material={materials["moss.green"]}
                />
            </group>
            <group
                position={[7.55, 3.45, -9.85]}
                rotation={[-0.03, 0, 0.03]}
                scale={1.55}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001.geometry}
                    material={materials.Wood}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001_1.geometry}
                    material={materials["Green.011"]}
                />
            </group>
            <group position={[5.36, 3.6, -9.8]} rotation={[-0.14, 0, -0.07]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder064.geometry}
                    material={materials["Wood.007"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder064_1.geometry}
                    material={materials.Orange}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder064_2.geometry}
                    material={materials["LightWood.001"]}
                />
            </group>
            <group position={[10.53, 3.5, -5.89]} rotation={[-0.02, 0, -0.03]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder062.geometry}
                    material={materials["Wood.008"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder062_1.geometry}
                    material={materials["Orange.001"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder062_2.geometry}
                    material={materials.LightOrange}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plant_4001.geometry}
                material={materials["Green.012"]}
                position={[6.8, 3.74, 1.45]}
                rotation={[-0.02, 0, 0.09]}
            />
            <group position={[8.46, 3.65, -1.83]} rotation={[-0.02, 0, -0.03]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane003.geometry}
                    material={materials.Yellow}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane003_1.geometry}
                    material={materials["Pink.001"]}
                />
            </group>
            <group position={[2.74, 3.68, -10.01]} rotation={[-0.02, 0, -0.07]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder010.geometry}
                    material={materials["Wood.009"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder010_1.geometry}
                    material={materials["Green.013"]}
                />
            </group>
            <group position={[1.38, 1.2, 2.05]} rotation={[0, 0, -0.03]} scale={1.05}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube070.geometry}
                    material={materials.White}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube070_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube070_2.geometry}
                    material={materials["Green.014"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube070_3.geometry}
                    material={materials["DarkGreen.005"]}
                />
            </group>
            <group position={[2.98, 1.24, 3.45]} rotation={[0, 0, -0.02]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube080.geometry}
                    material={materials["White.001"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube080_1.geometry}
                    material={materials["Black.001"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube080_2.geometry}
                    material={materials["Orange.002"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube080_3.geometry}
                    material={materials["LightWood.003"]}
                />
            </group>
            <group position={[5.88, 3.44, -0.6]} rotation={[0.03, 0, 0.01]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder011.geometry}
                    material={materials["Wood.010"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder011_1.geometry}
                    material={materials["Green.015"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder011_2.geometry}
                    material={materials.Mushroom_Top}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder011_3.geometry}
                    material={materials.Mushroom_Bottom}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder011_4.geometry}
                    material={materials["DarkGreen.006"]}
                />
            </group>
            <group position={[-11.91, 1, -1.16]} rotation={[0, -0.03, 0.1]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane029.geometry}
                    material={materials["Green.016"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane029_1.geometry}
                    material={materials.Cyan}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane029_2.geometry}
                    material={materials["Yellow.001"]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Grass001.geometry}
                material={materials["Green.018"]}
                position={[-4.76, 1.27, 9.46]}
                rotation={[0.04, 0, 0.07]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Grass002.geometry}
                material={materials["Green.018"]}
                position={[2.04, 1.2, 2.63]}
                rotation={[0, 0, -0.02]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Grass003.geometry}
                material={materials["Green.018"]}
                position={[-4.28, 1.28, 10.03]}
                rotation={[0.04, 0, 0.07]}
            />
            <group position={[12.78, 5.45, 2.19]} rotation={[0.04, 0, -0.03]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube044.geometry}
                    material={materials["Green.017"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube044_1.geometry}
                    material={materials["Berry.002"]}
                />
            </group>
            <group
                position={[-8.92, 1.09, -7.71]}
                rotation={[0.02, 0, 0.08]}
                scale={1.6}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder002.geometry}
                    material={materials["Wood.013"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder002_1.geometry}
                    material={materials["Green.019"]}
                />
            </group>
            <group position={[-9.4, 1.18, -5.2]} rotation={[-0.03, 0, 0.07]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder061.geometry}
                    material={materials["Wood.014"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder061_1.geometry}
                    material={materials["Orange.007"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder061_2.geometry}
                    material={materials["LightOrange.001"]}
                />
            </group>
            <group position={[-10.3, 1.05, 1.9]} rotation={[0.28, -1.18, 0.26]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_1.geometry}
                    material={materials["Wood.012"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_2.geometry}
                    material={materials["Mushroom_Top.001"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_3.geometry}
                    material={materials["Mushroom_Bottom.001"]}
                />
            </group>
            <group
                position={[-7.11, 1, 11.25]}
                rotation={[-0.03, 0, 0.07]}
                scale={1.58}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder003.geometry}
                    material={materials["Wood.014"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder003_1.geometry}
                    material={materials["Orange.007"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder003_2.geometry}
                    material={materials["LightOrange.001"]}
                />
            </group>
            <group
                position={[1.84, 1.52, 11.69]}
                rotation={[0.02, 0, 0.08]}
                scale={1.32}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder005.geometry}
                    material={materials["Wood.002"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder005_1.geometry}
                    material={materials["Green.002"]}
                />
            </group>
            <group
                position={[4.87, 3.68, -3.99]}
                rotation={[0.1, -0.7, 0.06]}
                scale={0.6}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder020.geometry}
                    material={materials.DarkWood}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder020_1.geometry}
                    material={materials["Black.005"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder020_2.geometry}
                    material={materials.LightGreen}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder020_3.geometry}
                    material={materials["Green.009"]}
                />
            </group>
            <group
                position={[-3.22, 0.96, 6.8]}
                rotation={[0, 1.37, 0.01]}
                scale={0.13}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder004.geometry}
                    material={materials["Wood.015"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder004_1.geometry}
                    material={materials["LightWood.004"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder004_2.geometry}
                    material={materials.String}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Handpainted_ladder.geometry}
                material={materials["ladder-brown"]}
                position={[1.63, 2.76, -3.05]}
            />
            <group
                position={[10.81, 1.85, 11.19]}
                rotation={[0, -1.42, 0]}
                scale={0.8}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials.desktop_glass}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2_1.geometry}
                    material={materials.desktop_case}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2_2.geometry}
                    material={materials.desktop_fans}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2_3.geometry}
                    material={materials.desktop_parts}
                />
            </group>
            <group position={[-11.01, 2.82, 8.91]} rotation={[-0.05, 1.12, 0.09]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_Latern_01_M_0_1.geometry}
                    material={materials.Material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_Latern_01_M_0_2.geometry}
                    material={materials["Material.005"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_Latern_01_M_0_3.geometry}
                    material={materials["Material.006"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_Latern_01_M_0_4.geometry}
                    material={materials["Material.007"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_Latern_01_M_0_5.geometry}
                    material={materials["Material.008"]}
                />
            </group>
            <group position={[-6.29, 3.27, 1.72]} rotation={[-0.1, 1.25, 0.13]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_Latern_01_M_0_1.geometry}
                    material={materials.Material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_Latern_01_M_0_2.geometry}
                    material={materials["Material.005"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_Latern_01_M_0_3.geometry}
                    material={materials["Material.006"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_Latern_01_M_0_4.geometry}
                    material={materials["Material.007"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_Latern_01_M_0_5.geometry}
                    material={materials["Material.008"]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["Chair_-_low_poly"].geometry}
                material={materials.Chair}
                position={[-3.95, 4.37, -5.79]}
                rotation={[-1.57, -0.01, -2.97]}
                scale={0.26}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder.geometry}
                material={materials["Black.001"]}
                position={[-7.42, 2.16, 11.22]}
                rotation={[0.39, -1.02, -1.37]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={materials.Ground}
                position={[8.39, 1.12, 10.93]}
            />
            <group position={[-4.61, 4.46, -4.84]} onClick={() => setMusicReady(!musicReady)}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1.geometry}
                    material={materials["Material.002"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1_1.geometry}
                    material={materials["Material.003"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1_2.geometry}
                    material={materials["Material.004"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1_3.geometry}
                    material={materials["Material.009"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1_4.geometry}
                    material={materials["Material.010"]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Office_desk_ComputerDesk_0.geometry}
                material={materials.ComputerDesk}
                position={[10.65, 1.61, 11.74]}
                rotation={[Math.PI, -0.37, Math.PI]}
                scale={0.72}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube000_ComputerDesk_0.geometry}
                material={materials.ComputerDesk}
                position={[10.61, 1.6, 11.18]}
                rotation={[-3.12, 0.3, -3.12]}
                scale={0.57}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Low_Poly_Watchtower.geometry}
                material={materials.Atlas}
                position={[-3.96, 1.28, -5.85]}
                rotation={[-1.55, 0, -2.91]}
                scale={0.56}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Low_Poly_Lantern.geometry}
                material={materials["LANTERN_MAT_FINAL.002"]}
                position={[-3.37, 4.34, -5.49]}
                rotation={[0.01, -1.34, -0.01]}
                scale={0.06}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Low_Poly_Coffee_table.geometry}
                material={materials.base_color}
                position={[13.26, 1.48, 8.68]}
                rotation={[-0.13, -1.08, -0.1]}
                scale={0.1}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Instrument_Guitar_Ultra_Low_Poly.geometry}
                material={materials.Meshessipropinstrumentguitar041Mtl}
                position={[-4.02, 4.6, -5.55]}
                rotation={[-0.73, 0.14, 0.99]}
                scale={0.13}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["Low_Poly,_Old-Style_Couch"].geometry}
                material={materials["Material.001"]}
                position={[10.85, 1.51, 9.66]}
                rotation={[-3, 1.13, 3.02]}
                scale={[0.77, 0.03, 0.26]}
            />
            <group
                position={[2.76, 3.54, -2.24]}
                rotation={[-1, 1.45, 1.07]}
                scale={[0.15, 0.05, 0.1]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002.geometry}
                    material={materials["Lovsamling-pages"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002_1.geometry}
                    material={materials["lovsamling-image-text"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002_2.geometry}
                    material={materials["lovsamling-red"]}
                />
            </group>
            <group
                position={[-7.39, 1.99, 11.28]}
                rotation={[-Math.PI, 1.06, -Math.PI]}
                scale={[-0.24, -0.29, -0.02]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube003.geometry}
                    material={materials["Material.013"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube003_1.geometry}
                    material={materials["Material.014"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube003_2.geometry}
                    material={materials["Jens Osberg - farger"]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Monitor.geometry}
                material={materials.Monitor}
                position={[10.62, 2.14, 11.76]}
                rotation={[-1.57, -0.01, -1.17]}
                scale={0.85}
            />
        </group>
    );
}

useGLTF.preload("/my-island.glb");
