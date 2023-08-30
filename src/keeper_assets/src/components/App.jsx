import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]); // control states of notes with an array to store all note objects

  function AddNote(newItem) {
    setNotes((prevItems) => {
      return [...prevItems, newItem]; // append the newItem to the previous array
    });
  }

  return (
    <div>
      <Header />
      {/* pass the AddNote function to CreateArea component */}
      <CreateArea OnAdd={AddNote}/> 
      {/* display notes one by one */}
      {notes.map((note, index) => ( 
        <Note key={index} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
