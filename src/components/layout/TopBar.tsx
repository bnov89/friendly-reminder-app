import React, { useContext, useEffect, useState } from "react";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AuthContext from "../../store/auth-context";
import { GetServerSideProps } from "next";
import Link from "next/link";

export interface TopBarProps {
  toggleDrawer: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ toggleDrawer }) => {
  const authContext = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(authContext.isLoggedIn);

  useEffect(() => {
    setIsLoggedIn(authContext.isLoggedIn);
  }, [authContext.isLoggedIn]);
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
        {!isLoggedIn ? (
          <Link
            // style={{ textDecoration: 'none', color: 'inherit' }}
            href="/login"
          >
            <Button color="inherit">Login</Button>
          </Link>
        ) : (
          <Link
            // style={{ textDecoration: 'none', color: 'inherit' }}
            href="/login"
          >
            <Button color="inherit" onClick={authContext.logout}>Logout</Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {

  return { props: {} };
};

export default TopBar;
