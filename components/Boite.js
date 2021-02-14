import { useFrame } from "react-three-fiber";
import { useRef } from "react";
export default function Boite() {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} scale={[1, 1, 1]}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"green"} />
    </mesh>
  );
}
