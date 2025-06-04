import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import Navbar from "../../components/Navbar/navbar";

const options = ["Opção 1", "Opção 2"];

export default function AutocompleteSimples() {
  const [valorSelecionado, setValorSelecionado] = useState(null);

  return (
    <>
      <Navbar />
      <Autocomplete
        value={valorSelecionado}
        onChange={(e, novoValor) => setValorSelecionado(novoValor)}
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Escolha uma opção" />
        )}
      />
    </>
  );
}
