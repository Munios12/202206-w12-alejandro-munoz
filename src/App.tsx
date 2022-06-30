import { useState } from "react";
import "./App.css";
import Comunicate from "./components/Comunicate";
import { Hero } from "./components/Hero";
import { gotCharacters } from "./data/characters";

function App() {
  const [character, setCharacter] = useState(gotCharacters);

  const murderHero = (id: any) => {
    setCharacter(
      character.map((hero) =>
        hero.id !== id ? { ...hero } : { ...hero, isAlive: false }
      )
    );
  };

  return (
    <>
      <div className="app container">
        <ul className="characters-list row list-unstyled">
          {character.map((hero) => (
            <Hero character={hero} murderHero={murderHero} />
          ))}
        </ul>
      </div>
      <div className="comunications">
        <Comunicate />
      </div>
    </>
  );
}

export default App;
