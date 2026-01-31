import { useState } from "react";
import { Paper, TextField, Typography, Button, Box } from "@mui/material";

export default function NuevoproductoPage() {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");

  const handleGuardar = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ nombre, precio, stock });
    alert("Producto guardado localmente (consola)");
    setNombre("");
    setPrecio("");
    setStock("");
  };

  return (
    <Box sx={{ maxWidth: 1000, mx: "auto", mt: 4 }}>
      <Typography variant="h4" fontWeight={500} sx={{ mb: 1 }}>
        Registrar Nuevo Producto (local)
      </Typography>

      <Paper elevation={0} sx={{ p: 0, bgcolor: "transparent" }}>
        <form onSubmit={handleGuardar}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ mb: 0.5 }}>Nombre:</Typography>
            <TextField
              fullWidth
              size="small"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder=""
              required
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ mb: 0.5 }}>Precio:</Typography>
            <TextField
              fullWidth
              size="small"
              type="number"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              required
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ mb: 0.5 }}>Stock:</Typography>
            <TextField
              fullWidth
              size="small"
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: "#28a745", 
              "&:hover": { bgcolor: "#218838" },
              textTransform: "none",
              px: 3,
              py: 1,
              fontSize: "1rem"
            }}
          >
            Guardar Producto
          </Button>
        </form>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 3, fontStyle: "italic" }}>
          Nota: este formulario agrega productos a una lista local (solo para practicar). El listado principal viene de la API.
        </Typography>
      </Paper>
    </Box>
  );
}