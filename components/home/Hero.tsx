import { useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { Physics } from 'use-cannon';

import { journeyPoints } from './config';

import { SpotLightHelper, DirectionalLightHelper } from 'three';
import { Html, useHelper, OrbitControls, softShadows } from '@react-three/drei';

import { Light, Plane, Sky } from 'models/Base';
import LighthouseModel from 'models/Lighthouse';
import IslandModel from 'models/Island';
import SkyHomeModel from 'models/SkyHome';
import PirateHouseModel from 'models/PirateHouse';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.palette.highlight.main};

  canvas {
    height: 100vh;
    width: 100vw;
  }
`;

softShadows();

const Hero = () => {
  return (
    <Wrapper>
      <Canvas
        shadows
        camera={{
          fov: 70,
          zoom: 1,
          position: [10, 18, 25],
        }}
      >
        <OrbitControls enableRotate enablePan rotateSpeed={1} />
        <Light />
        <Suspense fallback={null}>
          <LighthouseModel position={[20, -3, 0]} scale={[0.03, 0.03, 0.03]} />
          <IslandModel position={[-20, 0, 10]} rotation={[0, Math.PI / 5, 0]} />
          <SkyHomeModel position={[-20, 10, -5]} scale={[0.05, 0.05, 0.05]} />
          <PirateHouseModel
            position={[0, -5, 0]}
            scale={[0.009, 0.009, 0.009]}
            rotation={[0, -0.17, 0]}
          />
        </Suspense>
        {/* <Html className="d-flex justify-content-center align-items-center">
          <h1>hello</h1>
        </Html> */}
      </Canvas>
    </Wrapper>
  );
};

export default Hero;
