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
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';

function Takenote2(props) {

const noteColor=(bgColor)=> {
  setCreateNote(prevState => ({
    ...prevState,
    colour:bgColor
  }))

}


  const noteArchieve=()=> {
    setCreateNote(prevState => ({
      ...prevState,
      archieve:true
    }))
  }

  const [createNote, setCreateNote] = useState({ 
    title: "", 
    description: "" ,
    archieve:false,
    colour:'',
    trash:false
  
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
    <div className="takenote2 "  >
      <form  style={{ backgroundColor:createNote.colour }}>
        <input
          type="text"
          
          placeholder="Title"
          onChange={takeTitle}
          name="title"
            style={{ backgroundColor:createNote.colour }}
           


        />
        <div >
          <input
            className="note"
            type="text"
            name="Description"
            placeholder="Take a note..."
            onChange={takeDescription}
           
            sx={{ marginLeft: 15 , marginTop: 5}}
            style={{ backgroundColor:createNote.colour }}
          />
        </div>
      </form>



      <IconButton type="button" sx={{ marginTop: -21, marginLeft: 10 }}>
        <AddAlertOutlinedIcon></AddAlertOutlinedIcon>
      </IconButton>
      
      <IconButton type="button" sx={{ marginTop: -21.2, marginLeft: 1 }}>
        <PersonAddAltOutlinedIcon></PersonAddAltOutlinedIcon>
      </IconButton>
    
      <IconButton type="button" sx={{ marginTop: -21.2 ,marginLeft:'5px'}}>
            <ColorPopper action="create" noteColor={noteColor} />
              
          </IconButton> 

      <IconButton type="button" sx={{ marginTop: -21.2, marginLeft: 1 }}>
        <ImageOutlinedIcon></ImageOutlinedIcon>
      </IconButton>
      <IconButton type="button"  sx={{ marginTop: -21.2, marginLeft: 1 }}>
        <ArchiveOutlinedIcon  onClick={noteArchieve}/>
      </IconButton>
      <IconButton type="button" sx={{ marginTop: -21.2, marginLeft: 1 }}>
        <MoreVertOutlinedIcon></MoreVertOutlinedIcon>
      </IconButton>
      <IconButton type="button" sx={{ marginTop: -21.2, marginLeft: 1 }}>
        <UndoOutlinedIcon></UndoOutlinedIcon>
      </IconButton>
      <IconButton type="button" sx={{ marginTop: -21.2, marginLeft: 1 }}>
        <RedoOutlinedIcon></RedoOutlinedIcon>
      </IconButton>
      <IconButton
        type="button"
        onClick={create}
        sx={{ marginLeft: 4, marginTop: -21, fontSize: 16 }}
      >
        Close
      </IconButton>
    </div>
  );
}
export default Takenote2
