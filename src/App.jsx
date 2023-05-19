import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

const App = () => {
  const [mode, setMode] = useState(false);
  const [color, setColor] = useState(false);
  return (
    <div className={mode ? "container darkContainer" : "container"}>
      <Header mode={mode} setMode={setMode} color={color} setColor={setColor} />
      <Main color={color} />
    </div>
  );
};

export default App;
