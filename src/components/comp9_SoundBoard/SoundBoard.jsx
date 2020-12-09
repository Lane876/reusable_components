import React, { useEffect } from "react";
import "./SoundBoard.css";
import applause from "./sounds/applause.mp3";
import boo from "./sounds/boo.mp3";
import gasp from "./sounds/gasp.mp3";
import tada from "./sounds/tada.mp3";
import victory from "./sounds/victory.mp3";
import wrong from "./sounds/wrong.mp3";

const SoundBoard = () => {
  useEffect(() => {
    const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
    sounds.forEach((sound) => {
      const btn = document.createElement("button");
      btn.classList.add("btn");

      btn.innerText = sound;

      btn.addEventListener("click", () => {
        stopSongs();
        document.getElementById(sound).play();
      });

      document.getElementById("buttons").appendChild(btn);
    });

    const stopSongs = () => {
      sounds.forEach((sound) => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
      });
    };
  }, []);

  return (
    <div>
      <audio id="applause" src={applause}></audio>
      <audio id="boo" src={boo}></audio>
      <audio id="gasp" src={gasp}></audio>
      <audio id="tada" src={tada}></audio>
      <audio id="victory" src={victory}></audio>
      <audio id="wrong" src={wrong}></audio>
      <div id="buttons"></div>
    </div>
  );
};

export default SoundBoard;
