import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import BtnExit from "../Dialog/alertDialog";
import { useState } from "react";

export default function BasicMenu() {
  const userName = localStorage.getItem("Usuario Logado");
  const [openAlert, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleCloseAlert() {
    setOpen(false);
    console.log("Clicado")
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {userName}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleOpen}>Logout</MenuItem>
      </Menu>
      <BtnExit open={openAlert} onClose={handleCloseAlert} />
    </div>
  );
}
