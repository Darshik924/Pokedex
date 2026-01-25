import React from "react";
import { IoHome } from "react-icons/io5";
import { FaCodeCompare } from "react-icons/fa6";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { HiRefresh } from "react-icons/hi";
import { useState, useRef } from "react";
import pokeTheme from "../assets/pokemon_opening_theme.mp3";
import Logo from "../assets/logonew4.png";
import { VIEW } from "../constants";

const Nav = ({ bgColor, setView, view }) => {
  const themeSong = useRef(new Audio(pokeTheme)); // Using useRef will make it create audio object only once and its value will persist across re-renders
  const [isPlaying, setisPlaying] = useState(false);
  const toggleAudio = () => {
    const audio = themeSong.current;
    if (!isPlaying) {
      audio.loop = true;
      audio.volume = 0.5;
      audio.play();
    } else {
      audio.pause();
    }
    setisPlaying(!isPlaying);
  };
  const iconStyleHome = {
    color: `${view === "gallery" ? "white" : "#FFCB05"}`,
    fontSize: "24px",
  };
  const iconStyleComp = {
    color: `${view === "gallery" ? "#FFCB05" : "white"}`,
    fontSize: "24px",
  };
  const iconStyle = {
    color: "white",
    fontSize: "24px",
  };
  const logoStyles = {
    cursor: "pointer",
  };

  const navStyles = {
    backgroundColor: `${bgColor}`,
  };

  const homeClick = () => {
    window.location.reload();
  };
  const enterGallery = () => {
    if (view === "single") {
      alert("Please go back to home to open gallery");
    }
    setView(VIEW.GALLERY);
  };

  return (
    <nav
      style={navStyles}
      className="navbar fixed z-50 top-0 left-0 h-15 w-full flex justify-between"
    >
      <ul className="ml-18 p-1.5 left flex flex-row">
        <li className="hover:cursor-pointer rounded-2xl">
          <a href=""></a>
          <button onClick={homeClick}>
            <img style={logoStyles} src={Logo} alt="Logo" className="logo" />
          </button>
        </li>
      </ul>
      <ul className="right flex gap-10 p-4 mr-20">
        <li className="mr-13">
          <button onClick={homeClick}>
            <IoHome
              style={iconStyleHome}
              className="h-9 w-10 hover:cursor-pointer hover:bg-[#02f8b6] rounded-xl"
            />
          </button>
        </li>
        <li className="mr-13">
          <button onClick={enterGallery}>
            <FaCodeCompare
              style={iconStyleComp}
              className="h-9 w-10 hover:cursor-pointer hover:bg-[#1df8c5f4] rounded-l"
            />
          </button>
        </li>
        {isPlaying ? (
          <li className="mr-13">
            <button onClick={toggleAudio}>
              <HiSpeakerWave
                style={iconStyle}
                className="h-9 w-10 hover:cursor-pointer hover:bg-[#1df8c5f4] rounded-xl"
              />
            </button>
          </li>
        ) : (
          <li className="mr-13">
            <button onClick={toggleAudio}>
              <HiSpeakerXMark
                style={iconStyle}
                className="h-9 w-10 hover:cursor-pointer hover:bg-[#1df8b5f4] rounded-xl"
              />
            </button>
          </li>
        )}
        <li className="mr-13">
          <button onClick={homeClick}>
            <HiRefresh
              style={iconStyle}
              className="h-9 w-10 hover:cursor-pointer hover:bg-[#1df8c5f4] rounded-xl"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
