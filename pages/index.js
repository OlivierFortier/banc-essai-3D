import Head from "next/head";

import { Canvas, useFrame } from "react-three-fiber";
import Boite from "../components/Boite";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" mx-auto flex flex-col items-center bg-green-700 font-sans">
        <h1 className="text-white py-2">Banc d'essai des technologies 3D</h1>

        <section className="bg-pink-600 w-full mx-auto">
          <Canvas>
            <pointLight position={[10, 10, 10]} />
            <ambientLight />
            <Boite />
          </Canvas>
        </section>
      </main>
    </div>
  );
}
