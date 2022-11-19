import React from "react";

import '../takeNote1/takeNote1.css'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import IconButton from '@mui/material/IconButton';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';


function Takenote1() {
    return(
        <div className="takenote1">
          <input type="text" placeholder="Take a note..." />
          <IconButton type="button" sx={{ marginTop:-8 ,marginLeft:106.5}}>
                    <CheckBoxOutlinedIcon />
          </IconButton>
          <IconButton type="button" sx={{ marginTop:-12.5 ,marginLeft:113}}>
                    <BrushOutlinedIcon />
          </IconButton>
          <IconButton type="button" sx={{ marginTop:-17 ,marginLeft:120}}>
                    <InsertPhotoOutlinedIcon />
          </IconButton>
        </div>
    )
    }
    
    export default Takenote1