import React from "react";
import "./App.css";
import { MainContent } from "./components/MainContent";
import { Navbar } from "./components/Navbar";
import { useState } from "react";

const App = () => {
  const [redirecionamento, setRedirecionamento] = useState(false);

  return (
    <div>
      {redirecionamento ? <p>ok</p> : <p>!ok</p>}
      <Navbar
        setRedirecionamento={setRedirecionamento}
        redirecionamento={redirecionamento}
      />
      <MainContent redirecionamento={redirecionamento} />
    </div>
  );
};

export default App;
