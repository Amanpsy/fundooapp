import React from "react";
import { Card, TextField } from "@mui/material";
import "../takeNote1/takeNote1.css";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import IconButton from "@mui/material/IconButton";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function Takenote1(props) {
  const openNote = () => {
    props.openTakeNote2();
  };

  return (
    <Box className="takenote1" elevation={2} onClick={openNote}>
      <input type="text" placeholder="Take a note..." />

      <Box className="icon">
        <IconButton type="button">
          <CheckBoxOutlinedIcon className="buttons"></CheckBoxOutlinedIcon>
        </IconButton>
        <IconButton type="button">
          <BrushOutlinedIcon className="buttons"></BrushOutlinedIcon>
        </IconButton>
        <IconButton className="buttons" type="button">
          <InsertPhotoOutlinedIcon className="buttons"></InsertPhotoOutlinedIcon>
        </IconButton>
      </Box>
    </Box>
  );
}

export default Takenote1;
