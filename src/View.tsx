import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import "./App.css";
import { Closet } from "./assets/models/Closet";

function View() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[2.5, 0, 2.5]} />
      <OrbitControls autoRotate />
      <Closet receiveShadow />

      <color attach={"background"} args={["#EEE"]} />
      <ambientLight />
      <directionalLight args={["#FFF", 1]} position={[3, 3, 3]} castShadow />
    </>
  );
}

export default View;
