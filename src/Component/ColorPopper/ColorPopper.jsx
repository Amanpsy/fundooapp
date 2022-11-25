import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import IconButton from "@mui/material/IconButton";

function ColorPopper() {
  const colors = ["#2ECC71", "#AF7AC5", "#F1948A", "#A3E4D7", "#F5B7B1", "#F5B041", "#DC7633", "#F1C40F", "#AAB7B8", "#F1948A", "#2ECC71", "#F5B041"]

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <IconButton type="button"  sx={{ marginTop: -21.2, marginLeft: 1 }}>
        <PaletteOutlinedIcon  onClick={handleClick}  />
      </IconButton>

      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          The content of the Popper.

        </Box>
      </Popper>
      
    </div>
  );
}

export default ColorPopper;