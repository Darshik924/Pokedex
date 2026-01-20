import React from "react";
import PokeCardSkeleton from "./PokeCardSkeleton";

const PokeGallerySkeleton = () => {
  const Arr = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="m-10 ml-20 px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-33 gap-y-10 place-items-center">
      {Arr.map((_, idx) => (
        <PokeCardSkeleton key={idx + 1} />
      ))}
    </section>
  );
};

export default PokeGallerySkeleton;
