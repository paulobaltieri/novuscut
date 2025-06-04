// src/components/Drawer/drawer.js
import { Drawer, Box, Typography, ListItemButton, patch } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Face6TwoToneIcon from "@mui/icons-material/Face6TwoTone";
import CalendarMonth from "@mui/icons-material/CalendarMonthTwoTone";
import Barbeiro from "@mui/icons-material/ContentCutTwoTone";
import Home from '@mui/icons-material/HomeTwoTone';
import { useNavigate } from "react-router-dom";

export default function MenuDrawer({ open, setOpen }) {
  const navigate = useNavigate()

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };
  const buttonsIconList = [
    { label: "Pagina Inicial", icon: <Home /> , patch:"/home"},
    { label: "Cliente", icon: <Face6TwoToneIcon />, patch:"" },
    { label: "Barbeiro", icon: <Barbeiro />, patch:"/barber"},
    { label: "Agendamentos", icon: <CalendarMonth /> },
  ];

  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
      <Box
        sx={{ width: 250 }}
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
              <ListItemButton onClick={() => navigate(item.patch)}>
                <ListItemIcon>
                  {item.icon}
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
