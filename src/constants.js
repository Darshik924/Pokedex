const typeGradients = {
  /* ---------- SINGLE TYPES ---------- */
  normal: {
    nav: "#7A7A4D",
    gradient: "linear-gradient(135deg, #A8A878, #6D6D4E)",
    text: "#1F1F14",
  },
  fire: {
    nav: "#B43C00",
    gradient: "linear-gradient(135deg, #F08030, #9C3A00)",
    text: "#4A1A00",
  },
  water: {
    nav: "#274B9F",
    gradient: "linear-gradient(135deg, #6890F0, #2A4FA3)",
    text: "#102A5C",
  },
  grass: {
    nav: "#2F6F1F",
    gradient: "linear-gradient(135deg, #78C850, #3F7F2A)",
    text: "#183B12",
  },
  electric: {
    nav: "#B08A00",
    gradient: "linear-gradient(135deg, #F8D030, #B08A00)",
    text: "#3A2F00",
  },
  ice: {
    nav: "#4A9FA3",
    gradient: "linear-gradient(135deg, #98D8D8, #4A9FA3)",
    text: "#0B2E33",
  },
  fighting: {
    nav: "#7F1C17",
    gradient: "linear-gradient(135deg, #C03028, #7F1C17)",
    text: "#3B0E0B",
  },
  poison: {
    nav: "#682A68",
    gradient: "linear-gradient(135deg, #A040A0, #682A68)",
    text: "#2F1235",
  },
  ground: {
    nav: "#927D44",
    gradient: "linear-gradient(135deg, #E0C068, #927D44)",
    text: "#3B2F12",
  },
  flying: {
    nav: "#6F5DB3",
    gradient: "linear-gradient(135deg, #A890F0, #6F5DB3)",
    text: "#2F2555",
  },
  psychic: {
    nav: "#8C2E4A",
    gradient: "linear-gradient(135deg, #F85888, #8C2E4A)",
    text: "#4A1325",
  },
  bug: {
    nav: "#6D7815",
    gradient: "linear-gradient(135deg, #A8B820, #6D7815)",
    text: "#2E3306",
  },
  rock: {
    nav: "#7A6A24",
    gradient: "linear-gradient(135deg, #B8A038, #7A6A24)",
    text: "#2E260B",
  },
  ghost: {
    nav: "#493963",
    gradient: "linear-gradient(135deg, #705898, #493963)",
    text: "#2B1F40",
  },
  dragon: {
    nav: "#4B2E83",
    gradient: "linear-gradient(135deg, #7038F8, #4B2E83)",
    text: "#26124A",
  },
  dark: {
    nav: "#3A2F25",
    gradient: "linear-gradient(135deg, #705848, #3A2F25)",
    text: "#1E1813",
  },
  steel: {
    nav: "#6D6D8C",
    gradient: "linear-gradient(135deg, #B8B8D0, #6D6D8C)",
    text: "#1F2333",
  },
  fairy: {
    nav: "#C76B7E",
    gradient: "linear-gradient(135deg, #EE99AC, #C76B7E)",
    text: "#4A1F2A",
  },

  /* ---------- DUAL TYPES ---------- */
  "fire-flying": {
    gradient: "linear-gradient(135deg, #F08030, #A890F0)",
    text: "#2F2555",
  },
  "fire-fighting": {
    gradient: "linear-gradient(135deg, #F08030, #C03028)",
    text: "#3A1A12",
  },
  "fire-dragon": {
    gradient: "linear-gradient(135deg, #F08030, #7038F8)",
    text: "#26124A",
  },
  "fire-ground": {
    gradient: "linear-gradient(135deg, #F08030, #E0C068)",
    text: "#3B2F12",
  },
  "water-ice": {
    gradient: "linear-gradient(135deg, #6890F0, #98D8D8)",
    text: "#0B2E33",
  },
  "water-ground": {
    gradient: "linear-gradient(135deg, #6890F0, #E0C068)",
    text: "#2B2B1C",
  },
  "water-flying": {
    gradient: "linear-gradient(135deg, #6890F0, #A890F0)",
    text: "#2F2555",
  },
  "grass-poison": {
    gradient: "linear-gradient(135deg, #78C850, #A040A0)",
    text: "#2E0032",
  },
  "grass-ground": {
    gradient: "linear-gradient(135deg, #78C850, #E0C068)",
    text: "#3B2F12",
  },
  "grass-fairy": {
    gradient: "linear-gradient(135deg, #78C850, #EE99AC)",
    text: "#3A1F2A",
  },
  "electric-flying": {
    gradient: "linear-gradient(135deg, #F8D030, #A890F0)",
    text: "#3A2F00",
  },
  "electric-steel": {
    gradient: "linear-gradient(135deg, #F8D030, #B8B8D0)",
    text: "#1F2333",
  },
  "psychic-fairy": {
    gradient: "linear-gradient(135deg, #F85888, #EE99AC)",
    text: "#4A1F2A",
  },
  "psychic-flying": {
    gradient: "linear-gradient(135deg, #F85888, #A890F0)",
    text: "#3A1F4A",
  },
  "ghost-poison": {
    gradient: "linear-gradient(135deg, #705898, #A040A0)",
    text: "#2B1F40",
  },
  "ghost-dark": {
    gradient: "linear-gradient(135deg, #705898, #705848)",
    text: "#1E1813",
  },
  "dragon-flying": {
    gradient: "linear-gradient(135deg, #7038F8, #A890F0)",
    text: "#26124A",
  },
  "dragon-ground": {
    gradient: "linear-gradient(135deg, #7038F8, #E0C068)",
    text: "#3B2F12",
  },
  "rock-ground": {
    gradient: "linear-gradient(135deg, #B8A038, #E0C068)",
    text: "#2E260B",
  },
  "rock-water": {
    gradient: "linear-gradient(135deg, #B8A038, #6890F0)",
    text: "#1F2A33",
  },
  "steel-psychic": {
    gradient: "linear-gradient(135deg, #B8B8D0, #F85888)",
    text: "#1F2333",
  },
  "steel-fairy": {
    gradient: "linear-gradient(135deg, #B8B8D0, #EE99AC)",
    text: "#4A1F2A",
  },
  "dark-flying": {
    gradient: "linear-gradient(135deg, #705848, #A890F0)",
    text: "#1E1813",
  },
  "dark-dragon": {
    gradient: "linear-gradient(135deg, #705848, #7038F8)",
    text: "#26124A",
  },

  /* ---------- FALLBACK ---------- */
  default: {
    nav: "#444",
    gradient: "linear-gradient(135deg, #777, #333)",
    text: "#111",
  },
};

const typeCardColors = {
  normal: "#8E8E6E", // darker beige-gray
  fire: "#C24A1D", // burnt orange
  water: "#2F6FD6", // deep blue
  grass: "#3E8F3E", // rich green
  electric: "#C9A000", // strong yellow-gold
  ice: "#4FB5C5", // icy teal-blue
  fighting: "#8C1D18", // dark red
  poison: "#6A2A7A", // deep purple
  ground: "#9C7A2F", // earthy brown-gold
  flying: "#6E75C7", // muted sky-indigo
  psychic: "#C02C5A", // strong pink-red
  bug: "#6D7F14", // olive green
  rock: "#7A6A24", // stone brown
  ghost: "#4B3B6B", // dark violet
  dragon: "#4A1FB8", // royal indigo
  dark: "#3A2F25", // charcoal brown
  steel: "#6B6F8A", // cool steel blue-gray
  fairy: "#B85C78", // dusty rose
};

const typeChart = {
  normal: {
    weakTo: ["fighting"],
    strongAgainst: [],
  },
  fire: {
    weakTo: ["water", "rock", "ground"],
    strongAgainst: ["grass", "ice", "bug", "steel"],
  },
  water: {
    weakTo: ["electric", "grass"],
    strongAgainst: ["fire", "rock", "ground"],
  },
  grass: {
    weakTo: ["fire", "ice", "poison", "flying", "bug"],
    strongAgainst: ["water", "rock", "ground"],
  },
  electric: {
    weakTo: ["ground"],
    strongAgainst: ["water", "flying"],
  },
  ice: {
    weakTo: ["fire", "fighting", "rock", "steel"],
    strongAgainst: ["grass", "ground", "flying", "dragon"],
  },
  fighting: {
    weakTo: ["flying", "psychic", "fairy"],
    strongAgainst: ["normal", "ice", "rock", "dark", "steel"],
  },
  poison: {
    weakTo: ["ground", "psychic"],
    strongAgainst: ["grass", "fairy"],
  },
  ground: {
    weakTo: ["water", "grass", "ice"],
    strongAgainst: ["fire", "electric", "poison", "rock", "steel"],
  },
  flying: {
    weakTo: ["electric", "ice", "rock"],
    strongAgainst: ["grass", "fighting", "bug"],
  },
  psychic: {
    weakTo: ["bug", "ghost", "dark"],
    strongAgainst: ["fighting", "poison"],
  },
  bug: {
    weakTo: ["fire", "flying", "rock"],
    strongAgainst: ["grass", "psychic", "dark"],
  },
  rock: {
    weakTo: ["water", "grass", "fighting", "ground", "steel"],
    strongAgainst: ["fire", "ice", "flying", "bug"],
  },
  ghost: {
    weakTo: ["ghost", "dark"],
    strongAgainst: ["psychic", "ghost"],
  },
  dragon: {
    weakTo: ["ice", "dragon", "fairy"],
    strongAgainst: ["dragon"],
  },
  dark: {
    weakTo: ["fighting", "bug", "fairy"],
    strongAgainst: ["psychic", "ghost"],
  },
  steel: {
    weakTo: ["fire", "fighting", "ground"],
    strongAgainst: ["ice", "rock", "fairy"],
  },
  fairy: {
    weakTo: ["poison", "steel"],
    strongAgainst: ["fighting", "dragon", "dark"],
  },
};

function getTypeMatchs(type) {
  return [typeChart[type].weakTo, typeChart[type].strongAgainst];
}

function colourBasedTypes(type) {
  return typeCardColors[type];
}

export { typeGradients, colourBasedTypes, getTypeMatchs };
