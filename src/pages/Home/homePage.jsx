import React from "react";
import Appbar from "../../components/Appbar/appbar";
import "../Home/homePage.css";
import { Card } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Appbar />
      <div className="card-container">
        <Card className="custom-card" style={{backgroundColor:"#27c281"}}>Card 1</Card>
        <Card className="custom-card" style={{backgroundColor:"#e7505a"}}>Card 2</Card>
        <Card className="custom-card" style={{backgroundColor:"#6f75bf"}}>Card 3</Card>
        <Card className="custom-card" style={{backgroundColor:"#393939"}}>Card 4</Card>
      </div>
    </div>
  );
}
