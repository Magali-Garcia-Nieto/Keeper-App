import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isZoomed, setZoom] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function checkZoom() {
    // if (isZoomed === false) {
    //   console.log("It hasn´t been clicked");
    setZoom(true);
    // } else {
    //   console.log("It was clicked!");
    // }
  }

  // function Form() {
  //   if (isZoomed === false) {
  //     return (

  //         <textarea placeholder="Take a note..." rows="1" />

  //     );
  //   } else {
  //     console.log("It was clicked!");
  //     return (
  //      <div>
  //         <input
  //           name="title"
  //           onChange={handleChange}
  //           value={note.title}
  //           placeholder="Title"
  //         />
  //         <textarea
  //           name="content"
  //           onChange={handleChange}
  //           value={note.content}
  //           placeholder="Take a note..."
  //           rows="3"
  //         />
  //     </div>
  //     );
  //   }
  // }
  return (
    <div onClick={checkZoom}>
      <form className="create-note">
        {/* <Form /> */}
        {isZoomed ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isZoomed ? 3 : 1}
        />
        <Zoom in={isZoomed}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
