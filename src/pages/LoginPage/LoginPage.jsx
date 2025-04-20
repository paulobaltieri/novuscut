import React from "react";
import Card from "@mui/material/Card";
import anthemImg from "../../images/anthem.jpg";
import "../LoginPage/LoginPage.css";
import { TextField } from "@mui/material";

export default function LoginPage() {
  return (
    <Card className="login-card">
      <img src={anthemImg} className="login-avatar" alt="Imagem Login" />
      <div className="login-container">
        <TextField className="login-user" 
        label="Usuário"
        size="small" />
      </div>
    </Card>
  );
}
