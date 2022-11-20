import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Camera({ cameraRef, position }) {
  const lightRef = useRef();
  useFrame((state, delta) => {
    if (lightRef.current) {
      lightRef.current.position.set(
        cameraRef.current.position.x + 10,
        cameraRef.current.position.y + 10,
        cameraRef.current.position.z + 10
      );
    }
  });
  return (
    <>
      <Environment
        files={
          process.env.PUBLIC_URL + "/textures/belfast_sunset_puresky_2k.hdr"
        }
        background={"both"}
      />

      <hemisphereLight args={["#ffeeb1", "#080820", 4]} />
      <spotLight
        ref={lightRef}
        args={["#ffa95c", 4]}
        position={[-50, 50, 50]}
        shadow-mapSize-width={1024 * 4}
        shadow-mapSize-height={1024 * 4}
        shadow-bias={-0.0001}
        castShadow
      />

      <OrbitControls target={position} />

      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[-5, 2, 5]}
        fov={40}
      />
    </>
  );
}
