import React from 'react'
//import InputBase from '@mui/material/InputBase';
import "../takeNote3/takeNote3.css";
import { Tooltip } from '@mui/material';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import IconButton from '@mui/material/IconButton';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Button from '@mui/material/Button';
import { getArchievenoteAPI } from '../../Services/dataService';

function Takenote3 (props) {

      const updateArchieve =(id) => {
            getArchievenoteAPI(id)
      .then((response) => console.log(response))
      .catch((error)=>console.log(error))
      console.log('Achieve sucess')

      }
      
  return (
    <div>
        <div  className='notebox'>
          <div className='insidebox'>
            <div className="title">
               <span>{props.note.title}</span>
            

                <Tooltip title='Pin note'>
                    <IconButton size='small'><PushPinOutlinedIcon /></IconButton>
                </Tooltip>
            </div> 
           
         <div className='description'>
            <span>{props.note.description} </span>
        </div> 
            <div className='logo'>
                  <Tooltip title='Remind me'>
                        <IconButton size='small'><AddAlertOutlinedIcon /></IconButton>
                  </Tooltip>
                  <Tooltip title='Collaborator'>
                        <IconButton size='small'><PersonAddAltOutlinedIcon /></IconButton>
                  </Tooltip>
                  <Tooltip title='Background options'>
                        <IconButton size='small'><ColorLensOutlinedIcon /></IconButton>
                  </Tooltip>
                  <Tooltip title='Add image'>
                        <IconButton size='small'><InsertPhotoOutlinedIcon /></IconButton>
                  </Tooltip>
                  <Tooltip title='Archieve' onClick={()=>updateArchieve(props.note.noteId)}>
                        <IconButton size='small'><ArchiveOutlinedIcon /></IconButton>
                  </Tooltip>
                  <Tooltip title='More'>
                        <IconButton size='small'><MoreVertOutlinedIcon /></IconButton>
                  </Tooltip>
            </div>
          </div>
        </div>
    </div> 
  )
}

export default Takenote3