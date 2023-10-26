import React from "react";

function Note(props) {
  return (
    <div>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button>DELETE</button>
      </div>
    </div>
  );
}

export default Note;
