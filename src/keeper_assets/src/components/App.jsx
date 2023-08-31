import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import {keeper} from "../../../declarations/keeper";

function App() {
  const [notes, setNotes] = useState([]); // control states of notes with an array to store all note objects

  function AddNote(newItem) {
    // triggered when the add button is clicked
    setNotes((prevItems) => {
      keeper.createNote(newItem.title, newItem.content); // create a new note on backend
      return [newItem, ...prevItems]; // add the newItem to the start of previous array
    });
  }

  useEffect(() => { // triggered once the App func is triggered
    console.log("useEffect is triggered");
    fetchData();
  }, []); // stop once the func is rendered once

  async function fetchData(){ // get notes from database
    const notesArray = await keeper.readNotes();
    setNotes(notesArray);
  };

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
