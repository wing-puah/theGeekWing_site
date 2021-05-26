import { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useFrame } from '@react-three/fiber';
import {
  Plane,
  MeshDistortMaterial,
  Sphere,
  Html,
  Icosahedron,
  Dodecahedron,
} from '@react-three/drei';
import styled from 'styled-components';

import { journeyPoints } from '../config';

import { palette } from 'styles/theme';

const Model = () => {
  const meshRef = useRef();
  const styles = useSpring({
    from: { x: 0 },
    to: { x: 10 },
    loop: { reverse: true },
  });

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <Dodecahedron args={[2, 3]}>
        <MeshDistortMaterial
          color={palette.secondary.dark}
          distort={0.3}
          speed={4}
          radius={0.6}
          factor={0.5}
        />
      </Dodecahedron>
    </mesh>
  );
};

export default Model;
// args={[15, 32, 32]}
