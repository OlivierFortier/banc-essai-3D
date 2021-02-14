import Head from "next/head";
import dynamic from "next/dynamic";

// je dois importer de facon dynamique dans un composant externe, car a-frame n'est pas compatible avec le SSR
const SceneAframe = dynamic(() => import("../components/aFrame/SceneAframe"), {
  ssr: false,
});

export default function threejs() {
  return (
    <>
      <Head>
        <title>Banc d'essai 3D</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
      </Head>

      <main className=" mx-auto flex flex-col items-center bg-green-700 font-sans flex-auto">
        <article className="">
          <h2 className="text-center text-2xl py-3">A-frame</h2>
          <p className="w-4/5 mx-auto">
            Cette scène est produite avec la librairie A-frame. Elle est basée
            sur les mêmes principes de base que Three.js, mais utilise elle
            aussi un style un peu plus déclaratif, comme r3f. C'Est pratiquement
            une extension du html. Par contre, il y a plusieurs inconvénients au
            niveau de l'expérience de développeur. La communauté n'est pas aussi
            active, et l'utilisation de la librairie n'est pas aussi intuitive
            (manque d'intelisense, manque de "tooling" , etc)
          </p>
        </article>

        <section className="bg-pink-600 w-screen flex-auto">
          <SceneAframe />
        </section>
      </main>
    </>
  );
}
