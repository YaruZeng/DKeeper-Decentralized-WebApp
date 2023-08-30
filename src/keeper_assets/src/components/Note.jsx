import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.onDelete(props.id); // triggered only when the button is clicked
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
