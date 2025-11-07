import React from "react";

function MessageBox({ message }) {
  return (
    <p id="message" className="box">
      {message}
    </p>
  );
}

export default MessageBox;
