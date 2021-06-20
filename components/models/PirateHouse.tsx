/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: YanoClaeys (https://sketchfab.com/yanoclaeys)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/pirate-island-cargo-bay-a45eb7d3f0c9475cb696b2a8fdfe4c1e
title: Pirate Island - Cargo Bay
*/

import { useRef, Suspense } from 'react';
import { useGLTF } from '@react-three/drei';

function PirateHouse(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/pirate_island/scene.gltf');

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0.38]} scale={[1.05, 1, 0.69]}>
        <group position={[-85.31, 817.61, 798.61]}>
          <mesh
            geometry={nodes.island_Island_0.geometry}
            material={nodes.island_Island_0.material}
          />
        </group>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0.38]}>
        <group position={[-85.31, 817.61, 798.61]}>
          <mesh
            geometry={nodes.Building001_Building_0.geometry}
            material={nodes.Building001_Building_0.material}
          />
          <mesh
            geometry={nodes.Building001_Building_0_1.geometry}
            material={nodes.Building001_Building_0_1.material}
          />
        </group>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0.38]}>
        <group position={[-85.31, 817.61, 798.61]}>
          <mesh
            geometry={nodes.sky_Sky_Material_0.geometry}
            material={materials.Sky_Material}
          />
        </group>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0.38]}>
        <group position={[-85.31, 817.61, 798.61]}>
          <mesh
            geometry={nodes.Sea_Sea_Material_0.geometry}
            material={materials.Sea_Material}
          />
        </group>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0.38]}>
        <group position={[-85.31, 817.61, 798.61]}>
          <mesh
            geometry={nodes.Opacity_Island_0.geometry}
            material={nodes.Opacity_Island_0.material}
          />
          <mesh
            geometry={nodes.Opacity_IslandOpacity_0.geometry}
            material={materials.IslandOpacity}
          />
        </group>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0.38]}>
        <group position={[-85.31, 817.61, 798.61]}>
          <mesh
            geometry={nodes.Metal_Metal_0.geometry}
            material={materials.Metal}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/pirate_island/scene.gltf');

const PirateHouseModel = (props = {}) => {
  const meshRef = useRef();

  // useFrame(({ gl }) => {
  //   if (meshRef && meshRef.current) {
  //     meshRef.current.position.x = 5;
  //     meshRef.current.position.y = -2;
  //     // meshRef.current.rotation.y += 0.01;
  //   }
  // });

  return (
    <>
      <mesh ref={meshRef} {...props}>
        <Suspense fallback={null}>
          <PirateHouse />
        </Suspense>
      </mesh>
    </>
  );
};

export default PirateHouseModel;
