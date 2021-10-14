import React, { useContext } from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

export interface TopBarProps {
  toggleDrawer: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ toggleDrawer }) => {
  const authContext = useContext(AuthContext);
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
        {!authContext.isLoggedIn ? (
          <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            to="/login"
          >
            <Button color="inherit">Login</Button>
          </Link>
        ) : (
          <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            to="/login"
          >
            <Button color="inherit" onClick={authContext.logout}>Logout</Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
