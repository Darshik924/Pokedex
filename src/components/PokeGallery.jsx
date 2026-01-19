import React from "react";
import { useState } from "react";
import PokeCard from "./PokeCard";

const PokeGallery = ({ pokemons }) => {
  return (
    <section className="m-10 px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-33 gap-y-10 place-items-center">
      {pokemons.map((pokemonData) => (
        <PokeCard key={pokemonData.id} pokeData={pokemonData} />
        /* Without the key react renders inefficiently and warnings may come in console */
      ))}
    </section>
  );
};

export default PokeGallery;
