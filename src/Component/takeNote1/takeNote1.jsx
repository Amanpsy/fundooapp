import React from "react";
import { cardClasses, TextField } from "@mui/material";
import '../takeNote1/takeNote1.css'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import IconButton from '@mui/material/IconButton';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
  takenote1: {
    height:' 7vh',
    width: '41.5vw',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    boxShadow: '0 0 4px 0 gray',
    position: 'relative',
    left: '140px',
    bottom: '30px',
    borderRadius: '0.5rem',
    border: 'none',
    fontSize: 'medium',
    outline: 'none',
    padding: '6px 15px',
    marginTop: '-30px'
  },
  icons:{
     display: 'flex',
     flexDirection: 'row',
     position: 'relative',
     left: '550px',
    bottom:'65px'
  },
  ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
    takenote1:{
      width : '90vw',
      left: '60px'
    },
       
    icons:{
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
      left: '220px',
     bottom:'65px'
    }
  },
  ['@media only screen and (min-width: 479px) and (max-width: 768px)']: {
    takenote1:{
      width : '80vw',
      left: '45px'
    },
       
    icons:{
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
      left: '300px',
     bottom:'65px'
    }
  },
  ['@media only screen and (min-width: 769px) and (max-width: 1024px)']: {
    takenote1:{
      width : '70vw',
      left: '5px'
    },
       
    icons:{
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
      left: '420px',
     bottom:'65px'
    }
  }


})
  
function Takenote1(props) {

const classes = useStyle()

const openNote = () =>{
props.openTakeNote2()
}


return(


  <div   onClick={openNote}>
  <input type="text"  className={classes.takenote1} placeholder="Take a note..."  />
  <div className={classes.icons}>
  <IconButton type="button" >
      <CheckBoxOutlinedIcon></CheckBoxOutlinedIcon>
  </IconButton>
  <IconButton type="button">
            <BrushOutlinedIcon></BrushOutlinedIcon>
  </IconButton>
  <IconButton type="button" >
            <InsertPhotoOutlinedIcon></InsertPhotoOutlinedIcon>
  </IconButton>
  </div>
</div>
  
)
}

export default Takenote1