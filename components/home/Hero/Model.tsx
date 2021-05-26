import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Plane, MeshDistortMaterial, Sphere, Html } from '@react-three/drei';
import styled from 'styled-components';

import { journeyPoints } from '../config';

import { palette } from 'styles/theme';

const Model = () => {
  const meshRef = useRef();

  // useFrame(() => {
  //   // console.log({ args, meshRef });
  //   if (meshRef.current) {
  //     meshRef.current.rotation.y += 0.01;
  //   }
  // });

  return (
    <mesh ref={meshRef}>
      <meshPhongMaterial color={palette.secondary.dark} />
      <sphereGeometry args={[0.8, 128, 128]} />
      {/* </Sphere> */}
    </mesh>
  );
};

export default Model;
// args={[15, 32, 32]}
