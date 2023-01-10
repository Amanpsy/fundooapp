import React from "react";
import { Card, TextField } from "@mui/material";
import "../takeNote1/takeNote1.css";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import IconButton from "@mui/material/IconButton";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
// import { makeStyles } from "@mui/styles";
import { makeStyles } from "@mui/styles";
import { InputBase } from "@mui/material";

const useStyle = makeStyles({
  takenoteOne:{
    height:'7vh',
    width: '41.5vw',
    position:'relative',
    left:'500px',
    bottom:'20px',
    padding: '6px 15px',
   
  }
})

function Takenote1(props) {
   const classes = useStyle();
  const openNote = () => {
    props.openTakeNote2();
  };

  return (
    <Paper className={classes.takenoteOne} elevation={2} onClick={openNote}>
    <InputBase type="text" placeholder="Take a note..."    style={{position:'relative', right:'240px'}}    />
    <div style={{display:'flex', marginTop:'-33px',marginLeft:'550px',justifyContent:"space-between", width: '5%'}}>
    <IconButton>
              <CheckBoxOutlinedIcon />
    </IconButton>
    <IconButton>
              <BrushOutlinedIcon />
    </IconButton>
    <IconButton>
              <InsertPhotoOutlinedIcon />
    </IconButton>
    </div>
  </Paper>
)
}
export default Takenote1;
