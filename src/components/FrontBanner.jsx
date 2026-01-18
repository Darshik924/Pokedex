import React, { useEffect, useState } from "react";
import bannerImg from "../assets/background.jpg";
import PokeView from "./PokeView.jsx";
import PokeSkeleton from "./PokeSkeleton.jsx";
import { typeGradients } from "../constants";

const FrontBanner = ({ updateNavTheme }) => {
  const [pokeName, setpokeName] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [emptyError, setEmptyError] = useState(false);

  const handlePokeSubmit = () => {
    if (pokeName) {
      setEmptyError(false);
      fetchPokeData(pokeName.toLowerCase());
    } else if (pokeName.length === 0) {
      setEmptyError(true);
    }
  };

  const fetchPokeData = async (name) => {
    try {
      setisLoading(true);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`); // Using the pokemon API for Searchec Pokemon Data

      if (!response.ok) {
        throw new Error(
          `Pokemon ${name} not found`,
        ); /* In Order to effectively handle 404 not found types of error etc */
      }

      const dataIntermed = await response.json();
      setData(dataIntermed);

      console.log(dataIntermed);
    } catch (error) {
      console.error(error);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    if (!data) {
      return;
    }
    const types = data.types.map((t) => t.type.name);
    const { nav } = typeGradients[types[0]];
    updateNavTheme(nav);
  }, [data, updateNavTheme]);

  if (isLoading) {
    /* Want a skeleton screen to be loaded which would resemble the PokeView component which would be cooler than loading icons :))) */
    return <PokeSkeleton />;
  }

  /*
  Also must keep in mind for react hooks to be rendered before any condition statements(as like the loading one which returns PokeSkeleton component even before useEffect executes)

  Now we would want PokeView and Navbar theme to be rendered and updated respectively at the same time 
  -React would waana re render App component while rendering the Pokeview/FrontBanner component which becomes impossible
  therefore we can give updateNavTheme func as a SIDE EFFECT inside the useEffect hook...

  In the dependency array we keep data and updateNavTheme func
  */

  if (data) {
    return <PokeView fetchedData={data} />;
  }

  return (
    !isLoading &&
    !data && (
      <section className="mt-15 Banner bg-linear-to-r from-[#FFCB05]/70 to-[#3466AF]/70 pt-18 w-full min-h-screen bg-cover bg-center">
        <div className="flex justify-center">
          <div className="flex flex-col justify-center items-center gap-10">
            <div className="ban-text text-8xl text-yellow-950/85 font-bold">
              Pokemon Encyclopedia
              <div className="ban-text mt-4 ml-69 pt-2 text-5xl text-red-900/95 font-bold">
                Search For a Pokemon
              </div>
            </div>
            <div className="flex flex-row searchBar justify-center gap-5">
              <input
                className="rounded-3xl bg-amber-200 h-12 w-70 px-6 font-l text-indigo-900 placeholder:text-m placeholder:text-indigo-950"
                placeholder="Search"
                type="text"
                onChange={(e) => {
                  setpokeName(e.target.value);
                }}
              />
              <button
                onClick={handlePokeSubmit}
                className="rounded-3xl text-xl font-bold w-35 cursor-pointer hover:bg-amber-600 bg-amber-500 text-white text-bold p-1"
              >
                Submit
              </button>
            </div>
            {emptyError && (
              <div className="emptyTexterror text-2xl text-red-500 font-extrabold font-serif">
                Pokemon Name cannot be empty
              </div>
            )}
          </div>
        </div>
      </section>
    )
  );
};

export default FrontBanner;
