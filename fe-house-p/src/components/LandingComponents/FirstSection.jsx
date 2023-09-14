"use client";

import * as React from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";

import Image from "next/image";

import {
  phone_035,
  google,
  appstore,
  iphn,
} from "@/assets/images";



export default function FirstSection() {
  return (
    <Box
      sx={{
        height: "100%",
        overflow: "hidden",
        position: "relative",
        marginTop: "90px",
        marginBottom: "1px",
        marginLeft: "30px",
        padding: "10px",
        paddingBottom: "100px",
  
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          style={{ zIndex: 0 }}
        >
          <Container style={{ marginTop:"70px", marginBottom:"80px"}}>
            <Box sx={{ flexGrow: 1, height: "100%", paddingTop:"20px", paddingBottom:"20px"}}>
              <Typography variant="h4" style={{ color: "#181818" }}>
                HOUSEA
              </Typography>

              <Typography variant="h2" style={{ color: "#181818", marginBottom:"5px"}}>
                TU INVERSIÓN <br /> INTELIGENTE
              </Typography>

              <Typography
                variant="body1"
                paragraph
                style={{
                  color: "#181818",
                  maxWidth: "500px",
                }}
              >
                Nuestra plataforma combina el poder del crowdfunding con la
                precisión de la inteligencia artificial para llevar tus
                proyectos al siguiente nivel. Únete a nosotros y descubre un
                nuevo mundo de oportunidades financieras.
              </Typography>

              <Box sx={{ flexGrow: 1 }} style={{ marginTop: "35px",marginBottom:"35px"}}>
                <Button
                  variant="contained"
                  size="large"
                  href="/SignUp"
                  style={{

                    backgroundColor: "#28ac01",
                    color: "#FFFFFF",
                    marginBottom: "1px",
                    borderRadius: "30px",
                    width: "200px",
                    height: "50px",
                  }}
                >
                  <b>Empieza ahora</b>
                </Button>
              </Box>

              {/* Download buttons */}

              <Grid container spacing={2}>
                <Grid item xs={12} style={{ margin:"20px"}}>
                  <div>
                    <Typography
                      variant="body1"
                      paragraph
                      style={{ color: "#181818" }}
                    >
                      <span style={{ fontWeight: "bold" }}>
                        Descarga nuestra app.
                      </span>
                    </Typography>
                  </div>
                </Grid>

                <Grid
                  item
                  xs={3}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <a
                    href="ENLACE_DE_APP_STORE"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginRight: "20px",
                      transition: "transform 0.2s",
                    }}
                  >
                    <Image src={appstore} alt="Descargar en App Store" />
                  </a>
                </Grid>

                {/* Segunda imagen */}
                <Grid
                  item
                  xs={3}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <a
                    href="ENLACE_DE_GOOGLE_PLAY"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginRight: "20px",
                      transition: "transform 0.2s",
                    }}
                  >
                    <Image src={google} alt="Descargar en Google Play Store" />
                  </a>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          style={{
            position: "relative",
            zIndex: -1,
          }}
        >

          <Container style={{ position: "relative", marginTop:"70px", marginBottom:"80px"}}>
            <video
              src="/degradadoVid.mp4"
              alt="degradado"
              style={{
                marginTop: "30px",
                marginBottom: "50px",
                zIndex: -1,
                position: "relative", // Establece la posición absoluta para superponer el video
                width: "170%", // Ajusta el ancho al 120% para agrandar el video
                height: "auto", // Permite que la altura se ajuste automáticamente para mantener la proporción
                objectFit: "cover", // Controla cómo se ajusta el video
                left: "100px", // Alinea la parte izquierda del video con la parte izquierda del contenedor
                borderRadius: "30px",
    
              }}
              autoPlay
              loop
              muted
            />
            <Image
              src={iphn}
              // src={phone_035}
              alt="phone"
              style={{
                position: "absolute", // Establece la posición absoluta para superponer la imagen de "phone"
                top: 0, // Alinea la parte superior de "phone" con la parte superior del contenedor
                left: 100, // Alinea la parte izquierda de "phone" con la parte izquierda del contenedor
                //right: 10,
                width: "auto", // Ajusta el ancho de "phone" al 100% para que coincida con el contenedor
                height: "125%", // Permite que la altura se ajuste automáticamente para mantener la proporción
                marginTop: "0px",
                marginBottom:"1px"
                

              }}
            />
          </Container>

        </Grid>
      </Grid>
    </Box>
  );
}
