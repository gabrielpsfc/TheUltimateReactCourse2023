import React from "react";
import "./App.css";
import { MainContent } from "./MainContent";
import { Navbar } from "./Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainContent />
    </div>
  );
};

export default App;
