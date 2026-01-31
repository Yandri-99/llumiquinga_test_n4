import { Paper, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        Informacion del Sistema
      </Typography>

      <Typography color="text.secondary">
        Este sistema permite gestionar productos y realizar calculos basicos como valor total, IVA y descuentos. En la seccion "Productos", se consume una API
        publica de Dragon Ball que incluye imagenes en el campo image.
      </Typography>
    </Paper>
  );
}