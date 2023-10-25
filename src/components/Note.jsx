import React from "react";

function Note(props) {
  return (
    <div>
      <div className="note">
        <h1>Title</h1>
        <p>content</p>
        <button>DELETE</button>
      </div>
    </div>
  );
}

export default Note;
