import React from 'react';
import { NavLink } from "react-router-dom";
import { Routes } from "../../routes";

const Footer = () => {
  return (
    <footer className="footer">
      <NavLink className="footer__logo-link" to={ Routes.MAIN }>
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </NavLink>
    </footer>
  );
};

export default Footer;
