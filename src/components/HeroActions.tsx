import React from "react";

export const HeroActions = ({
  character,
  murderHero,
}: {
  character: any;
  murderHero(id: number): void;
}) => {
  return (
    <>
      <button className="character__action btn">habla</button>
      <button
        className="character__action btn"
        onClick={() => murderHero(character.id)}
      >
        muere
      </button>
    </>
  );
};
