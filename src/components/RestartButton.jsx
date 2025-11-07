import React from "react";

function RestartButton({ restart }) {
  return (
    <button id="restartBtn" onClick={restart} className="reload">
      Restart
    </button>
  );
}

export default RestartButton;
