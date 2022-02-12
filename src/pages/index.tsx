import { useControls } from "leva";
import { Sky, PointerLockControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import GlobalStyles from "../components/GlobalStyles";
import CanvasLayout from "../components/canvas";
import Layout from "../components/layout";
import { Floor } from "../components/scenes";

export default function Home() {
  const { color, hoverColor } = useControls({
    color: "#bab568",
    hoverColor: "#1b3984",
  });

  return (
    <>
      <Layout
        title={"Nfty Gallery"}
        description={"Your personal virtual 3D NFT art gallery."}
      >
        <CanvasLayout>
          <Sky sunPosition={[100, 20, 100]} />
          <ambientLight intensity={0.3} />
          <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
          <Physics gravity={[0, -30, 0]}>
            <Floor />
          </Physics>
          <PointerLockControls />
        </CanvasLayout>
      </Layout>
      <GlobalStyles />
    </>
  );
}
