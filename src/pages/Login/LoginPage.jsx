import React, { useState } from "react";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import avatarPerson from "../../images/man01.png";
import "../Login/LoginPage.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { toast, ToastContainer } from "react-toastify";
import Progressbar from "../../components/ProgressBar/progressbar";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (!user) {
      toast.warning("O campo USUÁRIO é obrigatório.");
      return;
    } else if (user.length < 5) {
      toast.warn("O nome de USUÁRIO deve ter pelo menos 5 caracteres.");
      return;
    }
    if (!password) {
      toast.warning("O campo SENHA é obrigatório.");
      return;
    } else if (password.length < 5) {
      toast.warning("A SENHA deve ter no mínimo 6 caracteres");
      return;
    }

    // Usando o fetch para fazer a requisição de login
    fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: user, password: password }),
    })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Login bem-sucedido!");
          navigate("/home");
        }
        if (response.status !== 200) {
          toast.error("USUARIO ou SENHA inválidos!");
        }
      })
      .catch((error) => {
        // Erro
        console.error("Erro ao fazer login:", error);
        toast.error("Erro ao tentar fazer login!");
      });
  };

  return (
    <div className="login-background">
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
            value={user}
            onChange={(e) => setUser(e.target.value)}
            size="small"
          />
          <TextField
            className="login-password"
            label="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            size="small"
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: "#19315e", width: "300px" }}
            onClick={handleLogin}
          >
            Entrar
          </Button>
          <ToastContainer />
        </div>
      </Card>
    </div>
  );
}
