import React from "react";

const PokeGallerySkeleton = ({ pokemons }) => {
  return (
    <section className="m-10 px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-33 gap-y-10 place-items-center">
      {pokemons.map((_, idx) => (
        <PokeCardSkeleton key={idx + 1} />
      ))}
    </section>
  );
};

export default PokeGallerySkeleton;
