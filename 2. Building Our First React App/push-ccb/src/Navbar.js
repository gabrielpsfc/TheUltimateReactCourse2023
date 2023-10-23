import React from "react";

export const Navbar = () => {
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
