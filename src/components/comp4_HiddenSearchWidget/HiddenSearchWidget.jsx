import React, { useEffect } from "react";
import "./HiddenSearchWidget.css";

const HiddenSearchWidget = () => {
  useEffect(() => {
    const serach = document.querySelector(".search");
    const btn = document.querySelector(".btn");
    const input = document.querySelector(".input");

    btn.addEventListener("click", () => {
      serach.classList.toggle("active");
      input.focus();
    });
  }, []);

  return (
    <div className="search">
      <input
        type="text"
        className="input"
        placeholder="Search..."
        style={{ fontFamily: "inherit" }}
      />
      <button className="btn">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default HiddenSearchWidget;
