import React from 'react';
import { Box, Typography, Link, Container, Grid } from '@mui/material';
import { CprghtComponent } from '../CprghtComponent';
export default function FourthSection() {
  return (
    <Box sx={{ backgroundColor: "#333", color: "#fff", padding: "32px 0" }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ marginBottom: "16px" }}>
              Información de Contacto
            </Typography>
            <Typography variant="body1">
              Dirección: Calle Principal, Ciudad
            </Typography>
            <Typography variant="body1">
              Teléfono: +123 456 789
            </Typography>
            <Typography variant="body1">
              Correo Electrónico: info@tuempresa.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ marginBottom: "16px" }}>
              Enlaces Rápidos
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/nosotros">Nosotros</Link>
              </li>
              <li>
                <Link href="/servicios">Servicios</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ borderTop: '1px solid #555', marginTop: "16px", paddingTop: "16px" }}>
        <Container maxWidth="lg">
            <CprghtComponent />
        </Container>
      </Box>
    </Box>
  );
}
