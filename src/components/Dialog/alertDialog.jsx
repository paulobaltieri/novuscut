import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";

export default function AlertDialog({ open, onClose }) {
  const navigate = useNavigate();
  function ReturnLoginPage() {
    navigate("/");
  }

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
            sx={{ width: "120px", backgroundColor: "#ff8787" }}
          >
            Cancelar
          </Button>
          <Button
            onClick={ReturnLoginPage}
            autoFocus
            variant="contained"
            sx={{ width: "120px", backgroundColor: "#0dcb91" }}
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
