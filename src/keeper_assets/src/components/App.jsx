import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]); // control states of notes with an array to store all note objects

  function AddNote(newItem) {
    // triggered when the add button is clicked
    setNotes((prevItems) => {
      return [...prevItems, newItem]; // append the newItem to the previous array
    });
  }

  function DeletNote(id) {
    // triggered when the delete button is clicked
    setNotes((prevItems) => {
      return prevItems.filter((item, index) => { // delete the item with id passed in
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      {/* pass the AddNote function to CreateArea component */}
      <CreateArea OnAdd={AddNote} />
      {/* display notes one by one */}
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={DeletNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
