import React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { connect } from "react-redux";
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({

sideicon:{
  display: 'flex',
  flexDirection: 'row',
  justifyContent:'space-evenly'
}

})


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "rgb(240, 236, 236)",
  "&:hover": {
    backgroundColor: "rgb(240, 236, 236)",
  },
  marginRight: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(28.5),
    width: "53vw",
    height: "7.5vh",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    [theme.breakpoints.up("xs")]: {
      width: "5ch",
    }
  },
}));

function Header(props) {


  const classes = useStyle()

  const menuOpen = () => {
    props.headerpart();
  };

  
  return (
    <Box sx={{ border: "1.5px solid lightgray;", height: "9.6vh" }}>
      <AppBar
        sx={{ backgroundColor: "#fff", border: "1.5px solid lightgray" }}
        elevation={0}
      >
        <Toolbar>
          <IconButton sx={{ marginLeft: "-12px" }}>
            <MenuIcon onClick={menuOpen} />
          </IconButton>
          <img src="keeplogo.png" alt="fundoo" height={"42px"}></img>
          <Typography
            sx={{
              marginLeft: "12px",
              color: " rgb(102, 101, 101)",
              fontSize: "21px",
            }}
          >
            {/* Keep */} {props.label}
          </Typography>
      
          <Search sx={{position: 'fixed', color: 'rgb(102, 101, 101)'}}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase sx={{marginTop: '5px'}} placeholder="Search" />
              </Search>  
        
         
          <Box sx={{ flexGrow: 1 }} />
          <Box className={classes.sideicon} >
            <IconButton type="button" >
              <RefreshIcon />
            </IconButton>
            <IconButton type="button" >
              <DnsOutlinedIcon />
            </IconButton>
            <IconButton type="button">
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton type="button" >
              <AppsIcon />
            </IconButton>
            <IconButton type="button">
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
const mapStateToProps = (state) => {
  return {
    label: state.drawerReducer.label,
  };
};
export default connect(mapStateToProps)(Header);
