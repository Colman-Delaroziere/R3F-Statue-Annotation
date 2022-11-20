import { Html } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Annotation({ camera, model, position, children }) {
  const annotationRef = useRef();
  const annotationDivRef = useRef();

  function updateAnnotationOpacity() {
    const meshDistance = camera.current.position.distanceTo(
      model.current.position
    );
    const spriteDistance = camera.current.position.distanceTo(
      annotationRef.current.position
    );
    let spriteBehindObject = spriteDistance > meshDistance;

    annotationDivRef.current.style.opacity = spriteBehindObject ? 0.25 : 1;
  }

  useFrame(() => {
    if (annotationRef.current && annotationDivRef.current)
      updateAnnotationOpacity();
  });

  return (
    <group ref={annotationRef} position={position} rotation={[0, 0, 0]}>
      <Html center={true}>
        <div ref={annotationDivRef} className="annotation">
          {children}
        </div>
      </Html>
    </group>
  );
}
