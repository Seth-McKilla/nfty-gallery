import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { Mesh } from "three";

interface GroundProps {
  color: string;
  hoverColor: string;
}

export default function Ground(props: GroundProps) {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </>
  );
}
