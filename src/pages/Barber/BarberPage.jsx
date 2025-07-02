import React from "react";
import Navbar from "../../components/Navbar/navbar";
import { Avatar, Box, Card, CardContent, Typography} from "@mui/material";
import BarberAvatar from "../../images/man02.png"

const createCardBarber = (nome, age, sexo, disponibilidade) => {
  return { nome, age, sexo, disponibilidade }
}
const barberCad = [
  createCardBarber(
    "Isaac",
    25,
    "Masculino",
    "Manhã"
  ),

  createCardBarber(
    "Paulo",
    36,
    "Masculino",
    "Tarde"
  )
]

export default function BarberList() {
  return (
    <>
      <Navbar />
      <Box
        display="flex"
        justifyContent="center"
        gap={2}
        flexWrap="wrap"
        p={2}
      >
        {barberCad.map((barber, index) => {
          return (
            <Card key={index} sx={{ backgroundColor: "red",paddingTop:"30px", width: "230px" , height:"290px"}}>
              <Avatar
                src={BarberAvatar}
                style={{ width: "150px", height: "150px", margin: "auto" }}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography key={index}>
                  Nome: {barber.nome} <br />
                  Idade: {barber.age} <br />
                  Disponibilidade: {barber.disponibilidade}<br />
                </Typography>
              </CardContent>
            </Card>
          )
        })}
      </Box >
    </>
  )
}
