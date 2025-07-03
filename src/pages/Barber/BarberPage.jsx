import React from "react";
import Navbar from "../../components/Navbar/navbar";
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import BarberMale from "../../images/man01.png"
import BarberMale02 from "../../images/man02.png"
import BarberFemale from "../../images/woamn02.png"

const CreateCardBarber = (foto, nome, age, sexo, disponibilidade) => {
  return { foto, nome, age, sexo, disponibilidade }
}

const barberCad = [
  CreateCardBarber(
    "Foto",
    "Isaac",
    25,
    "Masculino",
    "Manhã"
  ),

  CreateCardBarber(
    "Foto",
    "Paulo",
    36,
    "Masculino",
    "Tarde"
  ),
  CreateCardBarber(
    "Foto",
    "Jeruza Zuleiko",
    24,
    "Feminino",
    "Manhã"
  )

]

let sexoPerson = barberCad.map((barber, index) => {
  if (barber.sexo === "Feminino") return BarberFemale
  return index % 2 === 0 ? BarberMale : BarberMale02
})

console.log(sexoPerson)

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
                src={sexoPerson[index]}
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
