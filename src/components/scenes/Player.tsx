import * as THREE from "three";
import { useEffect, useRef, MutableRefObject } from "react";
import { useSphere } from "@react-three/cannon";
import { useThree, useFrame } from "@react-three/fiber";
import { usePlayerControls } from "../../hooks";

const SPEED = 5;

const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();
const speed = new THREE.Vector3();

export default function Player() {
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 10, 0],
  }));
  const { forward, backward, left, right, jump } = usePlayerControls();
  const { camera } = useThree();
  const velocity: MutableRefObject<number[]> = useRef([0, 0, 0]);

  useEffect(
    () => api.velocity.subscribe((v) => (velocity.current = v)),
    [api.velocity]
  );

  useFrame(() => {
    ref.current!.getWorldPosition(camera.position);
    frontVector.set(0, 0, Number(backward) - Number(forward));
    sideVector.set(Number(left) - Number(right), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);
    speed.fromArray(velocity.current);
    api.velocity.set(direction.x, velocity.current[1], direction.z);

    if (+jump && Math.abs(+velocity.current[1].toFixed(2)) < 0.05)
      api.velocity.set(velocity.current[0], 5, velocity.current[2]);
  });

  return <mesh ref={ref} />;
}
