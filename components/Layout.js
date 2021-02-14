export default function Layout({ children }) {
  return (
    <div className="bg-gray-400 h-screen">
      <header className="bg-indigo-300 text-xl py-2">
        <nav>
          <ul className="flex justify-around">
            <li>R3F</li>
            <li>Three.js</li>
            <li>a-frame</li>
          </ul>
        </nav>
      </header>
      {children}
      <footer className="absolute bottom-0 bg-yellow-500 w-full p-2">
        <p>
          À date, l'expérience de développement de R3F est nettement supérieure.
          La programmation déclarative et visuelle est simplement supérieure à
          Three.js de base, et la communauté autour est simplement plus développée que a-frame
        </p>
      </footer>
    </div>
  );
}
