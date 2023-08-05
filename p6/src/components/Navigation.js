import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="Header">
      <div className="Logo">
        <img src="./LogoDesktop.png" alt="logo Kasa" />
      </div>

      <div className="Navigation">
        <NavLink to="/">
          <a href="Accueil">Accueil</a>
        </NavLink>
        <NavLink to="/about">
          <a href="A propos">A propos</a>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
