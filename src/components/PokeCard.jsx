import React from "react";
import { typeGradients, colourBasedTypes } from "../constants";

const PokeCard = ({ pokeData }) => {
  const str = `${pokeData.id}`;
  const type_s = pokeData.types.map(({ type }) => type.name);
  const key = type_s.length === 2 ? `${type_s[0]}-${type_s[1]}` : type_s[0];
  const { text } = typeGradients[key];
  

  let pokeNameStyles = {
    color: `${text}`,
  };
  let imageStyles = {
    backgroundColor: `#1A202C`,
  };
  let mainCardStyles = {
    backgroundColor: "#F5F7FB",
    filter: "brightness(0.85)",
  };

  return (
    <div className="pokeCard">
      <div
        style={mainCardStyles}
        className="poke-head h-140 flex flex-col w-90 rounded-3xl border-4 border-teal-50 p-4 gap-1 justify-around"
      >
        <div className="flex flex-row justify-center">
          <img
            src={pokeData.sprites.other["official-artwork"].front_default}
            alt={pokeData.name}
            className="w-72 h-72 bg-white/30 backdrop-blur-md border border-white/20 rounded-4xl drop-shadow-2xl"
            style={imageStyles}
          />
        </div>

        <div className="name flex justify-center font-sans">
          <div
            style={pokeNameStyles}
            className="name p-2 text-4xl rounded-4xl font-bold "
          >
            {pokeData.forms[0].name}
          </div>
        </div>

        <div className="header flex justify-center text-xl font-extrabold">
          TYPE(S)
        </div>
        <div className="flex flex-col gap-2 justify-around">
          {type_s.map((type, idx) => (
            <ul key={idx + 1}>
              <li className="flex text-2xl font-bold gap-4">
                <div
                  style={{
                    backgroundColor: colourBasedTypes(type),
                  }}
                  className="h-9 w-9 rounded-full border border-black/20 shadow-md"
                ></div>
                {type}
              </li>
            </ul>
          ))}
        </div>

        <div className="id flex justify-center text-2xl font-bold text-gray-600 font-sans">
          {str.length === 1 && <div>#000{pokeData.id}</div>}
          {str.length === 2 && <div>#00{pokeData.id}</div>}
          {str.length === 3 && <div>#0{pokeData.id}</div>}
          {str.length === 4 && <div>#{pokeData.id}</div>}
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
