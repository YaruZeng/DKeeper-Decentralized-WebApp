import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {

  const [isExpended, setExprend] = useState(false); // control the state of the input area

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

  function handleExpend() {
    // triggered when the input area is clicked
    setExprend(true);
  }

  return (
    <div>
      <form class="create-note">
      {isExpended && (
          <input
            name="title"
            onChange={handleChange}
            value={newInput.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          onChange={handleChange}
          onClick={handleExpend}
          rows={isExpended ? 3 : 1}
          value={newInput.content}
        />
        {/* Zoom: Expend when clicked */}
        <Zoom in={isExpended ? true : false}>
          {/* Fab: a button which turns grey when the mouse is over*/}
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
