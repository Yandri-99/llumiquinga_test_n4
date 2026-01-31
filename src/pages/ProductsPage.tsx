import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export default function ProductsPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);

      try {
        // Usamos la API de Dragon Ball con límite de 10
        const url = "https://dragonball-api.com/api/characters?page=1&limit=10";
        const res = await fetch(url);
        const data = await res.json();

        // La API de Dragon Ball devuelve los personajes en data.items o data directo
        const list = Array.isArray(data.items) ? data.items : Array.isArray(data) ? data : [];
        setItems(list);
      } catch (e: any) {
        console.error(e);
        setError("No se pudo cargar los personajes.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <Paper sx={{ p: 3, borderRadius: 3, mt: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        Personajes Dragon Ball
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>
      )}

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 5 }}>
          <CircularProgress />
        </Box>
      ) : items.length === 0 ? (
        <Alert severity="info">No hay personajes para mostrar.</Alert>
      ) : (
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Ki</TableCell>
              <TableCell>Max Ki</TableCell>
              <TableCell>Raza</TableCell>
              <TableCell>Género</TableCell>
              <TableCell>Imagen</TableCell>
              <TableCell>Afiliación</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {items.map((p, idx) => (
              <TableRow key={p?.id ?? idx} hover>
                <TableCell>{p?.id ?? "-"}</TableCell>
                <TableCell><strong>{p?.name ?? "-"}</strong></TableCell>
                <TableCell>{p?.ki ?? "-"}</TableCell>
                <TableCell>{p?.maxKi ?? "-"}</TableCell>
                <TableCell>{p?.race ?? "-"}</TableCell>
                <TableCell>{p?.gender ?? "-"}</TableCell>
                <TableCell>
                  {p?.image ? (
                    <img
                      src={p.image}
                      alt={p.name}
                      style={{ width: 40, height: 60, objectFit: "contain", borderRadius: 4 }}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "https://dragonball-api.com/characters/goku_normal.webp";
                      }}
                    />
                  ) : "—"}
                </TableCell>
                <TableCell>{p?.affiliation ?? "-"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Paper>
  );
}