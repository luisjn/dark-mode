import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ToggleOffOutlinedIcon from '@material-ui/icons/ToggleOffOutlined';
import ToggleOnOutlinedIcon from '@material-ui/icons/ToggleOnOutlined';

function Navbar({type, onToggleDark}) {
  const icon = type === "light" 
    ? <Tooltip title="Lights On"><ToggleOnOutlinedIcon /></Tooltip> 
    : <Tooltip title="Lights Off"><ToggleOffOutlinedIcon /></Tooltip>;
  return (
    <AppBar position="static" elevation={0} color={'inherit'}>
      <Toolbar>
        <Typography variant="h6">
          News
        </Typography>
        <Button color="inherit">Login</Button>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={onToggleDark}>
          {icon}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;