import React, { useState } from "react";

function CreateArea(props) {
  const [newInput, setNewInput] = useState({
    // control the states of the input window
    title: "",
    content: "",
  });

  function handleChange(event) {
    // triggered when the inputs detect changes
    const { name, value } = event.target; // get the input name and value
    setNewInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value, // only change the input which detected a change and got a new value
      };
    });
  }

  function submitNote(event) {
    // triggered when the add button is clicked
    props.OnAdd(newInput); // add a note through the function AddNote() defined in Appp.jsx
    setNewInput({ title: "", content: "" }); // clear the input after adding a note
    event.preventDefault(); // prevent the automatic page reloading of the form
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={newInput.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          onChange={handleChange}
          value={newInput.content}
          rows="3"
        />
        <button type="submit" onClick={submitNote}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
