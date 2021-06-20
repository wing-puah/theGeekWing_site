import { useRef, useState, Suspense } from 'react';

import {
  SpotLightHelper,
  DirectionalLightHelper,
  MeshBasicMaterial,
  DoubleSide,
} from 'three';

import { useHelper } from '@react-three/drei';

import useMount from 'reactHooks/useMount';

const Light = () => {
  const spotlightRef = useRef();
  const spotlightTwoRef = useRef();
  const directionalLightRef = useRef();
  useHelper(spotlightRef, SpotLightHelper, 0x3aafb9);
  useHelper(spotlightTwoRef, SpotLightHelper, 0xffffff);
  useHelper(directionalLightRef, DirectionalLightHelper);

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight
        castShadow
        intensity={1.5}
        ref={directionalLightRef}
        position={[0, 20, 0]}
        color={0xbec5ad}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <spotLight
        angle={Math.PI / 6}
        position={[15, 10, 0]}
        intensity={0.5}
        ref={spotlightRef}
      />
      <spotLight
        angle={Math.PI / 6}
        position={[-15, 10, 0]}
        intensity={0.5}
        ref={spotlightTwoRef}
      />
    </>
  );
};

const Plane = () => {
  return (
    <mesh receiveShadow position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};
{
  /* <shadowMaterial attach="material" opacity={0.2} /> */
}

const Sky = () => {
  const [texture, setTexture] = useState(null);

  useMount(() => {
    const { TextureLoader } = require('three/src/loaders/TextureLoader');
    const loader = new TextureLoader();
    loader.load('textures/purple_sky.png', function (texture) {
      setTexture(texture);
    });
  });

  if (!texture) return null;

  return (
    <Suspense fallback={null}>
      <mesh position={[0, 0, -30]}>
        <planeGeometry args={[400, 200]} attach="geometry" />
        <meshStandardMaterial
          map={texture}
          attach="material"
          opacity={1}
          side={DoubleSide}
        />
      </mesh>
    </Suspense>
  );
};

export { Light, Plane, Sky };