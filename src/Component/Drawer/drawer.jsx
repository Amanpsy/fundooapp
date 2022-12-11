import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { StepConnector } from '@mui/material';
import {connect} from 'react-redux'

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    marginTop:65,
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    marginTop:65,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});





const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

 function Drawer1(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

const selectOption=(noteOption)=>{
props.designDrawer(noteOption)
props.dispatch({
  type:`${noteOption}`
})
}


  return (
    <Box sx={{ display: 'flex',marginBottom:5 }}>
      <CssBaseline />
    
      <Drawer variant="permanent" open={props.headerState}>
        
        <List>
          
            <ListItem  onClick={()=>selectOption('Notes')} disablePadding sx={{ display: 'block' }}>
              <ListItemButton 
              
              >
                <ListItemIcon
                
                > 
                <LightbulbOutlinedIcon />
             
                </ListItemIcon>
                <ListItemText primary="Notes" />
              </ListItemButton>
            </ListItem>
            <ListItem  onClick={()=>selectOption('Reminders')} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              
              >
                <ListItemIcon
                
                > 
                 <NotificationsOutlinedIcon />
                </ListItemIcon>
                <ListItemText  primary="Remainder" />
              </ListItemButton>
            </ListItem>
            
          <ListItem  onClick={()=>selectOption('Edit')}  disablePadding sx={{ display: 'block'}}>
            <ListItemButton style={{paddingLeft:10,height:60}}>
              <IconButton size='large' style={{marginRight:15}}>
                <EditOutlinedIcon />
              </IconButton>
              <ListItemText primary="Edit Labels" />
            </ListItemButton>
          </ListItem>

          <ListItem onClick={()=>selectOption('Archieve')} disablePadding sx={{ display: 'block'}}>
            <ListItemButton style={{paddingLeft:10,height:50}}>
              <IconButton size='large' style={{marginRight:15}}>
                <ArchiveOutlinedIcon />
              </IconButton>
              <ListItemText primary="Archieve" />
            </ListItemButton>
          </ListItem>

          <ListItem onClick={()=>selectOption('Bin')}  disablePadding sx={{ display: 'block'}}>
            <ListItemButton style={{paddingLeft:10,height:40}}>
              <IconButton size='large' style={{marginRight:15}}>
                <DeleteOutlinedIcon />
              </IconButton>
              <ListItemText primary="Bin" />
            </ListItemButton>
          </ListItem>
          
        </List>
        
      </Drawer>
    </Box>
  );
}

export default connect()(Drawer1);