import React from "react";

const PokeCardSkeleton = () => {
  return (
    <div className="pokeCard animate-pulse">
      <div className="poke-head h-140 flex flex-col w-90 rounded-3xl border-4 border-gray-300 p-4 gap-4 justify-around bg-gray-200">
        <div className="flex justify-center">
          <div className="w-72 h-72 rounded-4xl bg-gray-300" />
        </div>

        <div className="flex justify-center">
          <div className="h-10 w-40 bg-gray-300 rounded-2xl" />
        </div>

        <div className="flex justify-center">
          <div className="h-6 w-24 bg-gray-300 rounded-xl" />
        </div>

        <div className="flex flex-col gap-3 px-6">
          <div className="flex items-center gap-4">
            <div className="h-9 w-9 rounded-full bg-gray-300" />
            <div className="h-6 w-28 bg-gray-300 rounded-lg" />
          </div>
          <div className="flex items-center gap-4">
            <div className="h-9 w-9 rounded-full bg-gray-300" />
            <div className="h-6 w-28 bg-gray-300 rounded-lg" />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="h-6 w-20 bg-gray-300 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default PokeCardSkeleton;
