import React from "react";

function Button({ text, newTitle }) {
  return <button onClick={newTitle}>{text}</button>;
}

export default Button;
