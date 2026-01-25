import React, { useEffect, useState } from "react";
import PokeView from "./PokeView.jsx";
import PokeSkeleton from "./PokeSkeleton.jsx";
import { typeGradients, VIEW } from "../constants";
import { fetchPokeData } from "../api/pokemonApi.js";
import PokeGallery from "./PokeGallery.jsx";
import PokeGallerySkeleton from "./PokeGallerySkeleton.jsx";

const FrontBanner = ({ updateNavTheme, view, setView }) => {
  const [hasSearchedMulti, setHasSearchedMulti] = useState(false);
  const [pokeName, setpokeName] = useState("");
  const [multiPokeData, setMultiPokeData] = useState([]);
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [emptyError, setEmptyError] = useState(false);
  const [incorrectPokeName, setIncorrectPokename] = useState(false);

  const handlePokeSubmit = async () => {
    if (!pokeName.trim()) {
      setEmptyError(true);
      return;
    }

    try {
      setEmptyError(false);
      setIncorrectPokename(false);
      setisLoading(true);

      const result = await fetchPokeData(pokeName.toLowerCase());
      console.log(result);
      setData(result);
    } catch (err) {
      setIncorrectPokename(true);
    } finally {
      setisLoading(false);
    }
  };

  const handleMultiPokeSubmit = async () => {
    if (!pokeName.trim()) {
      setEmptyError(true);
      return;
    }

    try {
      setEmptyError(false);
      setIncorrectPokename(false);
      setisLoading(true);
      setHasSearchedMulti(true);
      setData(null);
      setView(VIEW.HOME);
      const names = pokeName.trim().toLowerCase().split(" ");

      const pokeDataResult = await Promise.all(
        names.map((name) => fetchPokeData(name)),
      );
      /* 
      Map method will return an array of promises, Now we pass all those promises into Promise object's method all 
      It is much like Promise.all([...promises]). It takes an array of promises, runs them in parallel and waits unitl all of them are resolved 
      */
      if (multiPokeData) {
        setMultiPokeData((prev) => [...prev, ...pokeDataResult]);
      } else {
        setMultiPokeData(pokeDataResult);
      }
    } catch (err) {
      setIncorrectPokename(true);
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
    setView(VIEW.SIGNLE);
  }, [data, updateNavTheme]);

  const morePokesClicked = async () => {
    setView(VIEW.GALLERY);
    setData(null);
  };

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
    <div>
      {isLoading && !hasSearchedMulti && <PokeSkeleton />}

      {hasSearchedMulti && isLoading && (
        <section className="mt-15 pb-30 Banner bg-linear-to-r from-[#FFCB05]/70 to-[#3466AF]/70 pt-18 w-full min-h-screen bg-cover bg-center">
          <PokeGallerySkeleton />
        </section>
      )}

      {!isLoading && !data && (
        <section className="mt-15 pb-30 Banner bg-linear-to-r from-[#FFCB05]/70 to-[#3466AF]/70 pt-18 w-full min-h-screen bg-cover bg-center">
          <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center gap-10">
              <div className="ban-text text-8xl text-yellow-950/85 font-bold">
                Pokemon Encyclopedia
                <div className="ban-text mt-4 ml-69 pt-2 text-5xl text-red-900/95 font-bold">
                  Search For a Pokemonn to begin
                </div>
              </div>
              <div className="flex flex-row searchBar justify-center gap-5">
                <input
                  className="rounded-3xl bg-amber-200 h-12 w-70 px-6 font-l text-indigo-900 placeholder:text-m placeholder:text-indigo-950"
                  placeholder="Search"
                  type="text"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handlePokeSubmit();
                    }
                  }}
                  onChange={(e) => {
                    setpokeName(e.target.value);
                  }}
                />
                <button
                  disabled={isLoading}
                  onClick={handlePokeSubmit}
                  className="rounded-3xl text-xl font-bold w-35 cursor-pointer hover:bg-amber-600 bg-amber-500 text-white text-bold p-1"
                >
                  Submit
                </button>
              </div>

              {hasSearchedMulti && !isLoading && !incorrectPokeName && (
                <div>
                  <PokeGallery pokemons={multiPokeData} />
                  <div className="flex justify-center">
                    <button
                      disabled={isLoading}
                      onClick={morePokesClicked}
                      className="text-xl hover:cursor-pointer font-bold font-sans text-white bg-amber-500 p-4 border-2 border-amber-50 rounded-3xl"
                    >
                      Want More ?
                    </button>
                  </div>
                </div>
              )}

              {view === VIEW.GALLERY && (
                <div className="flex searchBar flex-col gap-10">
                  <div className="gallery-text text-4xl text-yellow-950/85 font-bold">
                    Search For multiple Pokemon Gallery at once
                  </div>

                  <div className="flex flex-row searchBar justify-center gap-5">
                    <input
                      className="rounded-3xl bg-amber-200 h-15 w-90 px-6 font-l text-indigo-900 placeholder:text-m placeholder:text-indigo-950"
                      placeholder="Search with Space"
                      type="text"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleMultiPokeSubmit();
                        }
                      }}
                      onChange={(e) => {
                        setpokeName(e.target.value);
                      }}
                    />
                    <button
                      disabled={isLoading}
                      onClick={handleMultiPokeSubmit}
                      className="rounded-3xl text-xl font-bold w-35 cursor-pointer hover:bg-amber-600 bg-amber-500 text-white text-bold p-1"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}

              {emptyError && (
                <div className="emptyTexterror text-2xl text-red-500 font-bold font-serif">
                  Pokemon Name cannot be empty
                </div>
              )}
              {incorrectPokeName && (
                <div className="incorrectPoke text-3xl text-red-500 font-bold font-serif">
                  Please Enter a Valid Pokemon Name or Pokedex No.
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default FrontBanner;
