import React from "react";
import brb from "../img/brb.png";

export const Navbar = ({ setRedirecionamento, redirecionamento }) => {
  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          <img src={brb} alt="" />
        </a>
        <ul className="nav-mobile">
          <li>
            <div>
              <input
                type="checkbox"
                checked={redirecionamento}
                onChange={() => setRedirecionamento(!redirecionamento)}
              />
              Redirecionamento?
            </div>
          </li>
          <li>
            <div>Seguro?</div>
          </li>
          <li>
            <div>339?</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
