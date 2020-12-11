import React, { useEffect, useState } from "react";
import "./DadJokes.css";

const DadJokes = () => {
  const [joke, setJoke] = useState("");

  async function generateJoke() {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    const res = await fetch("https://icanhazdadjoke.com", config);
    const data = await res.json();

    setJoke(data.joke);
  }

  useEffect(() => {
    generateJoke();
  }, []);

  // useEffect(() => {
  //   const jokeEl = document.getElementById("joke");
  //   const jokeBtn = document.getElementById("jokeBtn");

  //   jokeBtn.addEventListener("click", generateJoke);

  //   generateJoke();

  //   async function generateJoke() {
  //     const config = {
  //       headers: {
  //         Accept: "application/json",
  //       },
  //     };

  //     const res = await fetch("https://icanhazdadjoke.com", config);

  //     const data = await res.json();

  //     jokeEl.innerHTML = data.joke;
  //   }
  // }, []);
  return (
    <div className="container">
      <h3>Don't Laugh Challenge</h3>
      <div id="joke" className="joke">
        {joke}
      </div>
      <button id="jokeBtn" className="btn" onClick={generateJoke}>
        Get Another Joke
      </button>
    </div>
  );
};

export default DadJokes;
