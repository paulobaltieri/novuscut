import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AlertDialog from "../Dialog/alertDialog";

export default function ButtonAppBar() {
  const navigate = useNavigate();

  const [openDialog, setOpenDialog] = useState(false);

  function handleOpenDialog() {
    setOpenDialog(true);
  }

  function handleCloseDialog() {
    setOpenDialog(false);
  }

  function irParaHome() {
    navigate("/home");
  }

  return (
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
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NovusCut
          </Typography>
          <Button color="inherit ">
            teste
          </Button>
          <Button color="inherit" onClick={irParaHome}>
            Login
          </Button>
          <Button color="inherit" onClick={handleOpenDialog}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <AlertDialog open={openDialog} onClose={handleCloseDialog} />
    </Box>
  );
}
