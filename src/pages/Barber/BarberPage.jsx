import React from "react";
import Navbar from "../../components/Navbar/navbar";
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import BarberMale from "../../images/man01.png"
import BarberMale02 from "../../images/man02.png"
import BarberFemale from "../../images/woamn02.png"


const avatarList = [BarberMale, BarberMale02, BarberFemale]
const CreateCardBarber = (foto, nome, age, sexo, disponibilidade) => {
  return { foto, nome, age, sexo, disponibilidade }
}

const barberCad = [
  CreateCardBarber(
    { BarberMale },
    "Isaac",
    25,
    "Masculino",
    "Manhã"
  ),

  CreateCardBarber(
    { BarberMale02},
    "Paulo",
    36,
    "Masculino",
    "Tarde"
  ),
  CreateCardBarber(
     { BarberFemale },
    "Jeruza Zuleiko",
    24,
    "Feminino",
    "Manhã"
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
            <Card key={index} sx={{ backgroundColor: "red", paddingTop: "30px", width: "230px", height: "290px" }}>
              <Avatar
                src={avatarList[index]}
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
