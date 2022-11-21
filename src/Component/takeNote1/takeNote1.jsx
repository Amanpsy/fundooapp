import React from "react";
import { TextField } from "@mui/material";
import '../takeNote1/takeNote1.css'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import IconButton from '@mui/material/IconButton';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
//import Checkbox from "@mui/material";
//import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';



function Takenote1(props) {
const openNote = () =>{
props.openTakeNote2()
}

return(

  <div className="takenote1" onClick={openNote}>
  <input type="text" placeholder="Take a note..."  />
  <IconButton type="button" sx={{ marginTop:-8 ,marginLeft:18 }}>
      <CheckBoxOutlinedIcon></CheckBoxOutlinedIcon>
  </IconButton>
  <IconButton type="button" sx={{ marginTop:-8 ,marginLeft:1}}>
            <BrushOutlinedIcon></BrushOutlinedIcon>
  </IconButton>
  <IconButton type="button" sx={{ marginTop:-8 ,marginLeft:0.1,marginRight:3}}>
            <InsertPhotoOutlinedIcon></InsertPhotoOutlinedIcon>
  </IconButton>
</div>
  
)
}

export default Takenote1