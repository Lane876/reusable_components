import React, { useEffect } from "react";
import "./AnimatedNavigation.css";

export const AnimatedNavigation = () => {
  useEffect(() => {
    const toggle = document.getElementById("toggle");
    const nav = document.getElementById("nav");

    toggle.addEventListener("click", () => nav.classList.toggle("active"));
  });
  return (
    <>
      <nav className="active" id="nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Works</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <button className="icon" id="toggle">
          <div className="line line1"></div>
          <div className="line line2"></div>
        </button>
      </nav>
    </>
  );
};
