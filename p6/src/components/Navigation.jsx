import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <div className="Logo">
        <img src="../LogoDesktop.png" alt="logo Kasa" />
      </div>

      <div className="Navigation">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/About">A propos</NavLink>
      </div>

    </header>
  );
};

export default Navigation;
