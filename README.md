# Pokédex Web Application

This is a **Pokédex Web Application** developed by **Darshik Ladhe** as part of a **GDG Club problem statement for IIT Indore**.

The project is a **frontend-only application** that fetches and displays Pokémon data using external API calls, with no backend services involved.

---

## API Usage

The application uses the **official PokéAPI**.  
All API-related logic is located in:

src/api/

---

## Key Features

- **Search Functionality**  
  Search Pokémon by name, Pokémon ID, or official Pokédex ID. All search methods return consistent and accurate results.

- **Gallery Mode**  
  Accessible via the Gallery icon in the navigation bar, allowing users to browse and search Pokémon in a clean, gallery-style layout.

- **Detailed Pokémon View**  
  When a single Pokémon is searched, the application displays detailed information along with its evolution chain (if available).

- **Evolution Chain Support**  
  Evolution chains are displayed only for single Pokémon searches. Gallery mode does not show evolution chains.

  For Pokémon with multiple possible evolution paths (such as Eevee), the application currently displays one evolution path. Support for branching evolution chains may be added in future updates.

---

## Tech Stack

- React.js
- Tailwind CSS
- PokéAPI

---

## Project Scope

- Frontend-only implementation
- No backend or authentication
- Focused on clean UI, usability, and efficient API handling

---

## Acknowledgements

Thank you for taking the time to explore this project. Feedback and suggestions are always welcome!
