import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "../../components/Navbar/navbar";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import CutIcon from "@mui/icons-material/ContentCut";
import Calendar from "@mui/icons-material/CalendarMonth";
import Face6OutlinedIcon from "@mui/icons-material/Face6Outlined";
import AttachMoney from "@mui/icons-material/AttachMoney";


const color = ["#74c0fc", "#0dcb91", "#ffd43b", "#40e0d0"];

const cards = [
  {
    id: 1,
    title: "Atendimentos",
    description: "Corte 1",
    icon: <CutIcon sx={{ fontSize: 55 }} />,
  },
  {
    id: 2,
    description: "Corte 2",
    title: "Faturamente",
    icon: <AttachMoney sx={{ fontSize: 55 }} />,
  },
  {
    id: 3,
    description: "Corte 3",
    title: "Agendamentos",
    icon: <Calendar sx={{ fontSize: 55 }} />,
  },
  {
    id: 4,
    description: "Corte 4",
    title: "Clientes",
    icon: <Face6OutlinedIcon sx={{ fontSize: 55 }} />,
  },
];

export default function Home() {
  return (
    < div>
      <Navbar />
      <Card sx={{width:"81%",minHeight: "10vh",margin:"10px auto"}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            minHeight: "20vh",
            padding: 1,
          }}
        >
          {cards.map((cards, index) => (
            <Card
              key={cards.id}
              sx={{
                height: "100%",
                width: "270px",
                backgroundColor: color[index],
              }}
            >
              <CardActionArea>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {cards.icon}
                    <Typography gutterBottom variant="h6" component="div">
                      {cards.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {cards.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Card>
    </div>
  );
}
