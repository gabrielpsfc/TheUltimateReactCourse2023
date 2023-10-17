import React from "react";
import "./App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Seu Logo</div>
      <ul className="nav-links">
        <li>
          <a href="/">Página Inicial</a>
        </li>
        <li>
          <a href="/contratos">Contratos</a>
        </li>
        <li>
          <a href="/contato">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="sidebar">
        <p>sidebar</p>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
      <div className="content-left">left</div>
      <div className="content-right">right</div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <MainContent />
    </div>
  );
};

export default App;
