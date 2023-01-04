import React from "react";
import { TextField } from "@mui/material";
import "../takeNote1/takeNote1.css";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import IconButton from "@mui/material/IconButton";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
//import Checkbox from "@mui/material";
//import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';

function Takenote1(props) {
  const openNote = () => {
    props.openTakeNote2();
  };

  return (
    <div className="takenote1" onClick={openNote}>
      <input type="text" placeholder="Take a note..." />

      <div className="icon">
        <IconButton type="button">
          <CheckBoxOutlinedIcon className="buttons"></CheckBoxOutlinedIcon>
        </IconButton>
        <IconButton type="button">
          <BrushOutlinedIcon className="buttons"></BrushOutlinedIcon>
        </IconButton>
        <IconButton className="buttons" type="button">
          <InsertPhotoOutlinedIcon className="buttons"></InsertPhotoOutlinedIcon>
        </IconButton>
      </div>
    </div>
  );
}

export default Takenote1;
