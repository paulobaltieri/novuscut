import React from "react";
import Navbar from "../../components/Navbar/navbar";
import { Card } from "@mui/material";
import "../../pages/Clients/ClientsPage.css";

export default function ClientsListTable() {
  return (
    <>
      <Navbar />
      <Card sx={{width:"96%",margin:"20px auto", padding:"10px"}}>
        <label className="titleClients">Clientes</label>
      </Card>
      <Card sx={{width:"96%",margin:"20px auto", padding:"10px"}}>
        Teste
      </Card>
    </>
  );
}
