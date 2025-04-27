import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog({ open, onClose }) {
  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>{"Alerta de confirmação"}</DialogTitle>
        <DialogContent>
          <DialogContentText>Tem certeza que deseja sair?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onClose}
            autoFocus
            variant="contained"
            sx={{ width: "120px" , backgroundColor:"#ff8787"}}
          >
            Cancelar
          </Button>
          <Button
            onClick={onClose}
            autoFocus
            variant="contained"
            sx={{ width: "120px" , backgroundColor:"#0dcb91"}}
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
