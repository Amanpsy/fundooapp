import React from "react";
//import InputBase from '@mui/material/InputBase';
import "../takeNote3/takeNote3.css";
import { InputBase, Tooltip } from "@mui/material";
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
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  getArchievenoteAPI,
  getUpdatenoteAPI,
  trashNoteApi,
} from "../../Services/dataService";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ColorPopper from "../ColorPopper/ColorPopper";

function Takenote3(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const [handle, sethandle] = React.useState({
    noteId: "",
    title: "",
    descrption: "",
  });

  const handleOpen = (note) => {
    setOpen(true);
    console.log(note);
    sethandle({
      noteId: note.id,
      title: note.title,
      descrption: note.description,
    });
  };
  const handleClose = () => setOpen(false);

  const updateArchieve = (id) => {
    let data = {
      noteIdList: [id],
      isArchived: true,
    };

    getArchievenoteAPI(data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    console.log("Achieve sucess");
  };

  const takeTitle = (event) => {
    sethandle((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };
  const takeDescription = (event) => {
    sethandle((prevState) => ({
      ...prevState,
      description: event.target.value,
    }));
  };

  const submit = () => {
    getUpdatenoteAPI(handle)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const trash = (id) => {
    let trashObj = {
      noteIdList: [id],
      isDeleted: true,
    };
    console.log("trashObj", trashObj);

    trashNoteApi(trashObj)
      .then((response) => {
        console.log(response);
        props.getNotes();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="notebox">
      <div className="insidebox" style={{ backgroundColor: props.note.color }}>
        <div className="pinParent">
          <div className="pin">
            <Tooltip title="Pin note">
              <IconButton size="small">
                <PushPinOutlinedIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="para">
          <div onClick={() => handleOpen(props.note)} className="title">
            <span>{props.note.title}</span>
          </div>
          <div onClick={() => handleOpen(props.note)} className="description">
            <span>{props.note.description} </span>
          </div>
        </div>

        <div className="logo">
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
              <ColorPopper action="update" id={props.note.id} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Trash">
            <IconButton size="small">
              <DeleteIcon onClick={() => trash(props.note.id)} />
            </IconButton>
          </Tooltip>
          <Tooltip
            title="Archieve"
            onClick={() => updateArchieve(props.note.id)}
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
      <Modal
        open={open}
        onClose={handleClose}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box sx={style}  style={{ backgroundColor: props.note.color }}>
          <InputBase
            className="note-txt2"
            defaultValue={handle.title}
            onChange={takeTitle}
          />
          <InputBase
            className="note-txt2"
            type="text"
            defaultValue={handle.descrption}
            onChange={takeDescription}
          />
          <Box style={{display:'flex',marginTop:'32px'}}>
          <IconButton>
            <AddAlertOutlinedIcon sx={{ height: "30px" }} />
          </IconButton>
          <IconButton>
            <PersonAddAltOutlinedIcon sx={{ height: "25px" }} />
          </IconButton>
          <IconButton>
            <ColorPopper action="update" id={props.note.id} sx={{ height: "16px" }} />
          </IconButton>
          <IconButton>
            <DeleteIcon
              sx={{ height: "25px" }}
              onClick={() => trash(props.note.id)}
            />
          </IconButton>
          <IconButton>
            <ArchiveOutlinedIcon
              sx={{ height: "18px" }}
              onClick={() => updateArchieve(props.note.id)}
            />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon sx={{ height: "25px" }} />
          </IconButton>
        
         <Button onClick={() => submit(handle.noteId)}>Close </Button>
        </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default Takenote3;
