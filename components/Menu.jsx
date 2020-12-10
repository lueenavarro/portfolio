import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import style from "./Menu.module.scss";
import CloseButton from "./CloseButton";

const Menu = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();
  const pages = [
    { label: "Home", link: "/" },
    { label: "Skills", link: "/skills" },
    { label: "Works", link: "/works" },
    { label: "Contact", link: "/contact" },
  ];

  const menuClass =
    style.menu + (showSidebar ? ` ${style.menuShowSidebar}` : "");
  const menuLinkClass = (page) => {
    const baseClass = style.menuLink;
    if (router.pathname === page.link) {
      return baseClass + " " + style.menuLinkActive;
    }
    return baseClass;
  };

  const renderOverlay = () => {
    if (showSidebar) {
      return (
        <div
          className={style.menuOverlay}
          onClick={() => setShowSidebar(false)}
        ></div>
      );
    }
  };

  return (
    <>
      <div className={style.menuHamburger}>
        <FiMenu
          className={style.menuHamburgerIcon}
          scale={10}
          onClick={() => setShowSidebar(true)}
        />
      </div>

      {renderOverlay()}
      <nav className={menuClass}>
        <div className={style.menuClose}>
          <CloseButton onClick={() => setShowSidebar(false)} />
        </div>
        <ul className={style.menuList}>
          {pages.map((page, index) => (
            <li key={index} className={style.menuItem}>
              <Link href={page.link} onClick={() => router.push(page.link)}>
                <a className={menuLinkClass(page)}>{page.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Menu;
