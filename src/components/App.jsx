import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import InputArea from "./InputArea";

function App() {
  const [notes, setNotes] = useState([]);

  function updateNotes(newNote) {
    console.log("Current notes:", notes);
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
    console.log(notes);
  }

  return (
    <div>
      <Header />
      {/* tested, array updates */}
      <InputArea onAdd={updateNotes} />
      {notes.map((eachItem, index) => (
        <Note key={index} title={eachItem.title} content={eachItem.content} />
      ))}
      ;
      <Footer />
    </div>
  );
}

export default App;

//steps now:
// what is next:

// need an array to store new notes, needs state in App.jsx -done
// need a function in App.jsx to update state of array - done, named updateNotes
// when we add new note in InputArea, needs to call the function from App.jsx so need props -done
// need to map the array to display items - done
// need to provide props to note.jsx
