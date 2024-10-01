import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Note(props) {
  function handleDeleteClick() {
    props.onDelete(props.id);
  }

  function handleUpdateClick() {
    const updatedTitle = prompt("Enter new title:", props.title);
    const updatedContent = prompt("Enter new content:", props.content);
    if (updatedTitle && updatedContent) {
      props.onUpdate(props.id, { title: updatedTitle, content: updatedContent });
    }
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDeleteClick} className="delete-button">
        <DeleteIcon />
      </button>
      <button onClick={handleUpdateClick} className="update-button">
        <EditIcon />
      </button>

    </div>
  );
}

export default Note;
