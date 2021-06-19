import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { Physics } from 'use-cannon';

import { journeyPoints } from './config';

import { SpotLightHelper, DirectionalLightHelper } from 'three';
import { Html, useHelper, OrbitControls, softShadows } from '@react-three/drei';

import { Light, Plane } from './Models/Base';
import CatModel from './Models/Cats';
import RobotGirlModel from './Models/RobotGirl';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.palette.highlight.main};

  canvas {
    height: 100%;
    width: 100%;
  }
`;

softShadows();

const Hero = () => {
  return (
    <Wrapper>
      <Canvas shadows camera={{ zoom: 10, position: [0, 0, 100], fov: 60 }}>
        <Light />
        <Plane />
        <OrbitControls enableRotate enablePan rotateSpeed={1} />
        <RobotGirlModel />
        <CatModel />
        {/* <Html className="d-flex justify-content-center align-items-center">
          <h1>hello</h1>
        </Html> */}
      </Canvas>
    </Wrapper>
  );
};

export default Hero;
