import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Dodecahedron } from '@react-three/drei';
import { useSpring } from '@react-spring/three';

import { palette } from 'styles/theme';

const Model = () => {
  const meshRef = useRef();
  const geometryRef = useRef();
  const styles = useSpring({
    from: { x: 0 },
    to: { x: 1000 },
    loop: { reverse: true },
  });

  useFrame(() => {
    if (meshRef.current) {
      // meshRef.current.position.x += 0.01;
      // meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <Dodecahedron args={[2, 0]} ref={geometryRef}>
        <meshPhongMaterial color={palette.secondary.dark} />
      </Dodecahedron>
    </mesh>
  );
};
