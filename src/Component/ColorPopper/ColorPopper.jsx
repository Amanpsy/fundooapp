import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import { updateColorAPI } from '../../Services/dataService';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';

 function ColorPopper(props) {
  const colors = ["#2ECC71", "#AF7AC5", "#F1948A", "#A3E4D7", "#F5B7B1", "#F5B041", "#DC7633", "#F1C40F", "#AAB7B8", "#F1948A", "#2ECC71", "#F5B041"]


  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;


const  createColor=(color)=> {
 
  if(props.action =="create"){
    props.noteColor(color)

  }
  else if(props.action=="update"){
  
  
    let input={noteId:props.id,colour:color}
    console.log(input)
    updateColorAPI(input)
    .then((response) =>{console.log(response)
      props.updateColor()})
    .catch((error) => console.log(error))
    console.log('Color Changed')
  }

}


  return (
    <div>
     
    <ColorLensOutlinedIcon  onClick={handleClick}/> 
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display:'flex', flexDirection:'row' }}>
          {
            colors.map((color) => (
              <div style={{height:25,width:25,borderRadius:50,backgroundColor:color,marginRight:5}}  onClick={()=> createColor(color)}>

              </div>
            ))
          }
        </Box>
      </Popper>
    </div>
  );
}

export default ColorPopper