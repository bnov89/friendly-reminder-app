import React, { useContext, useState } from 'react';
import { Box } from '@mui/material';
import classes from './Layout.module.css';
import AuthContext from '../../store/auth-context';
import TopBar from './TopBar';
import LeftBar from './LeftBar';
import Routes from './Routes';

const Layout: React.FC = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const authContext = useContext(AuthContext);

  function toggleDrawer() {
    setDrawerOpened(!drawerOpened);
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <TopBar toggleDrawer={toggleDrawer} />
      </Box>
      <LeftBar toggleDrawer={toggleDrawer} drawerOpened={drawerOpened} />
      <main>
        <div className={classes['under-toolbar']} />
        <Routes />
      </main>
    </div>
  );
};

export default Layout;
