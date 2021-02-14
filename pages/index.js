import Head from "next/head";

import { Canvas, useFrame } from "react-three-fiber";
import Boite from "../components/R3F/Boite";

export default function Home() {
  return (
    <>
      <Head>
        <title>Banc d'essai 3D</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" mx-auto flex flex-col items-center bg-green-700 font-sans flex-auto">
        <article className="">
          <h2 className="text-center text-2xl py-3">React-Three-Fiber (R3F)</h2>
          <p className="">
            Cette scène est produite très facilement grâce au paradigme
            expressif et déclaratif. C'est très intuitif, et facile à composer.
            Je peux simplement "décrire" ce que je veux, la couleur, la taille
            ,etc et le tout se fait magiquement. Il faut bien sur avoir sous la
            ceinture quelques concepts de base de react à priori
          </p>
        </article>

        <section className="bg-pink-600 w-screen flex-auto">
          <Canvas style={{ height: "100%", width: "100%" }}>
            <pointLight position={[10, 10, 10]} />
            <ambientLight />
            <Boite />
            <Boite />
          </Canvas>
        </section>
      </main>
    </>
  );
}
