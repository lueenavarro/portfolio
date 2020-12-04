import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import "./Menu.scss";

const Menu = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const pages = [
    { label: "Home", link: "/" },
    { label: "Skills", link: "/skills" },
    { label: "Works", link: "/works" },
    { label: "Demos", link: "/demos" },
    { label: "Contact", link: "/contact" },
  ];

  const menuClass = "menu" + (showSidebar ? " menu--show-sidebar" : "");
  const renderOverlay = () => {
    if (showSidebar) {
      return (
        <div className="menu-overlay" onClick={() => setShowSidebar(false)}></div>
      );
    }
  };
  return (
    <>
      <div className="menu-hamburger">
        <FiMenu
          className="menu-hamburger-icon"
          scale={10}
          onClick={() => setShowSidebar(true)}
        />
      </div>

      {renderOverlay()}
      <nav className={menuClass}>
        <div className="menu-close" onClick={() => setShowSidebar(false)}></div>
        <ul className="menu-list">
          {pages.map((page, index) => (
            <li key={index} className="menu-item">
              <NavLink
                to={page.link}
                exact={true}
                className="menu-link"
                activeClassName="menu-link--active"
                onClick={() => setShowSidebar(false)}
              >
                {page.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Menu;
