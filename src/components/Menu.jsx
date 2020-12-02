import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";

const Menu = () => {
  const pages = [
    { label: "Home", link: "/" },
    { label: "Skills", link: "/skills" },
    { label: "Works", link: "/works" },
    { label: "Demos", link: "/demos" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <nav className="menu">
      <ul className="menu-list">
        {pages.map((page, index) => (
          <li key={index} className="menu-item">
            <NavLink
              to={page.link}
              exact={true}
              className="menu-link"
              activeClassName="menu-link--active"
            >
              {page.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
