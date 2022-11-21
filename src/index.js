import "./index.scss";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

createRoot(document.getElementById("scene")).render(
  <Canvas>
    <Scene />
  </Canvas>
);
