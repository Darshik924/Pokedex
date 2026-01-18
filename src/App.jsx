import React from "react";
import { useState } from "react";
import Nav from "./components/Nav";
import FrontBanner from "./components/FrontBanner";

const App = () => {
  const [navTheme, setNavTheme] = useState("#000");

  return (
    <div>
      <Nav bgColor={navTheme} />
      <FrontBanner updateNavTheme={setNavTheme} />
    </div>
  );
};

export default App;
