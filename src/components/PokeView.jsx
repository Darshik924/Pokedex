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

  const [weakAgainst, strongAgainst] = getTypeMatchs(...type_s);

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
    boxShadow: "10px 10px 15px #888888",
  };
  let cardStyles = {
    borderColor: `${text}`,
    boxShadow: "10px 10px 15px #888888",
    color: `${text}`,
  };
  let cardsHeaderStyles = {
    border: `4px solid ${text}`,
    borderRadius: "20px",
    color: "white",
    backgroundColor: `${text}`,
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
            className="poke-head shadow-md flex flex-col w-105 rounded-3xl border-4 border-teal-50 p-4 gap-3 justify-around"
          >
            <img
              src={fetchedData.sprites.other["official-artwork"].front_default}
              alt={fetchedData.name}
              className="w-93 h-93 p-3 bg-white/30 backdrop-blur-md border border-white/20 rounded-4xl drop-shadow-2xl"
              style={imageStyles}
            />

            <div className="name flex justify-center font-sans">
              <div
                style={cardsHeaderStyles}
                className="name p-4 text-5xl rounded-4xl font-extrabold "
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
        {/* I choosed not to use PokeCard component as i wanted to display things differently*/}

        <div className="cards max-w-350 mt-15 p-5 flex flex-row gap-8 justify-around">
          <div
            style={cardStyles}
            className="h-110 p-5 bg-gray-300 w-80 border-6 rounded-4xl"
          >
            <div
              style={pokeNameStyles}
              className="flex flex-col justify-around text-2xl font-sans font-bold"
            >
              <div
                style={cardsHeaderStyles}
                className="header flex justify-center text-4xl font-extrabold"
              >
                STATS
              </div>
              <div className="stats-content mt-5 flex justify-center text-3xl">
                <div className="flex flex-col gap-5 justify-around">
                  {pokeStats.map(({ stat, base_stat, id }) => (
                    <ul key={id}>
                      <li className="flex justify-between gap-4 text-teal-50 pl-3 border-teal-50 pr-3 pt-1 pb-1 border-2 rounded-xl bg-gray-500">
                        <div className="font-sans">{stat}</div>
                        <div>{base_stat}</div>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            style={pokeNameStyles}
            className="h-110 p-5 bg-gray-300 w-80 border-6 rounded-4xl"
          >
            <div
              style={cardsHeaderStyles}
              className="header flex justify-center text-4xl font-extrabold"
            >
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
                  {strongAgainst.length > 0 && (
                    <div>
                      <div className="text-teal-700 underline underline-offset-4 font-extrabold">
                        Strong-Against
                      </div>{" "}
                      {strongAgainst.map(
                        (type, idx) =>
                          idx < 2 && (
                            <div className="mt-1 flex gap-3">
                              <div
                                style={{
                                  backgroundColor: colourBasedTypes(type),
                                }}
                                className="h-6 w-6 mt-1 rounded-full border border-black/20 shadow-md"
                              ></div>
                              <div className="text-shadow-gray-700">
                                {" "}
                                {type}{" "}
                              </div>
                            </div>
                          ),
                      )}
                    </div>
                  )}
                  {weakAgainst.length > 0 && (
                    <div>
                      <div className="text-teal-700 underline underline-offset-4 font-extrabold">
                        Weak-Against
                      </div>{" "}
                      {weakAgainst.map(
                        (type, idx) =>
                          idx < 2 && (
                            <div className="mt-1 flex gap-3">
                              <div
                                style={{
                                  backgroundColor: colourBasedTypes(type),
                                }}
                                className="h-6 w-6 mt-1 rounded-full border border-black/20 shadow-md"
                              ></div>
                              <div className="text-shadow-gray-700">
                                {" "}
                                {type}{" "}
                              </div>
                            </div>
                          ),
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            style={cardStyles}
            className="h-110 p-5 bg-gray-300 w-80 border-6 rounded-4xl"
          >
            <div
              style={cardsHeaderStyles}
              className="header flex justify-center text-4xl font-extrabold"
            >
              ABILITIES
            </div>

            <div className="mt-7 content flex flex-row justify-center text-3xl font-bold font-sans">
              <div className="flex flex-col gap-4 justify-around">
                {fetchedData.abilities.map(({ ability, is_hidden, slot }) => (
                  <ul key={slot}>
                    <li className="flex gap-3 justfiy-center">
                      <div className="border-2 bg-gray-800 rounded-2xl h-4 w-4 p-2 mt-3"></div>
                      <div className="flex flex-col gap-1">
                        {ability.name}
                        {is_hidden && (
                          <span className="ml-3 hidden-class text-red-600">
                            (Hidden)
                          </span>
                        )}
                      </div>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div
            style={cardStyles}
            className="h-110 p-5 bg-gray-300 w-80 border-6 rounded-4xl"
          >
            <div
              style={cardsHeaderStyles}
              className="header flex justify-center text-4xl font-extrabold"
            >
              PHYSICAL
            </div>

            <div className="flex justify-center text-3xl mt-8 font-bold font-sans ">
              <div className="flex flex-col justify-around gap-7">
                <div className="flex justify-between gap-4 text-teal-50 pl-1 text-2xl border-teal-50 pr-1 pt-1 pb-1 border-2 rounded-xl bg-gray-500">
                  <div>Height</div>
                  <div className="text-yellow-200">
                    {" "}
                    {fetchedData.height / 10}m
                  </div>
                </div>
                <div className="flex justify-between gap-4 text-teal-50 pl-1 text-2xl border-teal-50 pr-1 pt-1 pb-1 border-2 rounded-xl bg-gray-500">
                  <div>Weight</div>
                  <div className="text-yellow-200">
                    {" "}
                    {fetchedData.weight / 10}kg
                  </div>
                </div>
                <div className="flex justify-between gap-4 text-teal-50 pl-1 text-2xl border-teal-50 pr-1 pt-1 pb-1 border-2 rounded-xl bg-gray-500">
                  <div>Base EXP</div>
                  <div className="text-yellow-200">
                    {" "}
                    {fetchedData.base_experience}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={cardStyles}
            className="h-110 p-5 bg-gray-300 w-80 border-6 rounded-4xl"
          >
            <div
              style={cardsHeaderStyles}
              className="header flex justify-center text-4xl font-extrabold"
            >
              SPRITES
            </div>

            <div className="flex justify-center">
              <div className="flex flex-col gap-1 justify-around mt-2 ">
                <img
                  src={fetchedData.sprites.front_default}
                  alt="normal"
                  className="h-35 w-41 border-4 rounded-3xl bg-[#1A202C]"
                />
                <div className="flex justify-center">
                  <div className="text-l font-sans font-bold w-28 text-teal-50 border-teal-50 pl-2 pr-2 flex justify-center border-2 rounded-xl bg-gray-500">
                    Normal
                  </div>
                </div>

                <img
                  src={fetchedData.sprites.front_shiny}
                  alt="shiny"
                  className="h-35 w-41 border-4 rounded-3xl bg-[#1A202C]"
                />
                <div className="flex justify-center">
                  <div className="text-l font-sans font-bold w-28 text-teal-50 border-teal-50 pl-2 pr-2 flex justify-center border-2 rounded-xl bg-gray-500">
                    Shiny
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PokeView;
