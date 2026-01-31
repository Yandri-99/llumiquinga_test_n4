import { Paper, Typography, Box, Grid, Card, CardContent, Alert, Stack } from "@mui/material";

export default function HomePage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 2 }}>
      
      <Paper 
        elevation={0} 
        sx={{ 
          p: 5, 
          bgcolor: "#f4f6f8", 
          borderRadius: 1, 
          border: "1px solid #e0e0e0" 
        }}
      >
        <Typography variant="h3" sx={{ color: "#333", mb: 1, fontWeight: 400 }}>
          Bienvenido a la Gestión de Inventario
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Consulta, registra y realiza cálculos sobre los productos del inventario.
        </Typography>
      </Paper>

      <Stack spacing={2}>
        <Box sx={{ position: "relative", overflow: "hidden", borderRadius: 1 }}>
          <img 
            src="https://picsum.photos/id/1080/800/300" 
            alt="Inventario Fresas" 
            style={{ width: "100%", display: "block" }} 
          />
          <Box sx={{ position: "absolute", top: "50%", width: "100%", display: "flex", justifyContent: "space-between", px: 2, transform: "translateY(-50%)" }}>
            <Typography sx={{ color: "white", fontSize: 30, textShadow: "0 2px 4px black" }}></Typography>
            <Typography sx={{ color: "white", fontSize: 30,  textShadow: "0 2px 4px black" }}></Typography>
          </Box>
        </Box>
      </Stack>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">Listado de Productos</Typography>
              <Typography variant="body2" color="text.secondary">
                Ahora se llena dinámicamente con 
                personajes de Dragon Ball (con fotos).
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">Registrar Producto</Typography>
              <Typography variant="body2" color="text.secondary">
                Agrega nuevos productos (locales) al arreglo.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">Cálculos de Inventario</Typography>
              <Typography variant="body2" color="text.secondary">
                Calcula valores comerciales básicos.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>


      <Alert 
        severity="info" 
        icon={false}
        sx={{ 
          bgcolor: "#d1ecf1", 
          color: "#0c5460", 
          border: "1px solid #bee5eb",
          borderRadius: 1 
        }}
      >
        Recuerda: Mantén actualizado el stock de productos.
      </Alert>
    </Box>
  );
}