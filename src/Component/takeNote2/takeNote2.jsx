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
import { Button } from "@mui/material";
import { createNoteAPI } from "../../Services/dataService";
import ColorPopper from "../ColorPopper/ColorPopper";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import { makeStyles } from "@mui/styles";
import InputBase from "@mui/material/InputBase";

const useStyle = makeStyles({
  takenote2: {
    height: "23vh",
    width: "66%",
     margin: "0 auto ",
    background: "#fff",
    padding: "0px 8px 0px 8px",
    border: "curve",
    borderRadius: "7px",
    boxShadow: "0 1px 7px rgb(128, 128, 128)",
    display: 'flex',
    flexDirection: "column",
    justifyContent:'space-between',
     position: "relative",
      top: "-28px",
      left: "-20px",
      right: " 4px",
  },
  note: {
    height: "5vh",
    width: "10vw",
    display: "flex",
    flexDirection: " row",
    alignItems: " center",
    borderRadius: "0.5rem",
    border: "none",
    fontSize: "medium",
    outline: "none",
    background: "#fff",
  },
  allicons: {
    display: " flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

    
  },
  ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
    
    takenote2:{
      width: "72%",
      left: '49px'
    },
    allicons: {
      display: " flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      left: '20px'
      
    }



    },
   
    


});

function Takenote2(props) {
  const classes = useStyle();

  const noteColor = (bgColor) => {
    setCreateNote((prevState) => ({
      ...prevState,
      Colour: bgColor,
    }));
  };

  const noteArchieve = () => {
    setCreateNote((prevState) => ({
      ...prevState,
      archieve: true,
    }));
  };

  const [createNote, setCreateNote] = useState({
    title: "",
    description: "",
    archieve: false,
    colour: "",
    trash: false,
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
    <div >
      <div
        style={{ backgroundColor: createNote.colour }}
        className={classes.takenote2}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <InputBase
            type="text"
            placeholder="Title"
            onChange={takeTitle}
            name="title"/>
            <IconButton type="button">
            <PushPinOutlinedIcon />
          </IconButton>
        </div>
        <div>
          <input
            className={classes.note}
            type="text"
            name="Description"
            placeholder="Take a note..."
            onChange={takeDescription}
            sx={{ marginLeft: 2 }}
            style={{ backgroundColor: createNote.colour }}
          />
        </div>

        <div className={classes.allicons}>
          <IconButton type="button">
            <AddAlertOutlinedIcon></AddAlertOutlinedIcon>
          </IconButton>

          <IconButton type="button">
            <PersonAddAltOutlinedIcon></PersonAddAltOutlinedIcon>
          </IconButton>

          <IconButton type="button">
            <ColorPopper action="create" noteColor={noteColor} />
          </IconButton>

          <IconButton type="button">
            <ImageOutlinedIcon></ImageOutlinedIcon>
          </IconButton>
          <IconButton type="button">
            <ArchiveOutlinedIcon onClick={noteArchieve} />
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
          <IconButton type="button" size="small" onClick={create}>
          Close
        </IconButton>
        </div>
          
        </div>

      
    </div>
  );
}
export default Takenote2;
