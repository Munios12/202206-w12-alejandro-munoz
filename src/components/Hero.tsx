import { HeroInfo } from "./HeroInfo";
import { HeroActions } from "./HeroActions";
import { HeroIcon } from "./HeroIcon";

export const Hero = ({
  character,
  murderHero,
}: {
  character: any;
  murderHero(id: number): void;
}) => {
  return (
    <>
      <li className="character col">
        <div className="card character__card">
          <img
            src={character.img}
            alt="Nombre y familia del personaje"
            className="character__picture card-img-top"
          />
          <div className="card-body">
            <h2 className="character__name card-title h4">{character.name}</h2>
            <div className="character__info">
              <ul className="list-unstyled">
                <li>Edad: {character.age} años</li>
                <li>
                  Estado:
                  {character.isAlive ? (
                    <i className="fas fa-thumbs-up"></i>
                  ) : (
                    <i className="fas fa-thumbs-down"></i>
                  )}
                </li>
              </ul>
            </div>
            <div className="character__overlay">
              <HeroInfo character={character} />
              <div className="character__actions">
                <HeroActions character={character} murderHero={murderHero} />
              </div>
            </div>
          </div>
          <HeroIcon character={character} />
        </div>
      </li>
    </>
  );
};
