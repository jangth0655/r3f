'use client';

import { useAnimations, useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

export default function Dancer() {
  const dancerRef = useRef(null);
  const { scene, animations } = useGLTF('/assets/dancer.glb');

  const { actions } = useAnimations(animations, dancerRef);
  const scroll = useScroll();

  useEffect(() => {
    actions['wave']?.play();
  }, [actions]);

  useFrame(() => {});

  return (
    <>
      <ambientLight intensity={2} />
      <primitive ref={dancerRef} object={scene} scale={0.05} />
    </>
  );
}
