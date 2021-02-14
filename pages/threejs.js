import Head from "next/head";
import { useEffect } from "react";
import { init } from "../components/threejs/threeBoite";

export default function threejs() {
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <Head>
        <title>Banc d'essai 3D</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" mx-auto flex flex-col items-center bg-green-700 font-sans flex-auto">
        <article className="">
          <h2 className="text-center text-2xl py-3">Three.js traditionnel</h2>
          <p className="w-4/5 mx-auto">
            Cette scène est produite avec les fonctions de Three.js de base.
            C'est un style de programmation très traditionnel, de facon
            procédurale , ligne par ligne, on dit ce qu'on veut. C'est un clash
            quand même direct avec les paradigmes et les façons de faire du
            front-end. Ca prends un mindset différent et un changement de
            contexte , ce qui réduit la productivité, et fait qu'un développeur
            front-end ne soit pas nécéssairement à l'aise avec ça.
            Le code vit dans un fichier complètement séparé du modèle de composants et du html.
          </p>
        </article>

        <section
          className="bg-pink-600 w-screen flex-auto"
          id="scene"
        ></section>
      </main>
    </>
  );
}
