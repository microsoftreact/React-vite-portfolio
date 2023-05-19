import { useState } from "react";
import "./Header.css";

const Header = ({ mode, setMode, color, setColor }) => {
  const [dark, setDark] = useState(false);
  const [style, setStyle] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <h1>Night Fergana</h1>
      </div>
      <div className="links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Resume</a>
        <a href="#">Contact</a>
      </div>
      <div className={style ? "nightmode hover" : "nightmode"}>
        <div className={dark ? "circle rounded" : "circle"}></div>
        <i
          className={style ? "fa-solid fa-sun style" : "fa-solid fa-sun"}
          onClick={() => {
            setDark(!dark);
            setMode(!mode);
            setStyle(!style);
            setColor(!color);
          }}
        ></i>
        <i
          className={style ? "fa-solid fa-moon style" : "fa-solid fa-moon"}
          onClick={() => {
            setDark(!dark);
            setMode(!mode);
            setStyle(!style);
            setColor(!color);
          }}
        ></i>
      </div>
    </div>
  );
};

export default Header;
