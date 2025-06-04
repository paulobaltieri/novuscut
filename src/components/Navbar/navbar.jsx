import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuDrawer from "../Drawer/drawer";
import UserInfo from "../userInfo/userInfo";

export default function ButtonAppBar() {
  const [open, setOpen] = useState(false);

  localStorage.getItem("Usuario Logado");

  function openMenu() {
    setOpen(true);
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{
            backgroundColor: "#19315e",
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={openMenu}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              NovusCut
            </Typography>
            <Button
              color="inherit"
              sx={{
                "&:hover": {
                  backgroundColor: "#2c4478"
                },
              }}
            >
              button1
            </Button>
            <Button
              color="inherit"
              sx={{
                "&:hover": {
                  backgroundColor: "#2c4478"
                },
              }}
            >
              Clientes
            </Button>
            <Button
              color="inherit"
              sx={{
                "&:hover": {
                  backgroundColor: "#2c4478"
                },
              }}
            >
              Sobre
            </Button>
          </Toolbar>
        </AppBar>
        <MenuDrawer open={open} setOpen={setOpen} />
      </Box>
      <UserInfo />
    </>
  );
}
