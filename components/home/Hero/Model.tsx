import dynamic from 'next/dynamic';
import { useRef, useState, useEffect, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import {
  MeshDistortMaterial,
  Dodecahedron,
  useGLTF,
  useAnimations,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { palette } from 'styles/theme';

import FemaleRobot from 'public/female_cute_robot/Scene';

let log = false;
let GLTFLoader;

const Model = () => {
  const meshRef = useRef();
  const virtualCamera = useRef();
  // const virtualCamera = useRef<THREE.Camera>();

  useFrame(({ gl }) => {
    if (meshRef && meshRef.current) {
      meshRef.current.rotation.y = Math.PI;
      meshRef.current.rotation.x = 0.3;
      meshRef.current.position.y = -2;
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <Suspense fallback={null}>
          <OrbitControls enableRotate enablePan rotateSpeed={1} />
          <FemaleRobot />
        </Suspense>
      </mesh>
    </>
  );
};

export default Model;

// const Model = () => {
//   const meshRef = useRef();
//   const geometryRef = useRef();
//   const styles = useSpring({
//     from: { x: 0 },
//     to: { x: 1000 },
//     loop: { reverse: true },
//   });

//   useFrame(() => {
//     if (meshRef.current) {
//       if (log === false) {
//         console.log({
//           current: meshRef.current,
//           boundingBox: meshRef.current.geometry.computeBoundingBox(),
//           geometryRef,
//         });
//         log = true;
//       }
//       // meshRef.current.position.x += 0.01;
//       // meshRef.current.rotation.x += 0.01;
//       meshRef.current.rotation.y += 0.01;
//       meshRef.current.rotation.z += 0.01;
//     }
//   });

//   return (
//     <mesh ref={meshRef}>
//       <Dodecahedron args={[2, 0]} ref={geometryRef}>
//         <meshPhongMaterial color={palette.secondary.dark} />
//       </Dodecahedron>
//     </mesh>
//   );
// };
