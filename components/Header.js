export default function Header() {
  return (
    <header className="bg-indigo-300 text-xl py-2">
      <h1 className="text-white py-2 text-center">
        Banc d'essai des technologies 3D
      </h1>
      <nav>
        <ul className="flex justify-around">
          <li>R3F</li>
          <li>Three.js</li>
          <li>a-frame</li>
        </ul>
      </nav>
    </header>
  );
}
