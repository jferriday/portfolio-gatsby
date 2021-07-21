import React from "react";
import { Link } from "gatsby";
import "./layout.css";

const Layout = ({ children, pageTitle }) => {

    function toggleMenu() {
        const navMenu = document.querySelector('nav');
        if (navMenu.classList.contains('nav-visible')) {
            navMenu.classList.remove('nav-visible');
        } else {
            navMenu.classList.add('nav-visible');
        }
    }

  return (
    <div className="layout-grid">
      <div className="title-container">
        <h1 className="title">{pageTitle}</h1>
      </div>
      <header className="header">
        <button className="menu-button" onClick={toggleMenu}>
          <svg style={{ width: "46px", height: "46px" }} viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
            />
          </svg>
        </button>
        <nav>
          <button className="menu-button" onClick={toggleMenu}>
            <svg style={{ width: "46px", height: "46px" }} viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
              />
            </svg>
          </button>
          <ul className="nav-list">
            <li className="nav-link">
              <Link to="/">About</Link>
            </li>
            <li className="nav-link">
              <Link to="/#projects">Projects</Link>
            </li>
            <li className="nav-link">
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
