import React, { useState } from 'react';
import {
  AppBar,
  Button,
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
import classes from './Layout.module.css';
import { Item } from './TodoItem/Item';
import TodoList from './pages/TodoListHooks/TodoList';
import NewTodoItem from './pages/NewTodoItem/NewTodoItem';
import Auth from './pages/Auth/Auth';
import Restricted from './pages/Restricted/Restricted';
import Counter from './pages/Counter/Counter';
import TodoListClassBased from "./pages/TodoListClassBasedStyle/TodoList";

const Layout: React.FC = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [todos, setTodos] = useState<Item[]>([]);

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
          <NavLink to="/login">
            <Button color="inherit" className={classes['login-btn']}>
              Login
            </Button>
          </NavLink>
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
            <NavLink to="/todo-list">
              <ListItemText primary="TODO list" />
            </NavLink>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <NavLink to="/todo-list-class-based">
              <ListItemText primary="TODO list class based" />
            </NavLink>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <NavLink to="/todo-new">
              <ListItemText primary="New TODO" />
            </NavLink>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <NavLink to="/restricted">
              <ListItemText primary="Restricted" />
            </NavLink>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <NavLink to="/counter">
              <ListItemText primary="Counter" />
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
            <Route path="/todo-list">
              <TodoList todos={todos} />
            </Route>
            <Route path="/todo-list-class-based">
              <TodoListClassBased todos={todos} />
            </Route>
            <Route path="/login">
              <Auth />
            </Route>
            <Route path="/restricted">
              <Restricted />
            </Route>
            <Route path="/counter">
              <Counter />
            </Route>
            <Route path="/todo-new">
              <NewTodoItem
                onSaveNewItem={(newItem) => {
                  setTodos((prevState) => {
                    return [...prevState, newItem];
                  });
                }}
              />
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
