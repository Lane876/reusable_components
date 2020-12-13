import React, { useEffect } from "react";
import "./RandomChoicePicker.css";

const RandomChoicePicker = () => {
  useEffect(() => {
    const tagsEl = document.getElementById("tags");
    const textarea = document.getElementById("textarea");

    textarea.focus();

    textarea.addEventListener("keyup", (e) => {
      createTags(e.target.value);

      if (e.key === "Enter") {
        setTimeout(() => {
          e.target.value = "";
        }, 10);

        randomSelect();
      }
    });

    function createTags(input) {
      const tags = input
        .split(",")
        .filter((tag) => tag.trim() !== "")
        .map((tag) => tag.trim());

      tagsEl.innerHTML = "";

      tags.forEach((tag) => {
        const tagEl = document.createElement("span");
        tagEl.classList.add("tag");
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
      });
    }

    function randomSelect() {
      const times = 30;

      const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        setTimeout(() => {
          unHighlightTag(randomTag);
        }, 100);
      }, 100);

      setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
          const randomTag = pickRandomTag();

          highlightTag(randomTag);
        }, 100);
      }, times * 100);
    }
  });

  function pickRandomTag() {
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)];
  }

  function highlightTag(tag) {
    tag.classList.add("highlight");
  }

  function unHighlightTag(tag) {
    tag.classList.remove("highlight");
  }

  return (
    <div className="container">
      <h3>
        Enter all of the choices divided by a comma (','). <br /> Press enter
        when you're done
      </h3>
      <textarea placeholder="Enter choices here..." id="textarea"></textarea>

      <div id="tags"></div>
    </div>
  );
};

export default RandomChoicePicker;
