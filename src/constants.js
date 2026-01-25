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

  "bug-bug": {
    gradient: "linear-gradient(135deg, #A6B91A, #8D9E14)",
    text: "#343A08",
  },
  "bug-dark": {
    gradient: "linear-gradient(135deg, #A6B91A, #705746)",
    text: "#343A08",
  },
  "bug-dragon": {
    gradient: "linear-gradient(135deg, #A6B91A, #6F35FC)",
    text: "#343A08",
  },
  "bug-electric": {
    gradient: "linear-gradient(135deg, #A6B91A, #F7D02C)",
    text: "#343A08",
  },
  "bug-fairy": {
    gradient: "linear-gradient(135deg, #A6B91A, #D685AD)",
    text: "#343A08",
  },
  "bug-fighting": {
    gradient: "linear-gradient(135deg, #A6B91A, #C22E28)",
    text: "#343A08",
  },
  "bug-fire": {
    gradient: "linear-gradient(135deg, #A6B91A, #EE8130)",
    text: "#343A08",
  },
  "bug-flying": {
    gradient: "linear-gradient(135deg, #A6B91A, #A98FF3)",
    text: "#343A08",
  },
  "bug-ghost": {
    gradient: "linear-gradient(135deg, #A6B91A, #735797)",
    text: "#343A08",
  },
  "bug-grass": {
    gradient: "linear-gradient(135deg, #A6B91A, #7AC74C)",
    text: "#343A08",
  },
  "bug-ground": {
    gradient: "linear-gradient(135deg, #A6B91A, #E2BF65)",
    text: "#343A08",
  },
  "bug-ice": {
    gradient: "linear-gradient(135deg, #A6B91A, #96D9D6)",
    text: "#343A08",
  },
  "bug-normal": {
    gradient: "linear-gradient(135deg, #A6B91A, #A8A77A)",
    text: "#343A08",
  },
  "bug-poison": {
    gradient: "linear-gradient(135deg, #A6B91A, #A33EA1)",
    text: "#343A08",
  },
  "bug-psychic": {
    gradient: "linear-gradient(135deg, #A6B91A, #F95587)",
    text: "#343A08",
  },
  "bug-rock": {
    gradient: "linear-gradient(135deg, #A6B91A, #B6A136)",
    text: "#343A08",
  },
  "bug-steel": {
    gradient: "linear-gradient(135deg, #A6B91A, #B7B7CE)",
    text: "#343A08",
  },
  "bug-water": {
    gradient: "linear-gradient(135deg, #A6B91A, #6390F0)",
    text: "#343A08",
  },

  // --- DARK COMBINATIONS ---

  "dark-bug": {
    gradient: "linear-gradient(135deg, #705746, #A6B91A)",
    text: "#2B211B",
  },
  "dark-dark": {
    gradient: "linear-gradient(135deg, #705746, #4F3D31)",
    text: "#2B211B",
  },
  "dark-dragon": {
    gradient: "linear-gradient(135deg, #705746, #6F35FC)",
    text: "#2B211B",
  },
  "dark-electric": {
    gradient: "linear-gradient(135deg, #705746, #F7D02C)",
    text: "#2B211B",
  },
  "dark-fairy": {
    gradient: "linear-gradient(135deg, #705746, #D685AD)",
    text: "#2B211B",
  },
  "dark-fighting": {
    gradient: "linear-gradient(135deg, #705746, #C22E28)",
    text: "#2B211B",
  },
  "dark-fire": {
    gradient: "linear-gradient(135deg, #705746, #EE8130)",
    text: "#2B211B",
  },
  "dark-flying": {
    gradient: "linear-gradient(135deg, #705746, #A98FF3)",
    text: "#2B211B",
  },
  "dark-ghost": {
    gradient: "linear-gradient(135deg, #705746, #735797)",
    text: "#2B211B",
  },
  "dark-grass": {
    gradient: "linear-gradient(135deg, #705746, #7AC74C)",
    text: "#2B211B",
  },
  "dark-ground": {
    gradient: "linear-gradient(135deg, #705746, #E2BF65)",
    text: "#2B211B",
  },
  "dark-ice": {
    gradient: "linear-gradient(135deg, #705746, #96D9D6)",
    text: "#2B211B",
  },
  "dark-normal": {
    gradient: "linear-gradient(135deg, #705746, #A8A77A)",
    text: "#2B211B",
  },
  "dark-poison": {
    gradient: "linear-gradient(135deg, #705746, #A33EA1)",
    text: "#2B211B",
  },
  "dark-psychic": {
    gradient: "linear-gradient(135deg, #705746, #F95587)",
    text: "#2B211B",
  },
  "dark-rock": {
    gradient: "linear-gradient(135deg, #705746, #B6A136)",
    text: "#2B211B",
  },
  "dark-steel": {
    gradient: "linear-gradient(135deg, #705746, #B7B7CE)",
    text: "#2B211B",
  },
  "dark-water": {
    gradient: "linear-gradient(135deg, #705746, #6390F0)",
    text: "#2B211B",
  },

  // --- DRAGON COMBINATIONS ---

  "dragon-bug": {
    gradient: "linear-gradient(135deg, #6F35FC, #A6B91A)",
    text: "#23114D",
  },
  "dragon-dark": {
    gradient: "linear-gradient(135deg, #6F35FC, #705746)",
    text: "#23114D",
  },
  "dragon-dragon": {
    gradient: "linear-gradient(135deg, #6F35FC, #4D21BD)",
    text: "#23114D",
  },
  "dragon-electric": {
    gradient: "linear-gradient(135deg, #6F35FC, #F7D02C)",
    text: "#23114D",
  },
  "dragon-fairy": {
    gradient: "linear-gradient(135deg, #6F35FC, #D685AD)",
    text: "#23114D",
  },
  "dragon-fighting": {
    gradient: "linear-gradient(135deg, #6F35FC, #C22E28)",
    text: "#23114D",
  },
  "dragon-fire": {
    gradient: "linear-gradient(135deg, #6F35FC, #EE8130)",
    text: "#23114D",
  },
  "dragon-flying": {
    gradient: "linear-gradient(135deg, #6F35FC, #A98FF3)",
    text: "#23114D",
  },
  "dragon-ghost": {
    gradient: "linear-gradient(135deg, #6F35FC, #735797)",
    text: "#23114D",
  },
  "dragon-grass": {
    gradient: "linear-gradient(135deg, #6F35FC, #7AC74C)",
    text: "#23114D",
  },
  "dragon-ground": {
    gradient: "linear-gradient(135deg, #6F35FC, #E2BF65)",
    text: "#23114D",
  },
  "dragon-ice": {
    gradient: "linear-gradient(135deg, #6F35FC, #96D9D6)",
    text: "#23114D",
  },
  "dragon-normal": {
    gradient: "linear-gradient(135deg, #6F35FC, #A8A77A)",
    text: "#23114D",
  },
  "dragon-poison": {
    gradient: "linear-gradient(135deg, #6F35FC, #A33EA1)",
    text: "#23114D",
  },
  "dragon-psychic": {
    gradient: "linear-gradient(135deg, #6F35FC, #F95587)",
    text: "#23114D",
  },
  "dragon-rock": {
    gradient: "linear-gradient(135deg, #6F35FC, #B6A136)",
    text: "#23114D",
  },
  "dragon-steel": {
    gradient: "linear-gradient(135deg, #6F35FC, #B7B7CE)",
    text: "#23114D",
  },
  "dragon-water": {
    gradient: "linear-gradient(135deg, #6F35FC, #6390F0)",
    text: "#23114D",
  },

  // --- ELECTRIC COMBINATIONS ---

  "electric-bug": {
    gradient: "linear-gradient(135deg, #F7D02C, #A6B91A)",
    text: "#5C4E04",
  },
  "electric-dark": {
    gradient: "linear-gradient(135deg, #F7D02C, #705746)",
    text: "#5C4E04",
  },
  "electric-dragon": {
    gradient: "linear-gradient(135deg, #F7D02C, #6F35FC)",
    text: "#5C4E04",
  },
  "electric-electric": {
    gradient: "linear-gradient(135deg, #F7D02C, #C4A41B)",
    text: "#5C4E04",
  },
  "electric-fairy": {
    gradient: "linear-gradient(135deg, #F7D02C, #D685AD)",
    text: "#5C4E04",
  },
  "electric-fighting": {
    gradient: "linear-gradient(135deg, #F7D02C, #C22E28)",
    text: "#5C4E04",
  },
  "electric-fire": {
    gradient: "linear-gradient(135deg, #F7D02C, #EE8130)",
    text: "#5C4E04",
  },
  "electric-flying": {
    gradient: "linear-gradient(135deg, #F7D02C, #A98FF3)",
    text: "#5C4E04",
  },
  "electric-ghost": {
    gradient: "linear-gradient(135deg, #F7D02C, #735797)",
    text: "#5C4E04",
  },
  "electric-grass": {
    gradient: "linear-gradient(135deg, #F7D02C, #7AC74C)",
    text: "#5C4E04",
  },
  "electric-ground": {
    gradient: "linear-gradient(135deg, #F7D02C, #E2BF65)",
    text: "#5C4E04",
  },
  "electric-ice": {
    gradient: "linear-gradient(135deg, #F7D02C, #96D9D6)",
    text: "#5C4E04",
  },
  "electric-normal": {
    gradient: "linear-gradient(135deg, #F7D02C, #A8A77A)",
    text: "#5C4E04",
  },
  "electric-poison": {
    gradient: "linear-gradient(135deg, #F7D02C, #A33EA1)",
    text: "#5C4E04",
  },
  "electric-psychic": {
    gradient: "linear-gradient(135deg, #F7D02C, #F95587)",
    text: "#5C4E04",
  },
  "electric-rock": {
    gradient: "linear-gradient(135deg, #F7D02C, #B6A136)",
    text: "#5C4E04",
  },
  "electric-steel": {
    gradient: "linear-gradient(135deg, #F7D02C, #B7B7CE)",
    text: "#5C4E04",
  },
  "electric-water": {
    gradient: "linear-gradient(135deg, #F7D02C, #6390F0)",
    text: "#5C4E04",
  },

  // --- FAIRY COMBINATIONS ---

  "fairy-bug": {
    gradient: "linear-gradient(135deg, #D685AD, #A6B91A)",
    text: "#523342",
  },
  "fairy-dark": {
    gradient: "linear-gradient(135deg, #D685AD, #705746)",
    text: "#523342",
  },
  "fairy-dragon": {
    gradient: "linear-gradient(135deg, #D685AD, #6F35FC)",
    text: "#523342",
  },
  "fairy-electric": {
    gradient: "linear-gradient(135deg, #D685AD, #F7D02C)",
    text: "#523342",
  },
  "fairy-fairy": {
    gradient: "linear-gradient(135deg, #D685AD, #A86482)",
    text: "#523342",
  },
  "fairy-fighting": {
    gradient: "linear-gradient(135deg, #D685AD, #C22E28)",
    text: "#523342",
  },
  "fairy-fire": {
    gradient: "linear-gradient(135deg, #D685AD, #EE8130)",
    text: "#523342",
  },
  "fairy-flying": {
    gradient: "linear-gradient(135deg, #D685AD, #A98FF3)",
    text: "#523342",
  },
  "fairy-ghost": {
    gradient: "linear-gradient(135deg, #D685AD, #735797)",
    text: "#523342",
  },
  "fairy-grass": {
    gradient: "linear-gradient(135deg, #D685AD, #7AC74C)",
    text: "#523342",
  },
  "fairy-ground": {
    gradient: "linear-gradient(135deg, #D685AD, #E2BF65)",
    text: "#523342",
  },
  "fairy-ice": {
    gradient: "linear-gradient(135deg, #D685AD, #96D9D6)",
    text: "#523342",
  },
  "fairy-normal": {
    gradient: "linear-gradient(135deg, #D685AD, #A8A77A)",
    text: "#523342",
  },
  "fairy-poison": {
    gradient: "linear-gradient(135deg, #D685AD, #A33EA1)",
    text: "#523342",
  },
  "fairy-psychic": {
    gradient: "linear-gradient(135deg, #D685AD, #F95587)",
    text: "#523342",
  },
  "fairy-rock": {
    gradient: "linear-gradient(135deg, #D685AD, #B6A136)",
    text: "#523342",
  },
  "fairy-steel": {
    gradient: "linear-gradient(135deg, #D685AD, #B7B7CE)",
    text: "#523342",
  },
  "fairy-water": {
    gradient: "linear-gradient(135deg, #D685AD, #6390F0)",
    text: "#523342",
  },

  // --- FIGHTING COMBINATIONS ---

  "fighting-bug": {
    gradient: "linear-gradient(135deg, #C22E28, #A6B91A)",
    text: "#4D120F",
  },
  "fighting-dark": {
    gradient: "linear-gradient(135deg, #C22E28, #705746)",
    text: "#4D120F",
  },
  "fighting-dragon": {
    gradient: "linear-gradient(135deg, #C22E28, #6F35FC)",
    text: "#4D120F",
  },
  "fighting-electric": {
    gradient: "linear-gradient(135deg, #C22E28, #F7D02C)",
    text: "#4D120F",
  },
  "fighting-fairy": {
    gradient: "linear-gradient(135deg, #C22E28, #D685AD)",
    text: "#4D120F",
  },
  "fighting-fighting": {
    gradient: "linear-gradient(135deg, #C22E28, #91221D)",
    text: "#4D120F",
  },
  "fighting-fire": {
    gradient: "linear-gradient(135deg, #C22E28, #EE8130)",
    text: "#4D120F",
  },
  "fighting-flying": {
    gradient: "linear-gradient(135deg, #C22E28, #A98FF3)",
    text: "#4D120F",
  },
  "fighting-ghost": {
    gradient: "linear-gradient(135deg, #C22E28, #735797)",
    text: "#4D120F",
  },
  "fighting-grass": {
    gradient: "linear-gradient(135deg, #C22E28, #7AC74C)",
    text: "#4D120F",
  },
  "fighting-ground": {
    gradient: "linear-gradient(135deg, #C22E28, #E2BF65)",
    text: "#4D120F",
  },
  "fighting-ice": {
    gradient: "linear-gradient(135deg, #C22E28, #96D9D6)",
    text: "#4D120F",
  },
  "fighting-normal": {
    gradient: "linear-gradient(135deg, #C22E28, #A8A77A)",
    text: "#4D120F",
  },
  "fighting-poison": {
    gradient: "linear-gradient(135deg, #C22E28, #A33EA1)",
    text: "#4D120F",
  },
  "fighting-psychic": {
    gradient: "linear-gradient(135deg, #C22E28, #F95587)",
    text: "#4D120F",
  },
  "fighting-rock": {
    gradient: "linear-gradient(135deg, #C22E28, #B6A136)",
    text: "#4D120F",
  },
  "fighting-steel": {
    gradient: "linear-gradient(135deg, #C22E28, #B7B7CE)",
    text: "#4D120F",
  },
  "fighting-water": {
    gradient: "linear-gradient(135deg, #C22E28, #6390F0)",
    text: "#4D120F",
  },

  // --- FIRE COMBINATIONS ---

  "fire-bug": {
    gradient: "linear-gradient(135deg, #EE8130, #A6B91A)",
    text: "#522305",
  },
  "fire-dark": {
    gradient: "linear-gradient(135deg, #EE8130, #705746)",
    text: "#522305",
  },
  "fire-dragon": {
    gradient: "linear-gradient(135deg, #EE8130, #6F35FC)",
    text: "#522305",
  },
  "fire-electric": {
    gradient: "linear-gradient(135deg, #EE8130, #F7D02C)",
    text: "#522305",
  },
  "fire-fairy": {
    gradient: "linear-gradient(135deg, #EE8130, #D685AD)",
    text: "#522305",
  },
  "fire-fighting": {
    gradient: "linear-gradient(135deg, #EE8130, #C22E28)",
    text: "#522305",
  },
  "fire-fire": {
    gradient: "linear-gradient(135deg, #EE8130, #B8601F)",
    text: "#522305",
  },
  "fire-flying": {
    gradient: "linear-gradient(135deg, #EE8130, #A98FF3)",
    text: "#522305",
  },
  "fire-ghost": {
    gradient: "linear-gradient(135deg, #EE8130, #735797)",
    text: "#522305",
  },
  "fire-grass": {
    gradient: "linear-gradient(135deg, #EE8130, #7AC74C)",
    text: "#522305",
  },
  "fire-ground": {
    gradient: "linear-gradient(135deg, #EE8130, #E2BF65)",
    text: "#522305",
  },
  "fire-ice": {
    gradient: "linear-gradient(135deg, #EE8130, #96D9D6)",
    text: "#522305",
  },
  "fire-normal": {
    gradient: "linear-gradient(135deg, #EE8130, #A8A77A)",
    text: "#522305",
  },
  "fire-poison": {
    gradient: "linear-gradient(135deg, #EE8130, #A33EA1)",
    text: "#522305",
  },
  "fire-psychic": {
    gradient: "linear-gradient(135deg, #EE8130, #F95587)",
    text: "#522305",
  },
  "fire-rock": {
    gradient: "linear-gradient(135deg, #EE8130, #B6A136)",
    text: "#522305",
  },
  "fire-steel": {
    gradient: "linear-gradient(135deg, #EE8130, #B7B7CE)",
    text: "#522305",
  },
  "fire-water": {
    gradient: "linear-gradient(135deg, #EE8130, #6390F0)",
    text: "#522305",
  },

  // --- FLYING COMBINATIONS ---

  "flying-bug": {
    gradient: "linear-gradient(135deg, #A98FF3, #A6B91A)",
    text: "#392D5E",
  },
  "flying-dark": {
    gradient: "linear-gradient(135deg, #A98FF3, #705746)",
    text: "#392D5E",
  },
  "flying-dragon": {
    gradient: "linear-gradient(135deg, #A98FF3, #6F35FC)",
    text: "#392D5E",
  },
  "flying-electric": {
    gradient: "linear-gradient(135deg, #A98FF3, #F7D02C)",
    text: "#392D5E",
  },
  "flying-fairy": {
    gradient: "linear-gradient(135deg, #A98FF3, #D685AD)",
    text: "#392D5E",
  },
  "flying-fighting": {
    gradient: "linear-gradient(135deg, #A98FF3, #C22E28)",
    text: "#392D5E",
  },
  "flying-fire": {
    gradient: "linear-gradient(135deg, #A98FF3, #EE8130)",
    text: "#392D5E",
  },
  "flying-flying": {
    gradient: "linear-gradient(135deg, #A98FF3, #7E6BB8)",
    text: "#392D5E",
  },
  "flying-ghost": {
    gradient: "linear-gradient(135deg, #A98FF3, #735797)",
    text: "#392D5E",
  },
  "flying-grass": {
    gradient: "linear-gradient(135deg, #A98FF3, #7AC74C)",
    text: "#392D5E",
  },
  "flying-ground": {
    gradient: "linear-gradient(135deg, #A98FF3, #E2BF65)",
    text: "#392D5E",
  },
  "flying-ice": {
    gradient: "linear-gradient(135deg, #A98FF3, #96D9D6)",
    text: "#392D5E",
  },
  "flying-normal": {
    gradient: "linear-gradient(135deg, #A98FF3, #A8A77A)",
    text: "#392D5E",
  },
  "flying-poison": {
    gradient: "linear-gradient(135deg, #A98FF3, #A33EA1)",
    text: "#392D5E",
  },
  "flying-psychic": {
    gradient: "linear-gradient(135deg, #A98FF3, #F95587)",
    text: "#392D5E",
  },
  "flying-rock": {
    gradient: "linear-gradient(135deg, #A98FF3, #B6A136)",
    text: "#392D5E",
  },
  "flying-steel": {
    gradient: "linear-gradient(135deg, #A98FF3, #B7B7CE)",
    text: "#392D5E",
  },
  "flying-water": {
    gradient: "linear-gradient(135deg, #A98FF3, #6390F0)",
    text: "#392D5E",
  },

  // --- GHOST COMBINATIONS ---

  "ghost-bug": {
    gradient: "linear-gradient(135deg, #735797, #A6B91A)",
    text: "#2E233B",
  },
  "ghost-dark": {
    gradient: "linear-gradient(135deg, #735797, #705746)",
    text: "#2E233B",
  },
  "ghost-dragon": {
    gradient: "linear-gradient(135deg, #735797, #6F35FC)",
    text: "#2E233B",
  },
  "ghost-electric": {
    gradient: "linear-gradient(135deg, #735797, #F7D02C)",
    text: "#2E233B",
  },
  "ghost-fairy": {
    gradient: "linear-gradient(135deg, #735797, #D685AD)",
    text: "#2E233B",
  },
  "ghost-fighting": {
    gradient: "linear-gradient(135deg, #735797, #C22E28)",
    text: "#2E233B",
  },
  "ghost-fire": {
    gradient: "linear-gradient(135deg, #735797, #EE8130)",
    text: "#2E233B",
  },
  "ghost-flying": {
    gradient: "linear-gradient(135deg, #735797, #A98FF3)",
    text: "#2E233B",
  },
  "ghost-ghost": {
    gradient: "linear-gradient(135deg, #735797, #543E70)",
    text: "#2E233B",
  },
  "ghost-grass": {
    gradient: "linear-gradient(135deg, #735797, #7AC74C)",
    text: "#2E233B",
  },
  "ghost-ground": {
    gradient: "linear-gradient(135deg, #735797, #E2BF65)",
    text: "#2E233B",
  },
  "ghost-ice": {
    gradient: "linear-gradient(135deg, #735797, #96D9D6)",
    text: "#2E233B",
  },
  "ghost-normal": {
    gradient: "linear-gradient(135deg, #735797, #A8A77A)",
    text: "#2E233B",
  },
  "ghost-poison": {
    gradient: "linear-gradient(135deg, #735797, #A33EA1)",
    text: "#2E233B",
  },
  "ghost-psychic": {
    gradient: "linear-gradient(135deg, #735797, #F95587)",
    text: "#2E233B",
  },
  "ghost-rock": {
    gradient: "linear-gradient(135deg, #735797, #B6A136)",
    text: "#2E233B",
  },
  "ghost-steel": {
    gradient: "linear-gradient(135deg, #735797, #B7B7CE)",
    text: "#2E233B",
  },
  "ghost-water": {
    gradient: "linear-gradient(135deg, #735797, #6390F0)",
    text: "#2E233B",
  },

  // --- GRASS COMBINATIONS ---

  "grass-bug": {
    gradient: "linear-gradient(135deg, #7AC74C, #A6B91A)",
    text: "#244210",
  },
  "grass-dark": {
    gradient: "linear-gradient(135deg, #7AC74C, #705746)",
    text: "#244210",
  },
  "grass-dragon": {
    gradient: "linear-gradient(135deg, #7AC74C, #6F35FC)",
    text: "#244210",
  },
  "grass-electric": {
    gradient: "linear-gradient(135deg, #7AC74C, #F7D02C)",
    text: "#244210",
  },
  "grass-fairy": {
    gradient: "linear-gradient(135deg, #7AC74C, #D685AD)",
    text: "#244210",
  },
  "grass-fighting": {
    gradient: "linear-gradient(135deg, #7AC74C, #C22E28)",
    text: "#244210",
  },
  "grass-fire": {
    gradient: "linear-gradient(135deg, #7AC74C, #EE8130)",
    text: "#244210",
  },
  "grass-flying": {
    gradient: "linear-gradient(135deg, #7AC74C, #A98FF3)",
    text: "#244210",
  },
  "grass-ghost": {
    gradient: "linear-gradient(135deg, #7AC74C, #735797)",
    text: "#244210",
  },
  "grass-grass": {
    gradient: "linear-gradient(135deg, #7AC74C, #5A9436)",
    text: "#244210",
  },
  "grass-ground": {
    gradient: "linear-gradient(135deg, #7AC74C, #E2BF65)",
    text: "#244210",
  },
  "grass-ice": {
    gradient: "linear-gradient(135deg, #7AC74C, #96D9D6)",
    text: "#244210",
  },
  "grass-normal": {
    gradient: "linear-gradient(135deg, #7AC74C, #A8A77A)",
    text: "#244210",
  },
  "grass-poison": {
    gradient: "linear-gradient(135deg, #7AC74C, #A33EA1)",
    text: "#244210",
  },
  "grass-psychic": {
    gradient: "linear-gradient(135deg, #7AC74C, #F95587)",
    text: "#244210",
  },
  "grass-rock": {
    gradient: "linear-gradient(135deg, #7AC74C, #B6A136)",
    text: "#244210",
  },
  "grass-steel": {
    gradient: "linear-gradient(135deg, #7AC74C, #B7B7CE)",
    text: "#244210",
  },
  "grass-water": {
    gradient: "linear-gradient(135deg, #7AC74C, #6390F0)",
    text: "#244210",
  },

  // --- GROUND COMBINATIONS ---

  "ground-bug": {
    gradient: "linear-gradient(135deg, #E2BF65, #A6B91A)",
    text: "#524317",
  },
  "ground-dark": {
    gradient: "linear-gradient(135deg, #E2BF65, #705746)",
    text: "#524317",
  },
  "ground-dragon": {
    gradient: "linear-gradient(135deg, #E2BF65, #6F35FC)",
    text: "#524317",
  },
  "ground-electric": {
    gradient: "linear-gradient(135deg, #E2BF65, #F7D02C)",
    text: "#524317",
  },
  "ground-fairy": {
    gradient: "linear-gradient(135deg, #E2BF65, #D685AD)",
    text: "#524317",
  },
  "ground-fighting": {
    gradient: "linear-gradient(135deg, #E2BF65, #C22E28)",
    text: "#524317",
  },
  "ground-fire": {
    gradient: "linear-gradient(135deg, #E2BF65, #EE8130)",
    text: "#524317",
  },
  "ground-flying": {
    gradient: "linear-gradient(135deg, #E2BF65, #A98FF3)",
    text: "#524317",
  },
  "ground-ghost": {
    gradient: "linear-gradient(135deg, #E2BF65, #735797)",
    text: "#524317",
  },
  "ground-grass": {
    gradient: "linear-gradient(135deg, #E2BF65, #7AC74C)",
    text: "#524317",
  },
  "ground-ground": {
    gradient: "linear-gradient(135deg, #E2BF65, #B0944B)",
    text: "#524317",
  },
  "ground-ice": {
    gradient: "linear-gradient(135deg, #E2BF65, #96D9D6)",
    text: "#524317",
  },
  "ground-normal": {
    gradient: "linear-gradient(135deg, #E2BF65, #A8A77A)",
    text: "#524317",
  },
  "ground-poison": {
    gradient: "linear-gradient(135deg, #E2BF65, #A33EA1)",
    text: "#524317",
  },
  "ground-psychic": {
    gradient: "linear-gradient(135deg, #E2BF65, #F95587)",
    text: "#524317",
  },
  "ground-rock": {
    gradient: "linear-gradient(135deg, #E2BF65, #B6A136)",
    text: "#524317",
  },
  "ground-steel": {
    gradient: "linear-gradient(135deg, #E2BF65, #B7B7CE)",
    text: "#524317",
  },
  "ground-water": {
    gradient: "linear-gradient(135deg, #E2BF65, #6390F0)",
    text: "#524317",
  },

  // --- ICE COMBINATIONS ---

  "ice-bug": {
    gradient: "linear-gradient(135deg, #96D9D6, #A6B91A)",
    text: "#1F4544",
  },
  "ice-dark": {
    gradient: "linear-gradient(135deg, #96D9D6, #705746)",
    text: "#1F4544",
  },
  "ice-dragon": {
    gradient: "linear-gradient(135deg, #96D9D6, #6F35FC)",
    text: "#1F4544",
  },
  "ice-electric": {
    gradient: "linear-gradient(135deg, #96D9D6, #F7D02C)",
    text: "#1F4544",
  },
  "ice-fairy": {
    gradient: "linear-gradient(135deg, #96D9D6, #D685AD)",
    text: "#1F4544",
  },
  "ice-fighting": {
    gradient: "linear-gradient(135deg, #96D9D6, #C22E28)",
    text: "#1F4544",
  },
  "ice-fire": {
    gradient: "linear-gradient(135deg, #96D9D6, #EE8130)",
    text: "#1F4544",
  },
  "ice-flying": {
    gradient: "linear-gradient(135deg, #96D9D6, #A98FF3)",
    text: "#1F4544",
  },
  "ice-ghost": {
    gradient: "linear-gradient(135deg, #96D9D6, #735797)",
    text: "#1F4544",
  },
  "ice-grass": {
    gradient: "linear-gradient(135deg, #96D9D6, #7AC74C)",
    text: "#1F4544",
  },
  "ice-ground": {
    gradient: "linear-gradient(135deg, #96D9D6, #E2BF65)",
    text: "#1F4544",
  },
  "ice-ice": {
    gradient: "linear-gradient(135deg, #96D9D6, #6BA3A1)",
    text: "#1F4544",
  },
  "ice-normal": {
    gradient: "linear-gradient(135deg, #96D9D6, #A8A77A)",
    text: "#1F4544",
  },
  "ice-poison": {
    gradient: "linear-gradient(135deg, #96D9D6, #A33EA1)",
    text: "#1F4544",
  },
  "ice-psychic": {
    gradient: "linear-gradient(135deg, #96D9D6, #F95587)",
    text: "#1F4544",
  },
  "ice-rock": {
    gradient: "linear-gradient(135deg, #96D9D6, #B6A136)",
    text: "#1F4544",
  },
  "ice-steel": {
    gradient: "linear-gradient(135deg, #96D9D6, #B7B7CE)",
    text: "#1F4544",
  },
  "ice-water": {
    gradient: "linear-gradient(135deg, #96D9D6, #6390F0)",
    text: "#1F4544",
  },

  // --- NORMAL COMBINATIONS ---

  "normal-bug": {
    gradient: "linear-gradient(135deg, #A8A77A, #A6B91A)",
    text: "#404040",
  },
  "normal-dark": {
    gradient: "linear-gradient(135deg, #A8A77A, #705746)",
    text: "#404040",
  },
  "normal-dragon": {
    gradient: "linear-gradient(135deg, #A8A77A, #6F35FC)",
    text: "#404040",
  },
  "normal-electric": {
    gradient: "linear-gradient(135deg, #A8A77A, #F7D02C)",
    text: "#404040",
  },
  "normal-fairy": {
    gradient: "linear-gradient(135deg, #A8A77A, #D685AD)",
    text: "#404040",
  },
  "normal-fighting": {
    gradient: "linear-gradient(135deg, #A8A77A, #C22E28)",
    text: "#404040",
  },
  "normal-fire": {
    gradient: "linear-gradient(135deg, #A8A77A, #EE8130)",
    text: "#404040",
  },
  "normal-flying": {
    gradient: "linear-gradient(135deg, #A8A77A, #A98FF3)",
    text: "#404040",
  },
  "normal-ghost": {
    gradient: "linear-gradient(135deg, #A8A77A, #735797)",
    text: "#404040",
  },
  "normal-grass": {
    gradient: "linear-gradient(135deg, #A8A77A, #7AC74C)",
    text: "#404040",
  },
  "normal-ground": {
    gradient: "linear-gradient(135deg, #A8A77A, #E2BF65)",
    text: "#404040",
  },
  "normal-ice": {
    gradient: "linear-gradient(135deg, #A8A77A, #96D9D6)",
    text: "#404040",
  },
  "normal-normal": {
    gradient: "linear-gradient(135deg, #A8A77A, #7D7C59)",
    text: "#404040",
  },
  "normal-poison": {
    gradient: "linear-gradient(135deg, #A8A77A, #A33EA1)",
    text: "#404040",
  },
  "normal-psychic": {
    gradient: "linear-gradient(135deg, #A8A77A, #F95587)",
    text: "#404040",
  },
  "normal-rock": {
    gradient: "linear-gradient(135deg, #A8A77A, #B6A136)",
    text: "#404040",
  },
  "normal-steel": {
    gradient: "linear-gradient(135deg, #A8A77A, #B7B7CE)",
    text: "#404040",
  },
  "normal-water": {
    gradient: "linear-gradient(135deg, #A8A77A, #6390F0)",
    text: "#404040",
  },

  // --- POISON COMBINATIONS ---

  "poison-bug": {
    gradient: "linear-gradient(135deg, #A33EA1, #A6B91A)",
    text: "#421941",
  },
  "poison-dark": {
    gradient: "linear-gradient(135deg, #A33EA1, #705746)",
    text: "#421941",
  },
  "poison-dragon": {
    gradient: "linear-gradient(135deg, #A33EA1, #6F35FC)",
    text: "#421941",
  },
  "poison-electric": {
    gradient: "linear-gradient(135deg, #A33EA1, #F7D02C)",
    text: "#421941",
  },
  "poison-fairy": {
    gradient: "linear-gradient(135deg, #A33EA1, #D685AD)",
    text: "#421941",
  },
  "poison-fighting": {
    gradient: "linear-gradient(135deg, #A33EA1, #C22E28)",
    text: "#421941",
  },
  "poison-fire": {
    gradient: "linear-gradient(135deg, #A33EA1, #EE8130)",
    text: "#421941",
  },
  "poison-flying": {
    gradient: "linear-gradient(135deg, #A33EA1, #A98FF3)",
    text: "#421941",
  },
  "poison-ghost": {
    gradient: "linear-gradient(135deg, #A33EA1, #735797)",
    text: "#421941",
  },
  "poison-grass": {
    gradient: "linear-gradient(135deg, #A33EA1, #7AC74C)",
    text: "#421941",
  },
  "poison-ground": {
    gradient: "linear-gradient(135deg, #A33EA1, #E2BF65)",
    text: "#421941",
  },
  "poison-ice": {
    gradient: "linear-gradient(135deg, #A33EA1, #96D9D6)",
    text: "#421941",
  },
  "poison-normal": {
    gradient: "linear-gradient(135deg, #A33EA1, #A8A77A)",
    text: "#421941",
  },
  "poison-poison": {
    gradient: "linear-gradient(135deg, #A33EA1, #7A2E7A)",
    text: "#421941",
  },
  "poison-psychic": {
    gradient: "linear-gradient(135deg, #A33EA1, #F95587)",
    text: "#421941",
  },
  "poison-rock": {
    gradient: "linear-gradient(135deg, #A33EA1, #B6A136)",
    text: "#421941",
  },
  "poison-steel": {
    gradient: "linear-gradient(135deg, #A33EA1, #B7B7CE)",
    text: "#421941",
  },
  "poison-water": {
    gradient: "linear-gradient(135deg, #A33EA1, #6390F0)",
    text: "#421941",
  },

  // --- PSYCHIC COMBINATIONS ---

  "psychic-bug": {
    gradient: "linear-gradient(135deg, #F95587, #A6B91A)",
    text: "#5E1E2F",
  },
  "psychic-dark": {
    gradient: "linear-gradient(135deg, #F95587, #705746)",
    text: "#5E1E2F",
  },
  "psychic-dragon": {
    gradient: "linear-gradient(135deg, #F95587, #6F35FC)",
    text: "#5E1E2F",
  },
  "psychic-electric": {
    gradient: "linear-gradient(135deg, #F95587, #F7D02C)",
    text: "#5E1E2F",
  },
  "psychic-fairy": {
    gradient: "linear-gradient(135deg, #F95587, #D685AD)",
    text: "#5E1E2F",
  },
  "psychic-fighting": {
    gradient: "linear-gradient(135deg, #F95587, #C22E28)",
    text: "#5E1E2F",
  },
  "psychic-fire": {
    gradient: "linear-gradient(135deg, #F95587, #EE8130)",
    text: "#5E1E2F",
  },
  "psychic-flying": {
    gradient: "linear-gradient(135deg, #F95587, #A98FF3)",
    text: "#5E1E2F",
  },
  "psychic-ghost": {
    gradient: "linear-gradient(135deg, #F95587, #735797)",
    text: "#5E1E2F",
  },
  "psychic-grass": {
    gradient: "linear-gradient(135deg, #F95587, #7AC74C)",
    text: "#5E1E2F",
  },
  "psychic-ground": {
    gradient: "linear-gradient(135deg, #F95587, #E2BF65)",
    text: "#5E1E2F",
  },
  "psychic-ice": {
    gradient: "linear-gradient(135deg, #F95587, #96D9D6)",
    text: "#5E1E2F",
  },
  "psychic-normal": {
    gradient: "linear-gradient(135deg, #F95587, #A8A77A)",
    text: "#5E1E2F",
  },
  "psychic-poison": {
    gradient: "linear-gradient(135deg, #F95587, #A33EA1)",
    text: "#5E1E2F",
  },
  "psychic-psychic": {
    gradient: "linear-gradient(135deg, #F95587, #C9426B)",
    text: "#5E1E2F",
  },
  "psychic-rock": {
    gradient: "linear-gradient(135deg, #F95587, #B6A136)",
    text: "#5E1E2F",
  },
  "psychic-steel": {
    gradient: "linear-gradient(135deg, #F95587, #B7B7CE)",
    text: "#5E1E2F",
  },
  "psychic-water": {
    gradient: "linear-gradient(135deg, #F95587, #6390F0)",
    text: "#5E1E2F",
  },

  // --- ROCK COMBINATIONS ---

  "rock-bug": {
    gradient: "linear-gradient(135deg, #B6A136, #A6B91A)",
    text: "#4A4215",
  },
  "rock-dark": {
    gradient: "linear-gradient(135deg, #B6A136, #705746)",
    text: "#4A4215",
  },
  "rock-dragon": {
    gradient: "linear-gradient(135deg, #B6A136, #6F35FC)",
    text: "#4A4215",
  },
  "rock-electric": {
    gradient: "linear-gradient(135deg, #B6A136, #F7D02C)",
    text: "#4A4215",
  },
  "rock-fairy": {
    gradient: "linear-gradient(135deg, #B6A136, #D685AD)",
    text: "#4A4215",
  },
  "rock-fighting": {
    gradient: "linear-gradient(135deg, #B6A136, #C22E28)",
    text: "#4A4215",
  },
  "rock-fire": {
    gradient: "linear-gradient(135deg, #B6A136, #EE8130)",
    text: "#4A4215",
  },
  "rock-flying": {
    gradient: "linear-gradient(135deg, #B6A136, #A98FF3)",
    text: "#4A4215",
  },
  "rock-ghost": {
    gradient: "linear-gradient(135deg, #B6A136, #735797)",
    text: "#4A4215",
  },
  "rock-grass": {
    gradient: "linear-gradient(135deg, #B6A136, #7AC74C)",
    text: "#4A4215",
  },
  "rock-ground": {
    gradient: "linear-gradient(135deg, #B6A136, #E2BF65)",
    text: "#4A4215",
  },
  "rock-ice": {
    gradient: "linear-gradient(135deg, #B6A136, #96D9D6)",
    text: "#4A4215",
  },
  "rock-normal": {
    gradient: "linear-gradient(135deg, #B6A136, #A8A77A)",
    text: "#4A4215",
  },
  "rock-poison": {
    gradient: "linear-gradient(135deg, #B6A136, #A33EA1)",
    text: "#4A4215",
  },
  "rock-psychic": {
    gradient: "linear-gradient(135deg, #B6A136, #F95587)",
    text: "#4A4215",
  },
  "rock-rock": {
    gradient: "linear-gradient(135deg, #B6A136, #8F7E29)",
    text: "#4A4215",
  },
  "rock-steel": {
    gradient: "linear-gradient(135deg, #B6A136, #B7B7CE)",
    text: "#4A4215",
  },
  "rock-water": {
    gradient: "linear-gradient(135deg, #B6A136, #6390F0)",
    text: "#4A4215",
  },

  // --- STEEL COMBINATIONS ---

  "steel-bug": {
    gradient: "linear-gradient(135deg, #B7B7CE, #A6B91A)",
    text: "#363640",
  },
  "steel-dark": {
    gradient: "linear-gradient(135deg, #B7B7CE, #705746)",
    text: "#363640",
  },
  "steel-dragon": {
    gradient: "linear-gradient(135deg, #B7B7CE, #6F35FC)",
    text: "#363640",
  },
  "steel-electric": {
    gradient: "linear-gradient(135deg, #B7B7CE, #F7D02C)",
    text: "#363640",
  },
  "steel-fairy": {
    gradient: "linear-gradient(135deg, #B7B7CE, #D685AD)",
    text: "#363640",
  },
  "steel-fighting": {
    gradient: "linear-gradient(135deg, #B7B7CE, #C22E28)",
    text: "#363640",
  },
  "steel-fire": {
    gradient: "linear-gradient(135deg, #B7B7CE, #EE8130)",
    text: "#363640",
  },
  "steel-flying": {
    gradient: "linear-gradient(135deg, #B7B7CE, #A98FF3)",
    text: "#363640",
  },
  "steel-ghost": {
    gradient: "linear-gradient(135deg, #B7B7CE, #735797)",
    text: "#363640",
  },
  "steel-grass": {
    gradient: "linear-gradient(135deg, #B7B7CE, #7AC74C)",
    text: "#363640",
  },
  "steel-ground": {
    gradient: "linear-gradient(135deg, #B7B7CE, #E2BF65)",
    text: "#363640",
  },
  "steel-ice": {
    gradient: "linear-gradient(135deg, #B7B7CE, #96D9D6)",
    text: "#363640",
  },
  "steel-normal": {
    gradient: "linear-gradient(135deg, #B7B7CE, #A8A77A)",
    text: "#363640",
  },
  "steel-poison": {
    gradient: "linear-gradient(135deg, #B7B7CE, #A33EA1)",
    text: "#363640",
  },
  "steel-psychic": {
    gradient: "linear-gradient(135deg, #B7B7CE, #F95587)",
    text: "#363640",
  },
  "steel-rock": {
    gradient: "linear-gradient(135deg, #B7B7CE, #B6A136)",
    text: "#363640",
  },
  "steel-steel": {
    gradient: "linear-gradient(135deg, #B7B7CE, #9393A8)",
    text: "#363640",
  },
  "steel-water": {
    gradient: "linear-gradient(135deg, #B7B7CE, #6390F0)",
    text: "#363640",
  },

  // --- WATER COMBINATIONS ---

  "water-bug": {
    gradient: "linear-gradient(135deg, #6390F0, #A6B91A)",
    text: "#0D2E6B",
  },
  "water-dark": {
    gradient: "linear-gradient(135deg, #6390F0, #705746)",
    text: "#0D2E6B",
  },
  "water-dragon": {
    gradient: "linear-gradient(135deg, #6390F0, #6F35FC)",
    text: "#0D2E6B",
  },
  "water-electric": {
    gradient: "linear-gradient(135deg, #6390F0, #F7D02C)",
    text: "#0D2E6B",
  },
  "water-fairy": {
    gradient: "linear-gradient(135deg, #6390F0, #D685AD)",
    text: "#0D2E6B",
  },
  "water-fighting": {
    gradient: "linear-gradient(135deg, #6390F0, #C22E28)",
    text: "#0D2E6B",
  },
  "water-fire": {
    gradient: "linear-gradient(135deg, #6390F0, #EE8130)",
    text: "#0D2E6B",
  },
  "water-flying": {
    gradient: "linear-gradient(135deg, #6390F0, #A98FF3)",
    text: "#0D2E6B",
  },
  "water-ghost": {
    gradient: "linear-gradient(135deg, #6390F0, #735797)",
    text: "#0D2E6B",
  },
  "water-grass": {
    gradient: "linear-gradient(135deg, #6390F0, #7AC74C)",
    text: "#0D2E6B",
  },
  "water-ground": {
    gradient: "linear-gradient(135deg, #6390F0, #E2BF65)",
    text: "#0D2E6B",
  },
  "water-ice": {
    gradient: "linear-gradient(135deg, #6390F0, #96D9D6)",
    text: "#0D2E6B",
  },
  "water-normal": {
    gradient: "linear-gradient(135deg, #6390F0, #A8A77A)",
    text: "#0D2E6B",
  },
  "water-poison": {
    gradient: "linear-gradient(135deg, #6390F0, #A33EA1)",
    text: "#0D2E6B",
  },
  "water-psychic": {
    gradient: "linear-gradient(135deg, #6390F0, #F95587)",
    text: "#0D2E6B",
  },
  "water-rock": {
    gradient: "linear-gradient(135deg, #6390F0, #B6A136)",
    text: "#0D2E6B",
  },
  "water-steel": {
    gradient: "linear-gradient(135deg, #6390F0, #B7B7CE)",
    text: "#0D2E6B",
  },
  "water-water": {
    gradient: "linear-gradient(135deg, #6390F0, #466AB5)",
    text: "#0D2E6B",
  },

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

const VIEW = {
  GALLERY: "gallery",
  SIGNLE: "single",
  HOME: "home",
};

export { typeGradients, colourBasedTypes, getTypeMatchs, VIEW };
