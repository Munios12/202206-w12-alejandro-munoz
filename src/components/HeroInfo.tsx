import { iCharacter } from "../interfaces/iCharacter";

export const HeroInfo = ({ character }: any) => {
  const createHeroInfo = (character: iCharacter) => {
    switch (character.role) {
      case "king":
        return <li>Años de reinado: {character.reignYears}</li>;

      case "figther":
        return (
          <>
            <li>Weapon: {character.weapon}</li>
            <li>Dexterity: {character.dexterity}</li>
          </>
        );

      case "adviser":
        return (
          <>
            <li>AdviseTo: {character.adviseTo}</li>
          </>
        );
      case "squire":
        return (
          <>
            <li>Fawner: {character.fawner}</li>
            <li>Serve: {character.serveTo}</li>
          </>
        );

      default:
        break;
    }
  };

  return <ul className="list-unstyled">{createHeroInfo(character)}</ul>;
};

/*

<ul className="list-unstyled">
                
                <li>Arma: XXX</li>
                <li>Destreza: X</li>
                <li>Peloteo: X</li>
                <li>Asesora a: X</li>
                <li>Sirve a: X</li>
              </ul>
*/
