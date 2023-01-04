import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { connect } from "react-redux";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  marginTop: 69,
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  marginTop: 69,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function Drawer1(props) {
  const selectOption = (options) => {
    props.listenDrawer(options);
    props.dispatch({
      type: `${options}`,
    });
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer variant="permanent" open={props.headerState}>
        <List className="main">
          <ListItem
            disablePadding
            onClick={() => selectOption("Notes")}
            sx={{ display: "block" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <LightbulbOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Notes" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            onClick={() => selectOption("Remainder")}
            sx={{ display: "block" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <NotificationsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Remainder" />
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => selectOption("Edit")}
          >
            <ListItemButton>
            <ListItemIcon>
                <EditOutlinedIcon />
                </ListItemIcon>
              <ListItemText primary="Edit Labels" />
            </ListItemButton>
          </ListItem>

          <ListItem
            onClick={() => selectOption("Archive")}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton>
            <ListItemIcon>
                <ArchiveOutlinedIcon />
                </ListItemIcon>
              <ListItemText primary="Archive" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton>
            <ListItemIcon>
                <DeleteOutlinedIcon onClick={() => selectOption("Trash")} />
                </ListItemIcon>
              <ListItemText primary="Bin" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export default connect()(Drawer1);
