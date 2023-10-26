import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Note(props) {
  function deleteNote() {
    props.onDelete(props.id);
  }

  return (
    <div>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={deleteNote}>
          <DeleteOutlineIcon />
        </button>
      </div>
    </div>
  );
}

export default Note;
