import React, { useState } from "react";
//import InputBase from '@mui/material/InputBase';
import "../takeNote3/takeNote3.css";
import { Tooltip } from "@mui/material";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import IconButton from "@mui/material/IconButton";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import {
  deletenoteAPI,
  getArchievenoteAPI,
  updatenoteAPI,
} from "../../Services/dataService";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ColorPopper from "../ColorPopper/ColorPopper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  notebox: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: 'black',
    height: '25vh',
     marginLeft:' 12px',
    marginBottom: '12px',
    justifyContent:'space-between',
    // width: '20vw'
  },
  insidebox: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height:' 99%',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    boxShadow: '1px 1px 5px rgba(0,0,0,0.6)',
    justifyContent: 'flex'
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    flexRight : '2px',
    justifyContent: 'space-between',
    // marginBottom: '20%',
    // marginTop: '40',
     padding: '12px 16px 0px'
  },
  description:{
    height: '50%' ,
     left: '18%',
     display: 'flex',
     flexDirection: 'row',
     flexRight : '2px',
     justifyContent: 'space-between',
     padding: '4px 16px 12px'

  },
  
  logo:{
    display:' flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '30%',
    marginBottom: '100'
  },
  icons:{
    display:' flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  modalContent:{
    height: '182px',
    borderRadius:'8px',
    display : 'flex',
    flexDirection:'column',
    padding: '12px 16px'


  },

  titleInput:
  {
border: 'none',

  },
  notes:{
  flex: 1,
  border: 'none'

  },
  ['@media only screen and (min-width: 320px) and (max-width: 480px)']: {
    notebox:{
      left: "50%",
      width: '100%',
      
      
    },
       
    icons:{
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
      left: '230px',
     bottom:'65px'
    }
  },
  ['@media only screen and (min-width: 481px) and (max-width: 768px)']: {
    notebox:{
      width: '50vw'
      
    },
    insidebox:{
      width: '100vw'
    }
       ,
    icons:{
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
      left: '230px',
     bottom:'65px'
    }
  },

 ['@media only screen and (min-width: 769px) and (max-width: 1024px)']: {
    notebox:{
    left: '80%'
      
    },
       
    icons:{
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
      left: '230px',
     bottom:'65px'
    }
  }


})

function Takenote3(props) {

  const classes = useStyle()
  //modal

  const style = {
    position: "relative",
    top: "38%",
    left: "50px",
    transform: "translate(-50%, -50%)",
    width: 550,
    border: 'curve',
    borderRadius: 2,
    flexWrap: 'wrap',
    
    

  };
  const [open, setOpen] = React.useState(false);
  const [modalState, setModalstate] = useState({
    noteId: "",
    title: "",
    description: "",
  });
  const handleOpen = (modalobj) => {
    setOpen(true);
    console.log(modalobj);
    setModalstate({
      noteId: modalobj.noteId,
      title: modalobj.title,
      description: modalobj.description,
    });
  };
  const handleClose = () => setOpen(false);

  const updateColor = () => {
    props.autoRefresh();
  };
  // console.log(props.note.colour)

  const deleteNote = (id) => {
    deletenoteAPI(id)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    console.log(" Successfully Deleted");
  };

  const updateArchieve = (id) => {
    getArchievenoteAPI(id)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    console.log("Achieve sucess");
  };

  const takeTitle = (event) => {
    setModalstate((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };
  const takeDescription = (event) => {
    setModalstate((prevState) => ({
      ...prevState,
      description: event.target.value,
    }));
  };

  const closebtn = () => {
    setOpen(false);    
    updatenoteAPI(modalState.noteId, modalState)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    console.log("notes updated");
  };

 


  return (
    <div>
      <div className={classes.notebox}>
        <div
          className={classes.insidebox}
          style={{ backgroundColor: props.note.colour }}
        >
          <div className={classes.title} onClick={() => handleOpen(props.note)}>
            <span>{props.note.title}</span>

            <Tooltip title="Pin note">
              <IconButton size="small">
                <PushPinOutlinedIcon />
              </IconButton>
            </Tooltip>
          </div>

          <div className={classes.description}>
            <span>{props.note.description} </span>
          </div>
          <div className={classes.logo}>
            <Tooltip title="Remind me">
              <IconButton size="small">
                <AddAlertOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Collaborator">
              <IconButton size="small">
                <PersonAddAltOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip
              title="Delete"
              onClick={() => deleteNote(props.note.noteId)}
            >
              <IconButton size="small">
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Background options">
              <IconButton size="small">
                {" "}
                <ColorPopper
                  action="update"
                  id={props.note.noteId}
                  updateColor={updateColor}
                />
              </IconButton>
              {/* <ColorPopper  action="update" id={props.note.noteId} updateColor={updateColor} /></IconButton> */}
            </Tooltip>
            <Tooltip title="Add image">
              <IconButton size="small">
                <InsertPhotoOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip
              title="Archieve"
              onClick={() => updateArchieve(props.note.noteId)}
            >
              <IconButton size="small">
                <ArchiveOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="More">
              <IconButton size="small">
                <MoreVertOutlinedIcon />
              </IconButton>
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
        <Box  sx={style }>
          <div className={classes.modalContent} style={{ backgroundColor: props.note.colour }}>
            <input className={classes.titleInput}
              style={{ backgroundColor: props.note.colour }}
              type="text"
              defaultValue={modalState.title}
              name="title"
              onChange={takeTitle}
            />

            <input
              style={{ backgroundColor: props.note.colour }}
              className={classes.notes}
              type={"text"}
              name="content"
              defaultValue={modalState.description}
              onChange={takeDescription}
            />
            <div className={classes.icons}>
              <div className="buttonmodal">
                <Tooltip title="Remind me">
                  <IconButton size="small">
                    <AddAlertOutlinedIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Collaborator">
                  <IconButton size="small">
                    <PersonAddAltOutlinedIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Background options">
                  <IconButton size="small">
                    <ColorLensOutlinedIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Add image">
                  <IconButton size="small">
                    <InsertPhotoOutlinedIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Archive">
                  <IconButton size="small">
                    <ArchiveOutlinedIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="More">
                  <IconButton size="small">
                    <MoreVertOutlinedIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Undo">
                  <IconButton size="small">
                    <UndoOutlinedIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Redo">
                  <IconButton size="small">
                    <RedoOutlinedIcon />
                  </IconButton>
                </Tooltip>
              </div>

              <Button onClick={() => closebtn(modalState.noteId)}>Close</Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Takenote3;
