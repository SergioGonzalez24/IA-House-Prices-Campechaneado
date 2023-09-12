'use client';

import * as React from 'react';

import { Avatar,TextField, Button, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';






// Componente de inicio de sesión
export default function LoginComponent() {
  
    
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    // Ejemplo de redirección 
    if (data.get('email') === 'admin' && data.get('password') === 'admin') {
      window.location.href = "http://localhost:3000/HomeMovilNavbar"; 
    }
  };

  return (

    <Container component="main" maxWidth="xs">
        

        {/* Componente de inicio de sesión */}
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1}}>
            <LockOutlinedIcon />
          </Avatar>
          
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          {/* Formulario de inicio de sesión */}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electrónico"
              name="email"
              autoComplete="email"
              
            />
          
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="password"
            />

            <FormControlLabel
              control={<Checkbox value="remember" color='default'/>}
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: '#28ac01', color: '#fff' }}
            >
              Sign In
            </Button>
            

            <Grid container>
              <Grid item xs>
                <Link href="http://localhost:3000/EnConstruccion" variant="body2">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="http://localhost:3000/SignUp" variant="body2">
                  {"¿No tienes una cuenta? Regístrate"}
                </Link>
              </Grid>
            </Grid>

          </Box>
          {/* Fin del formulario de inicio de sesión */}

        </Box>
        {/* Fin del componente de inicio de sesión */}
      </Container>


  );
}