import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { usePlane } from "@react-three/cannon";

export default function Floor() {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
  const texture = useLoader(THREE.TextureLoader, "/assets/marble-floor.jpg");
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial
        map={texture}
        map-repeat={[1000, 1000]}
        color="gray"
      />
    </mesh>
  );
}
