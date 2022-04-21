import React from 'react';
import Link from 'next/link';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';

export interface LeftBarProps {
  toggleDrawer: () => void;
  drawerOpened: boolean;
}

const LeftBar: React.FC<LeftBarProps> = ({ toggleDrawer, drawerOpened }) => {
  return (
    <Drawer anchor="left" open={drawerOpened} onClose={toggleDrawer}>
      <List onClick={toggleDrawer}>
        <ListItem>
          <ListItemIcon>{<HomeIcon />}</ListItemIcon>
          <Link href="/">
            <ListItemText primary="Strona główna" />
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>{<ListAltIcon />}</ListItemIcon>
          <Link href="/todo-lists">
            <ListItemText primary="Listy TODO" />
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default LeftBar;
