import React from "react";
import { useState } from "react";
import Nav from "./components/Nav";
import FrontBanner from "./components/FrontBanner";
import { VIEW } from "./constants";

const App = () => {
  const [navTheme, setNavTheme] = useState("#000");
  const [view, setView] = useState(VIEW.HOME);

  return (
    <div>
      <Nav view={view} setView={setView} bgColor={navTheme} />
      <FrontBanner updateNavTheme={setNavTheme} view={view} setView={setView} />
    </div>
  );
};

export default App;
