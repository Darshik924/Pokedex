import React from "react";
import { useState } from "react";
import Nav from "./components/Nav";
import FrontBanner from "./components/FrontBanner";
import { VIEW } from "./constants";

const App = () => {
  const [navTheme, setNavTheme] = useState("#000");
  const [isOnGalleryNew, setIsOnGalleryNew] = useState(false);
  const [isOnPokeView, setIsOnPokeView] = useState(false);

  const [view, setView] = useState(VIEW.HOME);

  return (
    <div>
      <Nav
        isOnPokeView={isOnPokeView}
        setIsOnGallery={setIsOnGalleryNew}
        view={view}
        setView={setView}
        bgColor={navTheme}
        isOnGallery={isOnGalleryNew}
      />
      <FrontBanner
        setIsOnPokeView={setIsOnPokeView}
        isOnGallery={isOnGalleryNew}
        setIsOnGallery={setIsOnGalleryNew}
        updateNavTheme={setNavTheme}
        view={view}
        setView={setView}
      />
    </div>
  );
};

export default App;
