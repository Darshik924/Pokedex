import React from "react";
import { typeGradients } from "../constants";

const PokeView = ({ fetchedData }) => {
  const type_s = fetchedData.types.map(({ type }) => type.name);
  const key = type_s.length === 2 ? `${type_s[0]}-${type_s[1]}` : type_s[0];
  const { nav, gradient, text } = typeGradients[key];

  const str = `${fetchedData.id}`;

  /* Destructuring Stats and Structuring again */
  const { stats } = fetchedData;
  const [
    { stat: hp, base_stat: hp_stat },
    { stat: attack, base_stat: attack_st },
    { stat: defense, base_stat: defence_st },
    { stat: spAtk, base_stat: spAtf_st },
    { stat: spDef, base_stat: spDef_st },
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
        <div className="flex flex-row justify-center">
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

        <div className="cards max-w-350 mt-15 p-5 border-amber-400 flex flex-row gap-8 justify-around">
          <div
            style={cardStyles}
            className="h-100 p-5 bg-gray-300 w-75 border-6 rounded-4xl"
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
            style={cardStyles}
            className="h-100 p-5 bg-gray-300 w-75 border-6 rounded-4xl"
          ></div>
          <div
            style={cardStyles}
            className="h-100 p-5 bg-gray-300 w-75 border-6 rounded-4xl"
          ></div>
          <div
            style={cardStyles}
            className="h-100 p-5 bg-gray-300 w-75 border-6 rounded-4xl"
          ></div>
          <div
            style={cardStyles}
            className="h-100 p-5 bg-gray-300 w-75 border-6 rounded-4xl"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default PokeView;

{
  /*  POKE IMAGE :
      {data && (
        <img
          src={data.sprites.other["official-artwork"].front_default}
          alt={data.name}
          className="w-48 h-48 drop-shadow-2xl"
        />
      )} */
}
