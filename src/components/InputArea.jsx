import React from "react";

function InputArea() {
  return (
    <div className="input">
      <form>
        <input placeholder="New Title" />
        <textarea placeholder="Content..." />
        <button>Add</button>
      </form>
    </div>
  );
}

export default InputArea;
