import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  console.log("✅ Navbar.jsx loaded");

  const [menu, setMenu] = useState("home");

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Me", id: "about" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Contact", id: "contact" },
  ];

  const openMenu = () => {
    document.querySelector(".nav-menu")?.classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".nav-menu")?.classList.remove("open");
  };

  return (
    <nav className="navbar">
      <p>Navbar is working ✅</p>
    </nav>
  );
};

export default Navbar;
