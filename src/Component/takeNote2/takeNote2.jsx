import React, { useState } from "react";
import "../takeNote2/takeNote2.css";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import IconButton from "@mui/material/IconButton";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import { Button, Paper } from "@mui/material";
import { createNoteAPI } from "../../Services/dataService";
import ColorPopper from "../ColorPopper/ColorPopper";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";

function Takenote2(props) {

  const noteColor = (bgcolor) => {
    setCreateNote((prevState) => ({
      ...prevState,
    color: bgcolor,
    }));
  };

  const noteArchieve = () => {
    setCreateNote((prevState) => ({
      ...prevState,
      isArchived: true,
    }));
  };

  const [createNote, setCreateNote] = useState({
    title: "",
    description: "",
    isArchived: false,
    color: "",
  });

  const takeTitle = (event) => {
    setCreateNote((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };
  const takeDescription = (event) => {
    setCreateNote((prevState) => ({
      ...prevState,
      description: event.target.value,
    }));
  };

  const create = () => {
    props.closeTakeNote2();
    console.log("created note", createNote);

    createNoteAPI(createNote)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("notes created");
  };

  return (
    <Paper className="takenote2 " style={{ backgroundColor: createNote.color }}>
      <form style={{ backgroundColor: createNote.color }}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={takeTitle}
          style={{ backgroundColor: createNote.color }}
        />
        <box>
          <input
            className="note"
            type={"text"}
            name="content"
            placeholder="Take a note..."
            onChange={takeDescription}
            sx={{ marginLeft: 15, marginTop: 5 }}
            style={{ backgroundColor: createNote.color }}
          />
        </box>
      </form>

      <box className="mainIcon">
        <box className="actions">
          <IconButton type="button">
            <AddAlertOutlinedIcon></AddAlertOutlinedIcon>
          </IconButton>

          <IconButton type="button">
            <PersonAddAltOutlinedIcon></PersonAddAltOutlinedIcon>
          </IconButton>

          <IconButton type="button"            >
          <ColorPopper noteColor={noteColor} action= "create" />
          </IconButton>

          <IconButton type="button">
            <ImageOutlinedIcon></ImageOutlinedIcon>
          </IconButton>
          <IconButton onClick={noteArchieve} type="button">
            <ArchiveOutlinedIcon />
          </IconButton>
          <IconButton type="button">
            <MoreVertOutlinedIcon></MoreVertOutlinedIcon>
          </IconButton>
          <IconButton type="button">
            <UndoOutlinedIcon></UndoOutlinedIcon>
          </IconButton>
          <IconButton type="button">
            <RedoOutlinedIcon></RedoOutlinedIcon>
          </IconButton>
        </box>

        <IconButton type="button" onClick={create}>
          <p className="close"> Close</p>
        </IconButton>
      </box>
    </Paper>
  );
}
export default Takenote2;
