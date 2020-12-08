import React, { useEffect } from "react";
import "./SplitLandingPage.css";

const SplitLandingPage = () => {
  useEffect(() => {
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");
    const container = document.querySelector(".container");

    left.addEventListener("mouseenter", () =>
      container.classList.add("hover-left")
    );
    left.addEventListener("mouseleave", () =>
      container.classList.remove("hover-left")
    );

    right.addEventListener("mouseenter", () =>
      container.classList.add("hover-right")
    );
    right.addEventListener("mouseleave", () =>
      container.classList.remove("hover-right")
    );
  }, []);

  return (
    <div className="container">
      <div className="split left">
        <h1>PlayStation 5</h1>
        <a href="/" className="btn">
          Buy Now
        </a>
      </div>
      <div className="split right">
        <h1>XBox Series X</h1>
        <a href="/" className="btn">
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default SplitLandingPage;
