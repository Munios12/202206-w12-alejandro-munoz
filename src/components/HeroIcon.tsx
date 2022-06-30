import { iCharacter } from "../interfaces/iCharacter";

export const HeroIcon = ({ character }: { character: any }) => {
  const roleIcon = (character: iCharacter) => {
    switch (character.role) {
      case "king":
        return "🤴🏻";
      case "figther":
        return "⚔️";

      case "advisor":
        return "🎓";

      case "squire":
        return "🛡️";

      default:
        break;
    }
  };

  return <i className="emoji">{roleIcon(character)}</i>;
};
