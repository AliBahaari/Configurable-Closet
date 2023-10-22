import * as THREE from "three";
import { useContext } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { StatusProvider } from "../../App";
import { Vector3, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

type GLTFResult = GLTF & {
  nodes: {
    Box: THREE.Mesh;
    Box_1: THREE.Mesh;
    Box_2: THREE.Mesh;
    Box_3: THREE.Mesh;
    Box_4: THREE.Mesh;
  };
};

export function Closet(props: JSX.IntrinsicElements["group"]) {
  const [wood1, wood2] = useLoader(TextureLoader, [
    "/textures/Wood-1.jpg",
    "/textures/Wood-2.jpg",
  ]);
  const { showWalls, texture, rangeValue } = useContext(StatusProvider);
  const { nodes } = useGLTF("/models/Closet.glb") as GLTFResult;

  let topBottom: Vector3 = [0, 0, 0];
  let back: Vector3 = [0, 0, 0];

  if (rangeValue === "1") {
    topBottom = [0.05, 0.6, 1.2];
    back = [0.05, 0.8, 1.1];
  } else if (rangeValue === "2") {
    topBottom = [0.05, 0.6, 1.6];
    back = [0.05, 0.8, 1.5];
  } else if (rangeValue === "3") {
    topBottom = [0.05, 0.6, 2];
    back = [0.05, 0.8, 1.9];
  }

  const rightWall = rangeValue === "1" ? 0 : rangeValue === "2" ? -0.2 : -0.4;
  const leftWall = rangeValue === "1" ? 1 : rangeValue === "2" ? 1.2 : 1.4;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Box.geometry}
        material={nodes.Box.material}
        position={[-0.275, -0.025, 0.5]}
        scale={back}
      >
        <meshStandardMaterial map={texture === 1 ? wood1 : wood2} />
      </mesh>

      {showWalls && (
        <>
          <mesh
            geometry={nodes.Box_1.geometry}
            position={[0, -0.025, rightWall]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.05, 0.8, 0.5]}
          >
            <meshStandardMaterial map={texture === 1 ? wood1 : wood2} />
          </mesh>

          <mesh
            geometry={nodes.Box_2.geometry}
            material={nodes.Box_2.material}
            position={[0, -0.025, leftWall]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.05, 0.8, 0.5]}
          >
            <meshStandardMaterial map={texture === 1 ? wood1 : wood2} />
          </mesh>

          {rangeValue === "2" && (
            <mesh
              geometry={nodes.Box_2.geometry}
              material={nodes.Box_2.material}
              position={[0, -0.025, 0.5]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[0.05, 0.8, 0.5]}
            >
              <meshStandardMaterial map={texture === 1 ? wood1 : wood2} />
            </mesh>
          )}

          {rangeValue === "3" && (
            <>
              <mesh
                geometry={nodes.Box_2.geometry}
                material={nodes.Box_2.material}
                position={[0, -0.025, 0.3]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.05, 0.8, 0.5]}
              >
                <meshStandardMaterial map={texture === 1 ? wood1 : wood2} />
              </mesh>
              <mesh
                geometry={nodes.Box_2.geometry}
                material={nodes.Box_2.material}
                position={[0, -0.025, 0.7]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.05, 0.8, 0.5]}
              >
                <meshStandardMaterial map={texture === 1 ? wood1 : wood2} />
              </mesh>
            </>
          )}
        </>
      )}

      <mesh
        geometry={nodes.Box_3.geometry}
        material={nodes.Box_3.material}
        position={[0, -0.45, 0.5]}
        rotation={[0, 0, Math.PI / 2]}
        scale={topBottom}
      >
        <meshStandardMaterial map={texture === 1 ? wood1 : wood2} />
      </mesh>
      <mesh
        geometry={nodes.Box_4.geometry}
        material={nodes.Box_4.material}
        position={[0, 0.4, 0.5]}
        rotation={[0, 0, Math.PI / 2]}
        scale={topBottom}
      >
        <meshStandardMaterial map={texture === 1 ? wood1 : wood2} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/Closet.glb");
