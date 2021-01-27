import React, { useEffect } from "react";
import "./DragNdrop.css";

const DragNdrop = () => {
  useEffect(() => {
    const fill = document.querySelector(".fill");
    const empties = document.querySelectorAll(".empty");

    fill.addEventListener("dragstart", dragStart);
    fill.addEventListener("dragend", dragEnd);

    for (const empty of empties) {
      empty.addEventListener("dragover", dragOver);
      empty.addEventListener("dragenter", dragEnter);
      empty.addEventListener("dragleave", dragLeave);
      empty.addEventListener("drop", dragDrop);
    }

    function dragStart() {
      this.className += " hold";
      setTimeout(() => (this.className = "invisible"), 0);
    }

    function dragEnd() {
      this.className = "fill";
    }

    function dragOver(e) {
      e.preventDefault();
    }

    function dragEnter(e) {
      e.preventDefault();
      this.className += " hovered";
    }

    function dragLeave() {
      this.className = "empty";
    }

    function dragDrop() {
      this.className = "empty";
      this.append(fill);
    }
  });

  return (
    <>
      <div className="empty">
        <div className="fill" draggable="true"></div>
      </div>
      <div className="empty"></div>
      <div className="empty"></div>
      <div className="empty"></div>
      <div className="empty"></div>
    </>
  );
};

export default DragNdrop;
