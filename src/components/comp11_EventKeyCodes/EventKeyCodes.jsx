import React, { useEffect } from "react";
import "./EventKeyCodes.css";

const EventKeyCodes = () => {
  useEffect(() => {
    const insert = document.getElementById("insert");

    window.addEventListener("keydown", (event) => {
      insert.innerHTML = `
  <div class="key">
  ${event.key === " " ? "Space" : event.key} 
  <small>event.key</small>
</div>
<div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
</div>
<div class="key">
  ${event.code}
  <small>event.code</small>
</div>
  `;
    });
  });

  return (
    <div id="insert">
      <div className="key">Press any key to get the keyCode</div>
    </div>
  );
};

export default EventKeyCodes;
