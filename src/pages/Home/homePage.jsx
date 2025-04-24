import React from "react";
import Appbar from "../../components/Appbar/appbar";
import "../Home/homePage.css";

export default function Home() {
  return (
    <div className="papelParede" 
    style={{backgroundColor:"red",
        height:"100%"
    }}>
      <Appbar />
      <span>Olá mundo</span>
    </div>
  );
}
