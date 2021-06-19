import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';

import { journeyPoints } from '../config';

import { SpotLightHelper, DirectionalLightHelper } from 'three';
import { Html, useHelper } from '@react-three/drei';

import Model from './Model';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.palette.grey[200]};

  canvas {
    height: 100%;
    width: 100%;
  }
`;

const Light = () => {
  const spotlightRef = useRef();
  const directionalLightRef = useRef();
  useHelper(spotlightRef, SpotLightHelper, 0x3aafb9);
  useHelper(directionalLightRef, DirectionalLightHelper);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        intensity={0.5}
        ref={directionalLightRef}
        position={[0, 5, 0]}
        color={0xbec5ad}
      />
      <spotLight position={[0, 5, 0]} intensity={0.7} ref={spotlightRef} />
    </>
  );
};

const Hero = () => {
  return (
    <Wrapper>
      <Canvas camera={{ zoom: 20, position: [0, 0, 100] }}>
        <Light />
        <Model />
        <Html className="d-flex justify-content-center align-items-center">
          <h1>hello</h1>
        </Html>
      </Canvas>
    </Wrapper>
  );
};

export default Hero;
