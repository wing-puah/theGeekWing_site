import { useRef, useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';

import { Canvas } from '@react-three/fiber';
import { Html, useHelper, Loader, softShadows } from '@react-three/drei';

import useMount from 'reactHooks/useMount';

import { CameraState } from 'components/home/config';

import { Light, CameraControls } from 'models/Base';
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
  const log = (e) => {
    console.log('click');
    console.log(e);
  };

  return (
    <Wrapper>
      <Canvas
        shadows
        camera={{
          fov: 60,
          zoom: 1,
          position: CameraState.from,
        }}
      >
        <Suspense fallback={null}>
          <CameraControls />
          <Light />
          <SkyHomeModel position={[-13, 8, 8]} scale={[0.06, 0.06, 0.06]} />
          <IslandModel
            position={[-10, 2, 20]}
            scale={[0.85, 0.85, 0.85]}
            rotation={[0, Math.PI / 5, 0]}
          />
          <PirateHouseModel
            position={[5, 0, 0]}
            scale={[0.008, 0.008, 0.008]}
            rotation={[0, -0.17, 0]}
          />
          <LighthouseModel
            position={[25, 0, 10]}
            scale={[0.025, 0.025, 0.025]}
            onClick={log}
          />
        </Suspense>
        {/* <Html className="d-flex justify-content-center align-items-center">
          <h1>hello</h1>
        </Html> */}
      </Canvas>
      <Loader />
    </Wrapper>
  );
};

export default Hero;
