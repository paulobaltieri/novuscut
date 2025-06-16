import React from "react";
import Navbar from "../../components/Navbar/navbar";
import {
  InputAdornment,
  Card,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";

import "../../pages/Clients/ClientsPage.css";
import "../../components/Navbar/navbar";

function createData(id, name, email, telefone, foto, status) {
  return { id, name, email, telefone, foto, status };
}

const rows = [
  createData(
    "01",
    "Paulo Baltieri",
    "baltieri@baltieri.com",
    "(71)9899-9878u",
    "teste",
    "Disponivel"
  ),
  createData(
    "02",
    "Diego Baltieri",
    "baltieri@baltieri.com",
    "(71)9899-9878u",
    "teste",
    "Disponivel"
  ),
  createData(
    "03",
    "Debora",
    "baltieri@baltieri.com",
    "(71)9899-9878u",
    "teste",
    "Disponivel"
  ),
];

export default function ClientsListTable() {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "10px",
          marginBottom: "10px",
          marginTop: "20px",
          justifyContent: "space-between",
          margin: "20px",
        }}
      >
        <Typography variant="h4">Titulo Cliente</Typography>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <TextField
            className="searchText"
            hiddenLabel
            id="outlined-size-small"
            size="small"
            placeholder="Pesquisar"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button variant="contained" style={{ backgroundColor: "#2c4478" }}>
            Pesquisar
          </Button>
        </div>{" "}
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Nome</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Telefone</TableCell>
              <TableCell align="right">Foto</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.telefone}</TableCell>
                <TableCell align="right">{row.foto}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
