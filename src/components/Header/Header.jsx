import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <ul className="navigation__ul">
          <li className="navigation__li">
            <NavLink to="/" className='navigation__link' end >
              Главная
            </NavLink>
          </li>
          <li className="header__li">
            <NavLink to="/testimonials" className='navigation__link' >Отзывы</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
