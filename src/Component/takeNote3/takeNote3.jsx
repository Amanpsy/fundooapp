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
import { deletenoteAPI, getArchievenoteAPI } from '../../Services/dataService';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ColorPopper from '../ColorPopper/ColorPopper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


function Takenote3 (props) {  
      //modal

      const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          };
          const [open, setOpen] = React.useState(false);
          const handleOpen = () => setOpen(true);
          const handleClose = () => setOpen(false);
        

      const updateColor=() => {

            props.autoRefresh()
      }
      // console.log(props.note.colour)

      const deleteNote=(id)=>{
            deletenoteAPI(id)
             .then((response)=>console.log(response))
             .catch((error)=>console.log(error))
             console.log(" Successfully Deleted")
       }


      const updateArchieve =(id) => {
            getArchievenoteAPI(id)
      .then((response) => console.log(response))
      .catch((error)=>console.log(error))
      console.log('Achieve sucess')

      }
      
  return (
    <div>
        <div  className='notebox'>
          <div className='insidebox'  style={{ backgroundColor:props.note.colour}}>
            <div className="title" onClick={handleOpen}>  
               <span >   {props.note.title}</span>
            

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
                  <Tooltip title='Delete' onClick={()=>deleteNote(props.note.noteId)} >
                        <IconButton size='small' ><DeleteOutlineOutlinedIcon /></IconButton>
                  </Tooltip>


                  <Tooltip title='Background options'>
                        <IconButton size='small'>   <ColorPopper action="update" id={props.note.noteId} updateColor={updateColor} /></IconButton>
                              {/* <ColorPopper  action="update" id={props.note.noteId} updateColor={updateColor} /></IconButton> */}
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
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div> 
  )
}

export default Takenote3