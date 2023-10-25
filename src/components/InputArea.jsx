import React, { useState } from "react";

function InputArea() {
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
        <button>Add</button>
      </form>
    </div>
  );
}

export default InputArea;
