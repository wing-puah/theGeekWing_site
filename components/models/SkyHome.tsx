/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Sander Vander Meiren (https://sketchfab.com/Sander.Vander.Meiren)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/6597e6c9a5184f07a638ac33c08c2ad5
title: stylised sky player home dioroma
*/

import { useRef } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';
import { font } from './utils';

function SkyHome(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/sky_home/scene.gltf');

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[47.89, 83.8, 0]} rotation={[0, 0, 0]}>
            <mesh
              geometry={nodes.tree_trunk_bark_0.geometry}
              material={materials.bark}
            />
          </group>
          <group position={[-22.34, 70.75, -26.35]} rotation={[0, 0.67, 0]}>
            <group position={[-4.24, 0, -22.81]}>
              <mesh
                geometry={nodes.house_base_wall_0.geometry}
                material={nodes.house_base_wall_0.material}
              />
            </group>
          </group>
          <group position={[-19.57, 3.07, 56.71]} rotation={[0, 0, 0]}>
            <mesh
              geometry={nodes.roof_roof_0.geometry}
              material={materials.roof}
            />
            <mesh
              geometry={nodes.roof_wooden_skel_no_op_0.geometry}
              material={nodes.roof_wooden_skel_no_op_0.material}
            />
          </group>
          <group
            position={[-62.01, 69.64, 4.81]}
            rotation={[-2.99, -1.27, -2.96]}
            scale={[0.56, 0.56, 0.56]}
          >
            <group position={[0, 0, -9.76]}>
              <mesh
                geometry={nodes.stone_details_wall_0.geometry}
                material={nodes.stone_details_wall_0.material}
              />
            </group>
          </group>
          <group rotation={[-Math.PI / 2, 0, 1.33]}>
            <mesh
              geometry={nodes.grass_floor_grass_0.geometry}
              material={materials.grass}
            />
          </group>
          <group
            position={[-60.62, 71.68, -29.66]}
            rotation={[2.68, -0.9, 2.73]}
            scale={[0.3, 0.3, 0.3]}
          >
            <group position={[167.6, 70.91, -5.19]}>
              <mesh
                geometry={nodes.wood_loose_planks_wooden_skel_no_op_0.geometry}
                material={nodes.wood_loose_planks_wooden_skel_no_op_0.material}
              />
            </group>
          </group>
          <group
            position={[65.22, 90.39, -43.07]}
            rotation={[-1.86, 0.59, 1.28]}
            scale={[0.61, 0.61, 0.61]}
          >
            <group position={[-2.49, -18.55, -1.98]}>
              <mesh
                geometry={nodes.leaves_op_branches_0.geometry}
                material={nodes.leaves_op_branches_0.material}
              />
            </group>
          </group>
          <group
            position={[45.45, 50.76, -23.45]}
            rotation={[2.68, 0.65, -2.74]}
            scale={[0.23, 0.23, 0.23]}
          >
            <group position={[-0.56, 11.09, 0]}>
              <mesh
                geometry={nodes.grass_op_branches_0.geometry}
                material={nodes.grass_op_branches_0.material}
              />
            </group>
          </group>
          <group
            position={[36.66, 0.66, 17.23]}
            rotation={[0.11, 1.05, -0.14]}
            scale={[1.22, 1.21, 1]}
          >
            <group position={[-100.3, -21.28, -15.81]}>
              <mesh
                geometry={nodes['rocks_Material_#413_0'].geometry}
                material={materials.Material_413}
              />
            </group>
          </group>
          <group
            position={[46.88, 46.63, 8.4]}
            rotation={[0, 0.33, -0.09]}
            scale={[0.8, 0.8, 0.8]}
          >
            <group position={[-13.28, 9.05, 0]}>
              <mesh
                geometry={nodes['ferns_Material_#650_0'].geometry}
                material={nodes['ferns_Material_#650_0'].material}
              />
            </group>
          </group>
          <group
            position={[-8.34, 32.7, -8.66]}
            rotation={[-0.04, -0.95, -0.06]}
            scale={[0.74, 0.74, 0.74]}
          >
            <group position={[77.14, -2.51, -9.58]}>
              <mesh
                geometry={nodes.wood_structure_wooden_skel_no_op_0.geometry}
                material={nodes.wood_structure_wooden_skel_no_op_0.material}
              />
            </group>
          </group>
          <group position={[-11.43, 60.92, -3.19]} rotation={[0, 0.77, 0]}>
            <mesh
              geometry={nodes['door_door_+_barrels_0'].geometry}
              material={nodes['door_door_+_barrels_0'].material}
            />
          </group>
          <group
            position={[15, 38.22, -26.35]}
            rotation={[-Math.PI / 2, 0, 1.9]}
            scale={[0.05, 0.05, 0.16]}
          >
            <mesh
              geometry={nodes['barrels_door_+_barrels_0'].geometry}
              material={nodes['barrels_door_+_barrels_0'].material}
            />
            <mesh
              geometry={nodes.barrels_planks_0.geometry}
              material={nodes.barrels_planks_0.material}
            />
          </group>
          <group
            position={[-1.06, 56.92, -47.88]}
            rotation={[0, -1.28, 0]}
            scale={[0.4, 0.16, 0.6]}
          >
            <group position={[77.14, -2.51, -9.58]}>
              <mesh
                geometry={nodes.windows_wooden_skel_no_op_0.geometry}
                material={nodes.windows_wooden_skel_no_op_0.material}
              />
              <mesh
                geometry={nodes['windows_door_+_barrels_0'].geometry}
                material={nodes['windows_door_+_barrels_0'].material}
              />
            </group>
          </group>
          <group
            position={[18.81, -42.02, 19.52]}
            rotation={[1.56, 0.01, -0.35]}
            scale={[0.47, 0.47, 0.47]}
          >
            <group position={[-186.9, 79.69, -8.78]}>
              <mesh
                geometry={nodes.wood_beams_wooden_skel_no_op_0.geometry}
                material={nodes.wood_beams_wooden_skel_no_op_0.material}
              />
            </group>
          </group>
          <group
            name="klimop"
            position={[-54.46, 38.77, -13.44]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes['klimop_Material_#650_0'].geometry}
              material={nodes['klimop_Material_#650_0'].material}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.base_tower_wall_0.geometry}
              material={nodes.base_tower_wall_0.material}
            />
          </group>
          <group
            position={[-44.52, 45.46, 10.28]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <group position={[0, 0, -34.81]}>
              <mesh
                geometry={nodes.tower_base_wall_0.geometry}
                material={nodes.tower_base_wall_0.material}
              />
              <mesh
                geometry={nodes.tower_base_planks_0.geometry}
                material={nodes.tower_base_planks_0.material}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/sky_home/scene.gltf');

const textOptions = {
  font,
  size: 25,
  height: 5,
};

const SkyHomeModel = (props = {}) => {
  const meshRef = useRef();

  const { position } = useSpring({
    loop: { reverse: true },
    config: { duration: 2000 },
    from: { position: props.position },
    to: {
      position: [props.position[0], props.position[1] - 0.5, props.position[2]],
    },
  });

  return (
    <>
      <a.mesh ref={meshRef} castShadow {...props} position={position}>
        <group>
          <mesh position={[0, 100, 0]}>
            <textGeometry attach="geometry" args={['Blog', textOptions]} />
            <meshLambertMaterial
              attach="material"
              side={THREE.DoubleSide}
              color={0xba0000}
            />
          </mesh>
          <SkyHome />
        </group>
      </a.mesh>
    </>
  );
};

export default SkyHomeModel;
