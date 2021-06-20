import { useRef, useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';

import { Canvas, useThree, useFrame } from '@react-three/fiber';
import {
  Html,
  useHelper,
  Loader,
  OrbitControls,
  softShadows,
} from '@react-three/drei';

import useMount from 'reactHooks/useMount';

import { Light } from 'models/Base';
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

// Create the zoom effect once the page has loaded
const CameraControls = () => {
  const vec = new THREE.Vector3();
  const [isMounted, setIsMounted] = useState(false);
  const [updateCameraPosition, setUpdateCameraPosition] = useState(true);
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef();

  useMount(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 5000);
  });

  useFrame((state) => {
    const step = 0.03;

    if (!isMounted || !updateCameraPosition) return;
    state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, 70, step);
    state.camera.position.lerp(vec.set(10, 8, 35), step);
    state.camera.lookAt(0, 0, 0);
    state.camera.updateProjectionMatrix();
    if (state.camera.position.z >= 34 && state.camera.fov >= 69) {
      setUpdateCameraPosition(false);
    }
  });

  return (
    // Oribital controls via drei
    <OrbitControls
      // enableZoom={false}
      enablePan
      enableZoom
      ref={controls}
      // enablePan={false}
      args={[camera, domElement]}
    />
  );
};

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
          position: [0, 35, 10],
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
