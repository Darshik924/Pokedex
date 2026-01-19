import React from "react";
import { typeGradients, colourBasedTypes, getTypeMatchs } from "../constants";
import PokeCard from "./PokeCard";

const PokeView = ({ fetchedData }) => {
  const type_s = fetchedData.types.map(({ type }) => type.name);
  const key = type_s.length === 2 ? `${type_s[0]}-${type_s[1]}` : type_s[0];
  const { nav, gradient, text } = typeGradients[key];

  const str = `${fetchedData.id}`;

  /* Destructuring Stats and Structuring again */
  const { stats } = fetchedData;

  const [
    { base_stat: hp_stat },
    { base_stat: attack_st },
    { base_stat: defence_st },
    { base_stat: spAtf_st },
    { base_stat: spDef_st },
  ] = stats;

  const pokeStats = [
    { id: 1, stat: "hp", base_stat: hp_stat },
    { id: 2, stat: "attack", base_stat: attack_st },
    { id: 3, stat: "defense", base_stat: defence_st },
    { id: 4, stat: "spAtk", base_stat: spAtf_st },
    { id: 5, stat: "spDef", base_stat: spDef_st },
  ];

  let bannerStyles = {
    background: fetchedData
      ? gradient
      : "linear-gradient(135deg, rgba(255,203,5,0.7), rgba(52,102,175,0.7))",
  };
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
  let cardStyles = {
    borderColor: "#FFDE00",
  };

  return (
    <section
      style={bannerStyles}
      className="mt-15 flex flex-row justify-center Banner pt-18 w-full min-h-screen bg-cover bg-center"
    >
      <div className="flex flex-col justify-around">
        <div className="pokeCard flex flex-row justify-center">
          <div
            style={mainCardStyles}
            className="poke-head flex flex-col w-105 rounded-3xl border-4 border-teal-50 p-4 gap-3 justify-around"
          >
            <img
              src={fetchedData.sprites.other["official-artwork"].front_default}
              alt={fetchedData.name}
              className="w-93 h-93 p-3 bg-white/30 backdrop-blur-md border border-white/20 rounded-4xl drop-shadow-2xl"
              style={imageStyles}
            />

            <div className="name flex justify-center font-sans">
              <div
                style={pokeNameStyles}
                className="name p-4 text-3xl rounded-4xl font-bold "
              >
                {fetchedData.forms[0].name}
              </div>
            </div>
            <div className="id flex justify-center text-3xl font-bold text-gray-600 font-sans">
              {str.length === 1 && <div>#000{fetchedData.id}</div>}
              {str.length === 2 && <div>#00{fetchedData.id}</div>}
              {str.length === 3 && <div>#0{fetchedData.id}</div>}
              {str.length === 4 && <div>#{fetchedData.id}</div>}
            </div>
          </div>
        </div>
        {/* <PokeCard pokeData={fetchedData} /> */}
        {/* I choosed not to use PokeCard component as i wanted to display types later*/}

        <div className="cards max-w-350 mt-15 p-5 border-amber-400 flex flex-row gap-8 justify-around">
          <div
            style={cardStyles}
            className="h-110 p-5 bg-gray-300 w-80 border-6 rounded-4xl"
          >
            <div
              style={pokeNameStyles}
              className="flex flex-col justify-around text-2xl font-sans font-bold"
            >
              <div className="header flex justify-center text-4xl font-extrabold">
                STATS
              </div>
              <div className="stats-content mt-5 flex justify-center text-3xl">
                <div className="flex flex-col gap-5 justify-around">
                  {pokeStats.map(({ stat, base_stat, id }) => (
                    <ul key={id}>
                      <li>
                        {stat} -- {base_stat}
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            style={pokeNameStyles}
            className="h-110 p-5 bg-gray-300 w-80 border-[#FFDE00] border-6 rounded-4xl"
          >
            <div className="header flex justify-center text-4xl font-extrabold">
              TYPE(S)
            </div>

            <div className="types-content mt-5 flex justify-center font-bold font-sans text-3xl">
              <div className="flex flex-col gap-3 justify-around">
                {type_s.map((type, idx) => (
                  <ul key={idx + 1}>
                    <li className="flex gap-4">
                      <div
                        style={{
                          backgroundColor: colourBasedTypes(type),
                        }}
                        className="h-10 w-10 rounded-full border border-black/20 shadow-md"
                      ></div>
                      {type}
                    </li>
                  </ul>
                ))}

                <div className="strongWeak text-2xl">
                  <div className="text-red-500 underline underline-offset-4 font-extrabold">
                    Strong-Against :
                  </div>{" "}
                  {getTypeMatchs(...type_s)[1].map(
                    (type, idx) =>
                      idx < 2 && (
                        <div className="mt-1 flex gap-3">
                          <div
                            style={{
                              backgroundColor: colourBasedTypes(type),
                            }}
                            className="h-6 w-6 rounded-full border border-black/20 shadow-md"
                          ></div>
                          <div className="text-shadow-gray-700"> {type} </div>
                        </div>
                      ),
                  )}
                  <div className="text-red-500 underline underline-offset-4 font-extrabold">
                    Weak-Against :
                  </div>{" "}
                  {getTypeMatchs(...type_s)[0].map(
                    (type, idx) =>
                      idx < 2 && (
                        <div className="mt-1 flex gap-3">
                          <div
                            style={{
                              backgroundColor: colourBasedTypes(type),
                            }}
                            className="h-6 w-6 rounded-full border border-black/20 shadow-md"
                          ></div>
                          <div className="text-shadow-gray-700"> {type} </div>
                        </div>
                      ),
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            style={cardStyles}
            className="h-110 p-5 bg-gray-300 w-80 border-6 rounded-4xl"
          ></div>
          <div
            style={cardStyles}
            className="h-110 p-5 bg-gray-300 w-80 border-6 rounded-4xl"
          ></div>
          <div
            style={cardStyles}
            className="h-110 p-5 bg-gray-300 w-80 border-6 rounded-4xl"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default PokeView;
