import React from "react";
import { useState } from "react";
import Nav from "./components/Nav";
import FrontBanner from "./components/FrontBanner";

const App = () => {
  const [navTheme, setNavTheme] = useState("#000");
  const [isOnGalleryNew, setIsOnGalleryNew] = useState(false);
  const [isOnPokeView, setIsOnPokeView] = useState(false);

  return (
    <div>
      <Nav
        isOnPokeView={isOnPokeView}
        setIsOnGallery={setIsOnGalleryNew}
        bgColor={navTheme}
      />
      <FrontBanner
        setIsOnPokeView={setIsOnPokeView}
        isOnGallery={isOnGalleryNew}
        setIsOnGallery={setIsOnGalleryNew}
        updateNavTheme={setNavTheme}
      />
    </div>
  );
};

export default App;
