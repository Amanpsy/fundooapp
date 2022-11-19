import React from "react";
import '../takeNote2/takeNote2.css'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import IconButton from '@mui/material/IconButton';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import { Button } from "@mui/material";

function Takenote2() {
    return(
        <div className="takenote2">
            <form>
            <input type="text" placeholder="Title" name="title" />
            <div>
                <input className="note" type={'text'} name="content" placeholder="Take a note..." />
            </div>
            </form>
            <IconButton type="button" sx={{ marginTop:-21 ,marginLeft:53}}>
                <AddAlertOutlinedIcon />
            </IconButton>  
            <IconButton type="button" sx={{ marginTop:-21.2 ,marginLeft:1}}>
                <PersonAddAltOutlinedIcon />
            </IconButton>  
            <IconButton type="button" sx={{ marginTop:-21.2 ,marginLeft:1}}>
                <PaletteOutlinedIcon />
            </IconButton>
            <IconButton type="button" sx={{ marginTop:-21.2 ,marginLeft:1}}>
                <ImageOutlinedIcon />
            </IconButton>
            <IconButton type="button" sx={{ marginTop:-21.2 ,marginLeft:1}}>
                <ArchiveOutlinedIcon />
            </IconButton>
            <IconButton type="button" sx={{ marginTop:-21.2 ,marginLeft:1}}>
                <MoreVertOutlinedIcon />
            </IconButton>
            <IconButton type="button" sx={{ marginTop:-21.2 ,marginLeft:1}}>
                <UndoOutlinedIcon />
            </IconButton>
            <IconButton type="button" sx={{ marginTop:-21.2 ,marginLeft:1}}>
                <RedoOutlinedIcon />
            </IconButton>
            <IconButton type="button" sx={{ marginLeft: 16,marginTop:-21,fontSize:16,}}>Close</IconButton>
        </div>
    )
}

export default Takenote2