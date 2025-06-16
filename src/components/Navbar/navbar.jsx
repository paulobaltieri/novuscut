import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuDrawer from "../Drawer/drawer";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/EmailSharp";
import NotificationIcon from "@mui/icons-material/NotificationsSharp";
import SettingsIcon from "@mui/icons-material/SettingsSharp";

export default function ButtonAppBar() {
  const [open, setOpen] = useState(false);

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
            <IconButton aria-label="Delete" size="large">
              <EmailIcon style={{ color: "white" }} />
            </IconButton>
            <IconButton aria-label="Delete" size="large">
              <NotificationIcon style={{ color: "white" }} />
            </IconButton>
            <IconButton aria-label="Delete" size="large">
              <SettingsIcon style={{ color: "white" }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <MenuDrawer open={open} setOpen={setOpen} />
      </Box>
    </>
  );
}
