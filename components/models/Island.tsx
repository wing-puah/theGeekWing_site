/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Boooooop (https://sketchfab.com/wri15203659)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/low-poly-medieval-island-361f02265937462a8969d78c5be1fc6c
title: Low Poly Medieval Island
*/

import { useRef, useState } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import { CameraState } from 'components/home/config';
import { font, scale } from './utils';

function Island(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/low_poly_medieval_island/scene.gltf');
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={[0.17, 0.17, 0.17]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[-0.01, -0.19, 0.51]} scale={[1.72, 1.76, 1.72]}>
              <mesh
                geometry={nodes.polySurface1_WaterL_0.geometry}
                material={nodes.polySurface1_WaterL_0.material}
              />
              <group position={[0, 0, -1.87]}>
                <mesh
                  geometry={nodes.polySurface31_Stone_0.geometry}
                  material={nodes.polySurface31_Stone_0.material}
                />
              </group>
              <mesh
                geometry={nodes.polySurface32_Stone_0.geometry}
                material={nodes.polySurface32_Stone_0.material}
              />
              <mesh
                geometry={nodes.polySurface32_moss_0.geometry}
                material={materials.moss}
              />
              <mesh
                geometry={nodes.polySurface32_Dirt_0.geometry}
                material={materials.Dirt}
              />
              <mesh
                geometry={nodes.polySurface32_Grass_0.geometry}
                material={materials.Grass}
              />
              <group
                position={[-7.79, 7.22, 2.1]}
                rotation={[0.14, -0.11, 0.15]}
                scale={[0.24, 0.04, 0.24]}
              >
                <mesh
                  geometry={nodes.polySurface33_Stone_0.geometry}
                  material={nodes.polySurface33_Stone_0.material}
                />
              </group>
              <group
                position={[-1.53, 7.53, 10.64]}
                rotation={[2.25, -1.33, 2.31]}
                scale={[0.24, 0.04, 0.24]}
              >
                <mesh
                  geometry={nodes.polySurface34_Stone_0.geometry}
                  material={nodes.polySurface34_Stone_0.material}
                />
              </group>
              <group
                position={[1.66, 7.79, 11.97]}
                rotation={[2.13, -1.33, 2.22]}
                scale={[0.24, 0.05, 0.24]}
              >
                <mesh
                  geometry={nodes.polySurface35_Stone_0.geometry}
                  material={nodes.polySurface35_Stone_0.material}
                />
              </group>
              <group
                position={[2.24, 7.84, 7.08]}
                rotation={[0.22, -0.38, 0.16]}
                scale={[0.24, 0.06, 0.24]}
              >
                <mesh
                  geometry={nodes.polySurface36_Stone_0.geometry}
                  material={nodes.polySurface36_Stone_0.material}
                />
              </group>
              <group
                position={[5.67, 7.84, 20.27]}
                rotation={[2.88, -0.64, 3.06]}
                scale={[0.24, 0.06, 0.24]}
              >
                <mesh
                  geometry={nodes.polySurface37_Stone_0.geometry}
                  material={nodes.polySurface37_Stone_0.material}
                />
              </group>
              <group
                position={[-9.75, 7.02, 14.11]}
                rotation={[2.31, 1.43, -2.22]}
                scale={[0.19, 0.05, 0.24]}
              >
                <mesh
                  geometry={nodes.polySurface38_Stone_0.geometry}
                  material={nodes.polySurface38_Stone_0.material}
                />
              </group>
              <group
                position={[-9.81, 7.77, 11.82]}
                rotation={[0.27, 0.95, -0.06]}
                scale={[0.27, 0.07, 0.34]}
              >
                <mesh
                  geometry={nodes.polySurface39_Stone_0.geometry}
                  material={nodes.polySurface39_Stone_0.material}
                />
              </group>
              <group
                position={[-2.07, 7.22, 14.46]}
                rotation={[0.14, -0.11, 0.15]}
                scale={[0.24, 0.04, 0.24]}
              >
                <mesh
                  geometry={nodes.polySurface40_Stone_0.geometry}
                  material={nodes.polySurface40_Stone_0.material}
                />
              </group>
              <group
                position={[2.92, 7.89, 23.33]}
                rotation={[1.17, -1.32, 1.22]}
                scale={[0.27, 0.04, 0.27]}
              >
                <mesh
                  geometry={nodes.polySurface41_Stone_0.geometry}
                  material={nodes.polySurface41_Stone_0.material}
                />
              </group>
            </group>
            <group position={[-0.49, 0, -0.64]}>
              <mesh
                geometry={nodes['calendula-flower5_green_0'].geometry}
                material={nodes['calendula-flower5_green_0'].material}
              />
              <mesh
                geometry={nodes['calendula-flower5_White_0'].geometry}
                material={nodes['calendula-flower5_White_0'].material}
              />
              <mesh
                geometry={nodes['calendula-flower5_Pollen_0'].geometry}
                material={nodes['calendula-flower5_Pollen_0'].material}
              />
            </group>
            <group position={[-5.59, 0, 22.82]}>
              <mesh
                geometry={nodes['calendula-flower6_green_0'].geometry}
                material={nodes['calendula-flower6_green_0'].material}
              />
              <mesh
                geometry={nodes['calendula-flower6_White_0'].geometry}
                material={nodes['calendula-flower6_White_0'].material}
              />
              <mesh
                geometry={nodes['calendula-flower6_Pollen_0'].geometry}
                material={nodes['calendula-flower6_Pollen_0'].material}
              />
            </group>
            <group
              position={[-11.95, 0, -16.19]}
              rotation={[0, -Math.PI / 3, 0]}
            >
              <mesh
                geometry={nodes['calendula-flower7_green_0'].geometry}
                material={nodes['calendula-flower7_green_0'].material}
              />
              <mesh
                geometry={nodes['calendula-flower7_White_0'].geometry}
                material={nodes['calendula-flower7_White_0'].material}
              />
              <mesh
                geometry={nodes['calendula-flower7_Pollen_0'].geometry}
                material={nodes['calendula-flower7_Pollen_0'].material}
              />
            </group>
            <group
              position={[49.47, 0, -50.1]}
              rotation={[-Math.PI, -0.26, -Math.PI]}
            >
              <mesh
                geometry={nodes['calendula-flower9_green_0'].geometry}
                material={nodes['calendula-flower9_green_0'].material}
              />
              <mesh
                geometry={nodes['calendula-flower9_White_0'].geometry}
                material={nodes['calendula-flower9_White_0'].material}
              />
              <mesh
                geometry={nodes['calendula-flower9_Pollen_0'].geometry}
                material={nodes['calendula-flower9_Pollen_0'].material}
              />
            </group>
            <mesh
              geometry={nodes['calendula-flower10_green_0'].geometry}
              material={nodes['calendula-flower10_green_0'].material}
            />
            <mesh
              geometry={nodes['calendula-flower10_Flower_0'].geometry}
              material={nodes['calendula-flower10_Flower_0'].material}
            />
            <mesh
              geometry={nodes['calendula-flower10_Pollen_0'].geometry}
              material={nodes['calendula-flower10_Pollen_0'].material}
            />
            <group
              position={[5.11, -1.1, 34.44]}
              rotation={[0, Math.PI / 6, 0]}
              scale={[1.1, 1.1, 1.1]}
            >
              <mesh
                geometry={nodes['calendula-flower13_green_0'].geometry}
                material={nodes['calendula-flower13_green_0'].material}
              />
              <mesh
                geometry={nodes['calendula-flower13_Flower_0'].geometry}
                material={nodes['calendula-flower13_Flower_0'].material}
              />
              <mesh
                geometry={nodes['calendula-flower13_Pollen_0'].geometry}
                material={nodes['calendula-flower13_Pollen_0'].material}
              />
            </group>
            <group
              position={[18.54, -1.2, 33.5]}
              rotation={[0, Math.PI / 6, 0]}
              scale={[1.1, 1.1, 1.1]}
            >
              <mesh
                geometry={nodes['calendula-flower14_green_0'].geometry}
                material={nodes['calendula-flower14_green_0'].material}
              />
              <mesh
                geometry={nodes['calendula-flower14_Flower_0'].geometry}
                material={nodes['calendula-flower14_Flower_0'].material}
              />
              <mesh
                geometry={nodes['calendula-flower14_Pollen_0'].geometry}
                material={nodes['calendula-flower14_Pollen_0'].material}
              />
            </group>
            <group position={[21.94, 0, 20.72]} rotation={[0, Math.PI / 3, 0]}>
              <mesh
                geometry={nodes['calendula-flower15_green_0'].geometry}
                material={nodes['calendula-flower15_green_0'].material}
              />
              <mesh
                geometry={nodes['calendula-flower15_White_0'].geometry}
                material={nodes['calendula-flower15_White_0'].material}
              />
              <mesh
                geometry={nodes['calendula-flower15_Pollen_0'].geometry}
                material={nodes['calendula-flower15_Pollen_0'].material}
              />
            </group>
            <group
              position={[-15.78, 0, -23.31]}
              rotation={[0, -Math.PI / 4, 0]}
            >
              <mesh
                geometry={nodes['calendula-flower17_green_0'].geometry}
                material={nodes['calendula-flower17_green_0'].material}
              />
              <mesh
                geometry={nodes['calendula-flower17_White_0'].geometry}
                material={nodes['calendula-flower17_White_0'].material}
              />
              <mesh
                geometry={nodes['calendula-flower17_Pollen_0'].geometry}
                material={nodes['calendula-flower17_Pollen_0'].material}
              />
            </group>
            <group
              position={[6.54, 10.87, 34.07]}
              rotation={[-1.57, -0.07, -0.03]}
              scale={[5.07, 5.07, 3.93]}
            >
              <mesh
                geometry={nodes.well_cobble_0.geometry}
                material={nodes.well_cobble_0.material}
              />
              <mesh
                geometry={nodes.well_Wood_0.geometry}
                material={nodes.well_Wood_0.material}
              />
              <mesh
                geometry={nodes.well_Roof_0.geometry}
                material={nodes.well_Roof_0.material}
              />
              <mesh
                geometry={nodes.well_well_0_0.geometry}
                material={materials.well_0}
              />
              <mesh
                geometry={nodes.well_Metal_0.geometry}
                material={nodes.well_Metal_0.material}
              />
            </group>
            <group
              position={[9.14, -4.44, 2.09]}
              rotation={[0, -0.26, 0]}
              scale={[1.38, 1.38, 1.38]}
            >
              <mesh
                geometry={nodes.polySurface10_Wood_0.geometry}
                material={nodes.polySurface10_Wood_0.material}
              />
              <mesh
                geometry={nodes.polySurface10_Roof_0.geometry}
                material={nodes.polySurface10_Roof_0.material}
              />
              <mesh
                geometry={nodes.polySurface10_plaster_0.geometry}
                material={materials.plaster}
              />
              <mesh
                geometry={nodes.polySurface10_cobble_0.geometry}
                material={nodes.polySurface10_cobble_0.material}
              />
              <mesh
                geometry={nodes.polySurface10_lambert11_0.geometry}
                material={materials.lambert11}
              />
            </group>
            <group
              position={[-5.96, 12.51, 6.95]}
              rotation={[-0.01, -0.03, 0.05]}
              scale={[0.9, 1.58, 0.9]}
            >
              <mesh
                geometry={nodes.pCylinder2_Wood_0.geometry}
                material={nodes.pCylinder2_Wood_0.material}
              />
              <mesh
                geometry={nodes.pCylinder2_Metal_0.geometry}
                material={nodes.pCylinder2_Metal_0.material}
              />
            </group>
            <group
              position={[-5.85, 12.56, 4.85]}
              rotation={[0.02, -0.05, -0.02]}
              scale={[0.9, 1.58, 0.9]}
            >
              <mesh
                geometry={nodes.pCylinder3_Wood_0.geometry}
                material={nodes.pCylinder3_Wood_0.material}
              />
              <mesh
                geometry={nodes.pCylinder3_Metal_0.geometry}
                material={nodes.pCylinder3_Metal_0.material}
              />
            </group>
            <group
              position={[-5.85, 15.69, 5.98]}
              rotation={[0, -0.04, 0.04]}
              scale={[0.9, 1.58, 0.9]}
            >
              <mesh
                geometry={nodes.pCylinder4_Wood_0.geometry}
                material={nodes.pCylinder4_Wood_0.material}
              />
              <mesh
                geometry={nodes.pCylinder4_Metal_0.geometry}
                material={nodes.pCylinder4_Metal_0.material}
              />
            </group>
            <group
              position={[-0.93, 8.48, 47.63]}
              rotation={[0, 0.86, 0]}
              scale={[1.94, 0.4, 7.13]}
            >
              <mesh
                geometry={nodes.pCube1_Wood_0.geometry}
                material={nodes.pCube1_Wood_0.material}
              />
            </group>
            <group
              position={[-3.53, 6.66, 47.73]}
              rotation={[0, 0.52, 0]}
              scale={[1.94, 0.4, 7.13]}
            >
              <mesh
                geometry={nodes.pCube2_Wood_0.geometry}
                material={nodes.pCube2_Wood_0.material}
              />
            </group>
            <group
              position={[-6.48, 4.69, 47.75]}
              rotation={[0, 1.09, 0]}
              scale={[1.94, 0.4, 7.13]}
            >
              <mesh
                geometry={nodes.pCube3_Wood_0.geometry}
                material={nodes.pCube3_Wood_0.material}
              />
            </group>
            <group
              position={[-7.85, 2.21, 49.01]}
              rotation={[0, 0.91, 0]}
              scale={[1.94, 0.4, 7.13]}
            >
              <mesh
                geometry={nodes.pCube4_Wood_0.geometry}
                material={nodes.pCube4_Wood_0.material}
              />
            </group>
            <group
              position={[-10.49, -0.83, 49.1]}
              rotation={[0, 0.56, 0]}
              scale={[1.94, 0.4, 7.13]}
            >
              <mesh
                geometry={nodes.pCube5_Wood_0.geometry}
                material={nodes.pCube5_Wood_0.material}
              />
            </group>
            <group
              position={[-11.29, -3.62, 50.94]}
              rotation={[0, 0.87, 0]}
              scale={[1.94, 0.4, 7.13]}
            >
              <mesh
                geometry={nodes.pCube6_Wood_0.geometry}
                material={nodes.pCube6_Wood_0.material}
              />
            </group>
            <group
              position={[-12.66, -6.58, 50.94]}
              rotation={[0, 0.87, 0]}
              scale={[1.94, 0.4, 7.13]}
            >
              <mesh
                geometry={nodes.pCube7_Wood_0.geometry}
                material={nodes.pCube7_Wood_0.material}
              />
            </group>
            <group
              position={[-18.28, -7.81, 53.83]}
              rotation={[0, 1.44, 0]}
              scale={[2.58, 0.75, 14.12]}
            >
              <mesh
                geometry={nodes.pCube8_Wood_0.geometry}
                material={nodes.pCube8_Wood_0.material}
              />
            </group>
            <group
              position={[-18.28, -7.81, 56.71]}
              rotation={[0, 1.44, 0]}
              scale={[2.58, 0.75, 14.12]}
            >
              <mesh
                geometry={nodes.pCube9_Wood_0.geometry}
                material={nodes.pCube9_Wood_0.material}
              />
            </group>
            <group
              position={[-18.28, -7.81, 59.61]}
              rotation={[0, 1.44, 0]}
              scale={[2.58, 0.75, 14.12]}
            >
              <mesh
                geometry={nodes.pCube10_Wood_0.geometry}
                material={nodes.pCube10_Wood_0.material}
              />
            </group>
            <group
              position={[-18.28, -7.81, 62.64]}
              rotation={[0, 1.44, 0]}
              scale={[2.58, 0.75, 14.12]}
            >
              <mesh
                geometry={nodes.pCube11_Wood_0.geometry}
                material={nodes.pCube11_Wood_0.material}
              />
            </group>
            <group
              position={[-18.28, -7.81, 65.63]}
              rotation={[0, 1.44, 0]}
              scale={[2.58, 0.75, 14.12]}
            >
              <mesh
                geometry={nodes.pCube12_Wood_0.geometry}
                material={nodes.pCube12_Wood_0.material}
              />
            </group>
            <group
              position={[-18.28, -7.81, 68.72]}
              rotation={[0, 1.44, 0]}
              scale={[2.58, 0.75, 14.12]}
            >
              <mesh
                geometry={nodes.pCube13_Wood_0.geometry}
                material={nodes.pCube13_Wood_0.material}
              />
            </group>
            <group
              position={[-18.28, -7.81, 71.85]}
              rotation={[0, 1.44, 0]}
              scale={[2.58, 0.75, 14.12]}
            >
              <mesh
                geometry={nodes.pCube14_Wood_0.geometry}
                material={nodes.pCube14_Wood_0.material}
              />
            </group>
            <group
              position={[-18.28, -7.81, 74.82]}
              rotation={[0, 1.44, 0]}
              scale={[2.58, 0.75, 14.12]}
            >
              <mesh
                geometry={nodes.pCube15_Wood_0.geometry}
                material={nodes.pCube15_Wood_0.material}
              />
            </group>
            <group
              position={[-25.14, -12.91, 53.83]}
              rotation={[-1.56, 0.03, 1.48]}
              scale={[1.59, 1.98, 16.88]}
            >
              <mesh
                geometry={nodes.pCube16_Wood_0.geometry}
                material={nodes.pCube16_Wood_0.material}
              />
            </group>
            <group
              position={[-11.67, -12.91, 55.95]}
              rotation={[-1.56, 0.03, 1.48]}
              scale={[1.59, 1.98, 16.88]}
            >
              <mesh
                geometry={nodes.pCube17_Wood_0.geometry}
                material={nodes.pCube17_Wood_0.material}
              />
            </group>
            <group
              position={[-25.19, -12.91, 72.29]}
              rotation={[-1.56, 0.03, 1.48]}
              scale={[1.59, 1.98, 16.88]}
            >
              <mesh
                geometry={nodes.pCube18_Wood_0.geometry}
                material={nodes.pCube18_Wood_0.material}
              />
            </group>
            <group
              position={[-11.36, -12.91, 74.03]}
              rotation={[-1.56, 0.03, 1.48]}
              scale={[1.59, 1.98, 16.88]}
            >
              <mesh
                geometry={nodes.pCube19_Wood_0.geometry}
                material={nodes.pCube19_Wood_0.material}
              />
            </group>
            <group
              position={[-13.92, -8.26, 64.85]}
              rotation={[-3.14, -0.01, 1.6]}
              scale={[0.45, 1.37, 21.78]}
            >
              <mesh
                geometry={nodes.pCube20_Wood_0.geometry}
                material={nodes.pCube20_Wood_0.material}
              />
            </group>
            <group
              position={[-23.03, -8.26, 63.67]}
              rotation={[-3.14, 0.07, 1.6]}
              scale={[0.45, 1.37, 21.78]}
            >
              <mesh
                geometry={nodes.pCube21_Wood_0.geometry}
                material={nodes.pCube21_Wood_0.material}
              />
            </group>
            <group
              position={[-4.75, -10.13, 67.48]}
              rotation={[0, 0.18, 0]}
              scale={[4.6, 2.91, 18.98]}
            >
              <mesh
                geometry={nodes.pCube22_Wood_0.geometry}
                material={nodes.pCube22_Wood_0.material}
              />
            </group>
            <group
              position={[-5.36, -9.08, 63.77]}
              rotation={[-Math.PI, 1.34, -Math.PI]}
              scale={[1.94, 0.4, 7.72]}
            >
              <mesh
                geometry={nodes.pCube23_Wood_0.geometry}
                material={nodes.pCube23_Wood_0.material}
              />
            </group>
            <group
              position={[-21, -1.41, 48.18]}
              rotation={[-2.24, 0.07, -0.03]}
              scale={[1, 0.13, 2.5]}
            >
              <mesh
                geometry={nodes.pCube24_Wood_0.geometry}
                material={nodes.pCube24_Wood_0.material}
              />
            </group>
            <group
              position={[-14.05, -5.88, 74.84]}
              rotation={[-0.01, -0.03, 0.01]}
              scale={[0.9, 1.58, 0.9]}
            >
              <mesh
                geometry={nodes.pCylinder5_Wood_0.geometry}
                material={nodes.pCylinder5_Wood_0.material}
              />
              <mesh
                geometry={nodes.pCylinder5_Metal_0.geometry}
                material={nodes.pCylinder5_Metal_0.material}
              />
            </group>
            <group
              position={[-13.3, -5.88, 72.84]}
              rotation={[-0.01, -0.03, 0.01]}
              scale={[0.9, 1.58, 0.9]}
            >
              <mesh
                geometry={nodes.pCylinder6_Wood_0.geometry}
                material={nodes.pCylinder6_Wood_0.material}
              />
              <mesh
                geometry={nodes.pCylinder6_Metal_0.geometry}
                material={nodes.pCylinder6_Metal_0.material}
              />
            </group>
            <group
              position={[-15.5, -5.88, 73.39]}
              rotation={[-0.01, -0.03, 0.01]}
              scale={[0.9, 1.58, 0.9]}
            >
              <mesh
                geometry={nodes.pCylinder7_Wood_0.geometry}
                material={nodes.pCylinder7_Wood_0.material}
              />
              <mesh
                geometry={nodes.pCylinder7_Metal_0.geometry}
                material={nodes.pCylinder7_Metal_0.material}
              />
            </group>
            <group
              position={[-14.28, -2.69, 73.92]}
              rotation={[-0.01, -0.03, 0.01]}
              scale={[0.9, 1.58, 0.9]}
            >
              <mesh
                geometry={nodes.pCylinder8_Wood_0.geometry}
                material={nodes.pCylinder8_Wood_0.material}
              />
              <mesh
                geometry={nodes.pCylinder8_Metal_0.geometry}
                material={nodes.pCylinder8_Metal_0.material}
              />
            </group>
            <group position={[-1.19, 0, 5.84]}>
              <mesh
                geometry={nodes.pCube35_Wood_D_0.geometry}
                material={nodes.pCube35_Wood_D_0.material}
              />
            </group>
            <group
              position={[14.06, 17.37, -70.85]}
              rotation={[-0.02, 0, 0.03]}
              scale={[1, 1, 1]}
            >
              <mesh
                geometry={nodes.pCube36_Wood_D_0.geometry}
                material={nodes.pCube36_Wood_D_0.material}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/low_poly_medieval_island/scene.gltf');

const textConfig = {
  font,
  size: 1.5,
  height: 0.5,
};

const IslandModel = (props = {}) => {
  const meshRef = useRef();
  const textMeshRef = useRef();

  const [loadText, setLoadText] = useState(false);

  useFrame((state) => {
    if (loadText && textMeshRef.current && textMeshRef.current.scale.x !== 1) {
      scale(textMeshRef.current);
    }

    if (
      !loadText &&
      state.camera.position.getComponent(2) > CameraState.to[2] - 10
    ) {
      setLoadText(true);
    }
  });

  return (
    <>
      <mesh ref={meshRef} castShadow {...props}>
        <group>
          <mesh position={[0, 2, 0]} scale={[0, 0, 0]} ref={textMeshRef}>
            <textGeometry attach="geometry" args={['About', textConfig]} />
            <meshLambertMaterial
              attach="material"
              side={THREE.DoubleSide}
              color={0xba0000}
            />
          </mesh>

          <Island />
        </group>
      </mesh>
    </>
  );
};

export default IslandModel;
