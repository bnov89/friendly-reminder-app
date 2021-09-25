import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import TodoList from './pages/TodoLists/TodoLists';
import NotFound from './pages/NotFound/NotFound';
import classes from './Layout.module.css';
import Login from './pages/Login/Login';

const Layout: React.FC = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);

  function toggleDrawer() {
    setDrawerOpened(!drawerOpened);
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
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
            <Link style={{textDecoration: 'none', color: 'inherit'}} to="/login">
              <Button color="inherit">Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer anchor="left" open={drawerOpened} onClose={toggleDrawer}>
        <List>
          <ListItem>
            <ListItemIcon>{<HomeIcon />}</ListItemIcon>
            <NavLink to="/">
              <ListItemText primary="Strona główna" />
            </NavLink>
          </ListItem>
          <ListItem>
            <ListItemIcon>{<ListAltIcon />}</ListItemIcon>
            <NavLink to="/todo-lists">
              <ListItemText primary="Listy TODO" />
            </NavLink>
          </ListItem>
        </List>
      </Drawer>
      <main>
        <div className={classes['under-toolbar']} />
        <div>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo-lists">
              <TodoList />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </main>
    </div>
  );
};

export default Layout;
