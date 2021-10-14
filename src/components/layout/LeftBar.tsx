import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';
import ListAltIcon from '@mui/icons-material/ListAlt';

export interface LeftBarProps {
  toggleDrawer: () => void;
  drawerOpened: boolean;
}

const LeftBar: React.FC<LeftBarProps> = ({toggleDrawer, drawerOpened}) => {
  return (
    <Drawer anchor="left" open={drawerOpened} onClose={toggleDrawer}>
      <List onClick={toggleDrawer}>
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
  );
};

export default LeftBar;