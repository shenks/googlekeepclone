import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function InputArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({ title: "", content: "" });
  }

  return (
    <div className="input">
      <form>
        <input
          onChange={handleChange}
          value={note.title}
          name="title"
          placeholder="New Title"
        />
        <textarea
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Content..."
        />
        <button onClick={submitNote}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default InputArea;
