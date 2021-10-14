import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export interface TopBarProps {
  toggleDrawer: () => void;
}

const TopBar: React.FC<TopBarProps> = ({toggleDrawer}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/login">
          <Button color="inherit">Login</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;