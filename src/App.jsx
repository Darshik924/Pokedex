import React from "react";
import { useState } from "react";
import Nav from "./components/Nav";
import FrontBanner from "./components/FrontBanner";

const App = () => {
  const [navTheme, setNavTheme] = useState("#000");
  const [isOnGalleryNew, setIsOnGalleryNew] = useState(false);

  return (
    <div>
      <Nav
        isOnGallery={isOnGalleryNew}
        setIsOnGallery={setIsOnGalleryNew}
        bgColor={navTheme}
      />
      <FrontBanner
        isOnGallery={isOnGalleryNew}
        setIsOnGallery={setIsOnGalleryNew}
        updateNavTheme={setNavTheme}
      />
    </div>
  );
};

export default App;
