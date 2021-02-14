import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-indigo-300 text-xl py-2">
      <h1 className="text-white py-2 text-center">
        Banc d'essai des technologies 3D
      </h1>
      <nav>
        <ul className="flex justify-around">
          <Link href="/">
            <li className="cursor-pointer">R3F</li>
          </Link>
          <Link href="/threejs">
            <li className="cursor-pointer">Three.js</li>
          </Link>
          <Link href="/aframe">
            <li className="cursor-pointer">a-frame</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
