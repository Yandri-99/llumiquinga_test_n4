import { useState } from "react";
import { Box, Typography, TextField, Button, Divider, Stack } from "@mui/material";

export default function MultiplyPage() {
  const [precioU, setPrecioU] = useState<number>(0);
  const [stockU, setStockU] = useState<number>(0);
  const [totalProducto, setTotalProducto] = useState<number | null>(null);

  const [precioIva, setPrecioIva] = useState<number>(0);
  const [resultadoIva, setResultadoIva] = useState<number | null>(null);

  const [precioOrig, setPrecioOrig] = useState<number>(0);
  const [porcentajeD, setPorcentajeD] = useState<number>(0);
  const [precioFin, setPrecioFin] = useState<number | null>(null);

  return (
    <Box sx={{ maxWidth: 1000, mx: "auto", mt: 4, pb: 5 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 500 }}>
        Cálculos de Inventario
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
          1. Valor Total de un Producto
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>Precio Unitario:</Typography>
        <TextField 
          fullWidth size="small" type="number" sx={{ mb: 2 }} 
          onChange={(e) => setPrecioU(Number(e.target.value))} 
        />
        <Typography variant="body2" sx={{ mb: 0.5 }}>Cantidad en Stock:</Typography>
        <TextField 
          fullWidth size="small" type="number" sx={{ mb: 2 }} 
          onChange={(e) => setStockU(Number(e.target.value))} 
        />
        
        <Stack direction="row" spacing={2} alignItems="center">
          <Button 
            variant="contained" 
            sx={{ bgcolor: "#007bff", textTransform: "none", fontWeight: 'bold' }}
            onClick={() => setTotalProducto(precioU * stockU)}
          >
            Calcular Valor Total
          </Button>
          {totalProducto !== null && (
            <Typography variant="body1">
              Resultado: ${totalProducto.toFixed(2)}
            </Typography>
          )}
        </Stack>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
          2. Calcular IVA (12%)
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>Precio del Producto:</Typography>
        <TextField 
          fullWidth size="small" type="number" sx={{ mb: 2 }} 
          onChange={(e) => setPrecioIva(Number(e.target.value))} 
        />
        
        <Stack direction="row" spacing={2} alignItems="center">
          <Button 
            variant="contained" 
            sx={{ bgcolor: "#17a2b8", textTransform: "none", fontWeight: 'bold' }}
            onClick={() => setResultadoIva(precioIva * 0.12)}
          >
            Calcular IVA
          </Button>
          {resultadoIva !== null && (
            <Typography variant="body1">
              Resultado: ${resultadoIva.toFixed(2)}
            </Typography>
          )}
        </Stack>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
          3. Calcular Precio con Descuento
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>Precio Original:</Typography>
        <TextField 
          fullWidth size="small" type="number" sx={{ mb: 2 }} 
          onChange={(e) => setPrecioOrig(Number(e.target.value))} 
        />
        <Typography variant="body2" sx={{ mb: 0.5 }}>Porcentaje de Descuento:</Typography>
        <TextField 
          fullWidth size="small" type="number" sx={{ mb: 2 }} 
          onChange={(e) => setPorcentajeD(Number(e.target.value))} 
        />
        
        <Stack direction="row" spacing={2} alignItems="center">
          <Button 
            variant="contained" 
            sx={{ bgcolor: "#28a745", textTransform: "none", fontWeight: 'bold' }}
            onClick={() => setPrecioFin(precioOrig - (precioOrig * (porcentajeD / 100)))}
          >
            Calcular Precio Final
          </Button>
          {precioFin !== null && (
            <Typography variant="body1">
              Resultado: ${precioFin.toFixed(2)}
            </Typography>
          )}
        </Stack>
      </Box>
    </Box>
  );
}