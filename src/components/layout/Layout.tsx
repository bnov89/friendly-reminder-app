import React, { useContext, useState } from "react";
import { Box } from "@mui/material";
import classes from "./Layout.module.css";
import AuthContext from "../../store/auth-context";
import TopBar from "./TopBar";
import LeftBar from "./LeftBar";
import { GetServerSideProps } from "next";
// import Routes from './Routes';

const Layout: React.FC = (props) => {
  const [drawerOpened, setDrawerOpened] = useState(false);

  function toggleDrawer() {
    setDrawerOpened(!drawerOpened);
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <TopBar toggleDrawer={toggleDrawer} />
      </Box>
      <LeftBar toggleDrawer={toggleDrawer} drawerOpened={drawerOpened} />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};

export default Layout;
