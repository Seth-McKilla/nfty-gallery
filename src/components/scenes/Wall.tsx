import { usePlane } from "@react-three/cannon";

interface WallProps {
  rotation: [number, number, number];
  position: [number, number, number];
}

export default function Wall({ rotation, position }: WallProps) {
  const [ref] = usePlane(() => ({ rotation, position }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="gray" transparent opacity={0.5} />
    </mesh>
  );
}
