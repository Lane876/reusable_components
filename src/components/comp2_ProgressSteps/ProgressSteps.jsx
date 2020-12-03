import React, { useEffect, useState } from "react";
import "./ProgressSteps.css";

function ProgressSteps() {
  const [currentActive, setCurrentActive] = useState(1);

  useEffect(() => {
    const progress = document.getElementById("progress");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    const circles = document.querySelectorAll(".circle");

    if (currentActive > circles.length) {
      setCurrentActive(circles.length);
    }
    if (currentActive < 1) {
      setCurrentActive(1);
    }

    circles.forEach((circle, i) => {
      if (i < currentActive) {
        circle.classList.add("active");
      } else {
        circle.classList.remove("active");
      }
    });

    const actives = document.querySelectorAll(".active");
    progress.style.width =
      ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

    if (currentActive === 1) {
      prev.disabled = true;
    } else if (currentActive === circles.length) {
      next.disabled = true;
    } else {
      prev.disabled = false;
      next.disabled = false;
    }
  }, [currentActive]);

  return (
    <div className="container">
      <div className="progress-container">
        <div className="progress" id="progress"></div>
        <div className="circle active">1</div>
        <div className="circle ">2</div>
        <div className="circle ">3</div>
        <div className="circle ">4</div>
      </div>

      <button
        className="btn"
        id="prev"
        onClick={() => setCurrentActive(currentActive - 1)}
      >
        Prev
      </button>
      <button
        className="btn"
        id="next"
        onClick={() => setCurrentActive(currentActive + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default ProgressSteps;
