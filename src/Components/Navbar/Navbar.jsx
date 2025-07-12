import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Me", id: "about" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Contact", id: "contact" },
  ];

  const openMenu = () => {
    document.querySelector(".nav-menu").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".nav-menu").classList.remove("open");
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />

      <img
        src={menu_open}
        alt="Open Menu"
        className="nav-mob-open"
        onClick={openMenu}
      />

      <ul className="nav-menu">
        <img
          src={menu_close}
          alt="Close Menu"
          className="nav-mob-close"
          onClick={closeMenu}
        />

        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              setMenu(item.id);
              closeMenu();
            }}
          >
            <AnchorLink href={`#${item.id}`} offset="80">
              <p>{item.label}</p>
              {menu === item.id && <img src={underline} alt="underline" />}
            </AnchorLink>
          </li>
        ))}
      </ul>
      <div className="nav-connect" onClick={() => setMenu("contact")}>
        <AnchorLink href="#contact" offset="80">
          Connect With Me
        </AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;
