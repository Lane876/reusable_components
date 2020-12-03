import React, { useEffect } from "react";
import "./ExpandingCards.css";

const ExpandingCards = () => {
  useEffect(() => {
    const panels = document.querySelectorAll(".panel");
    panels.forEach((panel) => {
      panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
      });
    });
    const removeActiveClasses = () => {
      panels.forEach((panel) => {
        panel.classList.remove("active");
      });
    };
  }, []);

  return (
    <div className="container">
      <div
        className="panel active"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80)",
        }}
      >
        <h3>Explore the World</h3>
      </div>
      <div
        className="panel"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1594309510576-6f3e11fe22da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)",
        }}
      >
        <h3>Sunny Beach</h3>
      </div>
      <div
        className="panel"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1452868195396-89c1af3b1b2e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80)",
        }}
      >
        <h3>City of winter</h3>
      </div>
      <div
        className="panel"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1526494631344-8c6fa6462b17?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)",
        }}
      >
        <h3>Mountains</h3>
      </div>
      <div
        className="panel"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1498354136128-58f790194fa7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)",
        }}
      >
        <h3>Clouds</h3>
      </div>
    </div>
  );
};

export default ExpandingCards;
