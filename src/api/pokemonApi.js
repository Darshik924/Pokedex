const fetchPokeData = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  // Using the pokemon API for Searched Pokemon Data

  if (!response.ok) {
    /* Checking if the HTTP request was true returned reponse (variable response) is an object which has property ok of true or false, returns true for success */
    throw new Error(
      `Pokemon ${name} not found`,
    ); /* In Order to effectively handle 404 not found types of error etc */
  }

  const dataIntermed = await response.json();
  return dataIntermed;
};

async function fetchEvoData(params) {
  try {
    const speciesRes = await fetch(params.species.url);
    const speciesData = await speciesRes.json();

    const evoRes = await fetch(speciesData.evolution_chain.url);
    const evoData = await evoRes.json();
    return evoData;
  } catch (err) {
    return "ERROR";
  }
}

export { fetchPokeData, fetchEvoData };
