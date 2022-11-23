import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { InputBase } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import RefreshIcon from '@mui/icons-material/Refresh';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../header/header.css'
import { TextField } from "@mui/material"; 



function Header(props) {

const menuOpen = () =>{
props.headerpart()
}

    return(
        <div className="HeaderBar">
            <IconButton type="button" onClick={menuOpen} sx={{ marginLeft:1.7}}>
                <MenuIcon/>
            </IconButton>

            <img src='keeplogo.png' alt="keep"></img>
            <h1>Keep</h1>

            <InputBase sx={{width: 723,marginLeft:11,height:50}} 
            placeholder="Search"/>
            {/* <TextField type={'text'} 
            sx={{ width:720,marginLeft:11.2,marginTop:1.2,marginBottom:1.2}} 
            placeholder="Search"/>  */}

            <IconButton type="button" sx={{ marginLeft:-6.5}}>
                <ClearIcon />
            </IconButton>

            <IconButton type="button" sx={{ marginLeft:30}}>
                <RefreshIcon />
            </IconButton>

            <IconButton type="button" sx={{ marginLeft:0.9}}>
                <DnsOutlinedIcon/>
            </IconButton>

            <IconButton type="button" sx={{ marginLeft:0.9}}>
                <SettingsOutlinedIcon/>
            </IconButton>

            <IconButton type="button" sx={{ marginRight:5}}>
                <AppsIcon/>
            </IconButton>
            <IconButton type="button" sx={{marginRight:4}}>
            <AccountCircleIcon/>
            </IconButton> 
        </div>
    )
}

export default Header