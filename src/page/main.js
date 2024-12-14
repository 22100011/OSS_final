import React from "react";
import { Link } from "react-router-dom";
import MainPage from "../components/mainPage";
import "../css/main.css";

const Add = () => {
  return (
    <>
      <header className="header">
        <h3 className="header-title">
          <a href="/main" className="header-link">
            Global Hunger Index Analysis System
          </a>
        </h3>
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/map" className="nav-link">Map Page</Link>
            </li>
            <li className="nav-item">
              <Link to="/data" className="nav-link">Data Page</Link>
            </li>
          </ul>
        </nav>
      </header>
      <MainPage/>
      
    </>
  );
};

export default Add;
