import React from "react";
import Navbar from "../../components/Navbar/navbar";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import CutIcon from "@mui/icons-material/ContentCut";
import Calendar from "@mui/icons-material/CalendarMonth";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AttachMoney from "@mui/icons-material/AttachMoney";

const cards = [
  {
    id: 1,
    title: "Titutlo",
    description: "Corte 1",
    icon: <CutIcon fontSize="large" />,
  },
  {
    id: 2,
    description: "Corte 2",
    title: "Titutlo",
    icon: <AttachMoney fontSize="large" />,
  },
  {
    id: 3,
    description: "Corte 3",
    title: "Titutlo",
    icon: <Calendar fontSize="large" />,
  },
  {
    id: 4,
    description: "Corte 4",
    title: "Titutlo",
    icon: <Calendar fontSize="large" />,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 3,
          minHeight: "20vh",
          padding: 1,
        }}
      >
        {cards.map((cards) => (
          <Card key={cards.id} sx={{ height: "100%", width: "250px" }}>
            <CardActionArea>
              <CardMedia height="240" image={cards.icon} />
            </CardActionArea>
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
          </Card>
        ))}
      </Box>
    </>
  );
}
