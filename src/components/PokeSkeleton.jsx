import React from "react";

const PokeSkeleton = () => {
  return (
    <section className="mt-15 Banner pt-18 w-full min-h-screen bg-cover bg-center bg-linear-to-r from-[#FFCB05]/70 to-[#3466AF]/70">
      <div className="flex flex-col justify-around animate-pulse">
        <div className="flex justify-center">
          <div className="w-105 p-4 rounded-3xl bg-gray-200 border-4 border-gray-300 shadow-md flex flex-col gap-4">
            <div className="w-93 h-93 rounded-4xl bg-gray-300 mx-auto" />

            <div className="h-10 w-40 bg-gray-300 rounded-xl mx-auto" />

            <div className="h-6 w-24 bg-gray-300 rounded-xl mx-auto" />
          </div>
        </div>

        <div className="ml-18 cards max-w-350 mt-15 p-5 flex flex-row gap-8 justify-around">
          <SkeletonCard />

          <SkeletonCard />

          <SkeletonCard />

          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    </section>
  );
};

const SkeletonCard = () => {
  return (
    <div className="h-110 w-80 p-5 bg-gray-200 border-6 border-gray-300 rounded-4xl flex flex-col gap-6">
      <div className="h-8 w-40 bg-gray-300 rounded-xl mx-auto" />

      <div className="flex flex-col gap-7 mt-4">
        <div className="h-6 w-full bg-gray-300 rounded-lg" />
        <div className="h-6 w-full bg-gray-300 rounded-lg" />
        <div className="h-6 w-full bg-gray-300 rounded-lg" />
        <div className="h-6 w-full bg-gray-300 rounded-lg" />
      </div>
    </div>
  );
};

export default PokeSkeleton;
