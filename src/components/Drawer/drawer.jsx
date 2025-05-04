// src/components/Drawer/drawer.js
import React from "react";
import { Drawer, Box, Typography, ListItemButton } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";

export default function MenuDrawer({ open, setOpen }) {
  const toggleDrawer = (state) => () => {
    setOpen(state);
  };
  const buttonsIconList = [
    { label: "Teste 1", icon: <InboxIcon /> },
    { label: "Teste 2", icon: <InboxIcon /> },
  ];

  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
      <Box
        sx={{ width: 250}}
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <Typography variant="h6" sx={{ m: 2 }}>
          Menu de Navegação
        </Typography>
        <Divider />
        <List>
          {buttonsIconList.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton >
                <ListItemIcon>
                  <InboxIcon
                    style={{ marginTop: "3px", paddingLeft: "10px" }}
                  />
                  <ListItemText
                    primary={item.label}
                    style={{ marginLeft: "15px" }}
                  />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
