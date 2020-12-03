import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import "./Menu.scss";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pages = [
    { label: "Home", link: "/" },
    { label: "Skills", link: "/skills" },
    { label: "Works", link: "/works" },
    { label: "Demos", link: "/demos" },
    { label: "Contact", link: "/contact" },
  ];

  const menuClass = "menu " + (showMenu ? "" : "menu--hidden");
  
  return (
    <>
      <div className="menu-hamburger" onClick={() => setShowMenu(true)}>
        <FiMenu scale={10} />
      </div>
      {showMenu ? <div className="menu-overlay" onClick={() => setShowMenu(false)}></div> : <></> }
          <nav className={menuClass}>
            <div className="menu-close" onClick={() => setShowMenu(false)}></div>
            <ul className="menu-list">
              {pages.map((page, index) => (
                <li key={index} className="menu-item">
                  <NavLink
                    to={page.link}
                    exact={true}
                    className="menu-link"
                    activeClassName="menu-link--active"
                    onClick={() => setShowMenu(false)}
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
