import { useFrame } from "react-three-fiber";
import { useRef } from "react";
export default function Boite() {

  // avec three.js , on peut programmer de facon "réactive"
  const mesh = useRef();

  //facilement produire des animations
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  // on fait simplement décrire l'objet qu'on veut, avec ses propriétés, comme un élément html
  // c'est littéralement une extension du front-end !
  return (
    <mesh ref={mesh} scale={[1, 1, 1]}>
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"green"} />
    </mesh>
  );
}
