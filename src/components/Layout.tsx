import React, { useState } from 'react';
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ListAltIcon from '@material-ui/icons/ListAlt';
import HomeIcon from '@material-ui/icons/Home';
import Home from './pages/Home/Home';
import { NavLink, Route, Switch } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import TodoLists from './pages/TodoLists/TodoLists';
import classes from './Layout.module.css';

const Layout: React.FC = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);

  function toggleDrawer() {
    setDrawerOpened(!drawerOpened);
  }

  return (
    <div className={classes['layout-root']}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpened} onClose={toggleDrawer}>
        <List>
          <ListItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <NavLink to="/">
              <ListItemText primary="Strona główna" />
            </NavLink>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
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
              <TodoLists />
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
