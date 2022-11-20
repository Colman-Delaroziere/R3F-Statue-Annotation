import { Suspense, useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import Annotation from "./components/Annotation";
import Camera from "./environnement/Camera";

function Scene() {
  const cameraRef = useRef();
  const [position] = useState([0.4, 0.5, 0]);

  const modelRef = useRef();
  const { nodes } = useLoader(
    GLTFLoader,
    "/models/marble_bust_01_2k.gltf/marble_bust_01_2k.gltf"
  );

  return (
    <Suspense fallback={null}>
      <Camera cameraRef={cameraRef} position={[0, 0.75, 0]} />

      <mesh
        ref={modelRef}
        scale={[2, 2, 2]}
        material={nodes.marble_bust_01.material}
        geometry={nodes.marble_bust_01.geometry}
      ></mesh>

      <Annotation camera={cameraRef} model={modelRef} position={position}>
        <p>
          <strong>Marble Sculpture</strong>
        </p>
        <br />
        <p>
          The Greeks, regarded as the most superior sculptors of antiquity,
          favored the softness of marble when rendering fine, precise sculptures
          of either gods or humans. Its homogenous texture allowed for minute
          details with small margins of error.
        </p>
      </Annotation>
    </Suspense>
  );
}

export default Scene;
