const fetchPokeData = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  // Using the pokemon API for Searched Pokemon Data

  if (!response.ok) {
    throw new Error(
      `Pokemon ${name} not found`,
    ); /* In Order to effectively handle 404 not found types of error etc */
  }

  const dataIntermed = await response.json();
  return dataIntermed;
};

export { fetchPokeData };
