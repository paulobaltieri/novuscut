import React from "react";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import avatarPerson from "../../images/man01.png";
import "../LoginPage/LoginPage.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
export default function LoginPage() {
  return (
    <Card className="login-card">
      <Avatar
        className="login-avatar"
        alt="Remy Sharp"
        src={avatarPerson}
        sx={{ width: "190px", height: "190px" }}
      />
        <div className="login-container">
          <TextField
            className="login-user"
            label="Usuário"
            value=""
            size="small"
          />
          <TextField className="login-password" label="Senha" size="small" />
          <Button
            variant="contained"
            sx={{ backgroundColor: "#19315e", width: "300px" }}
          >
            Entrar
          </Button>
        </div>
      </Card>
  );
}
