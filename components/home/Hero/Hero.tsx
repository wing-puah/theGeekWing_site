import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';

import { journeyPoints } from '../config';

import { Html } from '@react-three/drei';

import Model from './Model';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.palette.grey[200]};

  canvas {
    height: 100%;
    width: 100%;
  }
`;

const Light = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} position={[0, 500, 200]} />
      <spotLight position={[0, 50, 0]} intensity={0.7} />
    </>
  );
};

const Hero = () => {
  return (
    <Wrapper>
      <Canvas>
        <Html fullscreen>
          <h1>hello</h1>
        </Html>
        <Light />
        <Model />
      </Canvas>
    </Wrapper>
  );
};

export default Hero;
