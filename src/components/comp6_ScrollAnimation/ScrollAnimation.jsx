import React, { useEffect } from "react";
import "./ScrollAnimation.css";

const ScrollAnimation = () => {
  useEffect(() => {
    const boxes = document.querySelectorAll(".box");

    window.addEventListener("scroll", checkBoxes);

    // checkBoxes();

    function checkBoxes() {
      const triggerBottom = (window.innerHeight / 5) * 4;

      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          box.classList.add("show");
        } else {
          box.classList.remove("show");
        }
      });
    }
  }, []);

  return (
    <div>
      <h1>Scroll to see Animation</h1>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
      <div className="box">
        <h2>Content</h2>
      </div>
    </div>
  );
};

export default ScrollAnimation;
