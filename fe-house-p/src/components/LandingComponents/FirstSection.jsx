"use client";

import * as React from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";

import Image from "next/image";

import {
  phone_035,
  google,
  appstore,
} from "@/assets/images";



export default function FirstSection() {
  return (
   

    
    <Box
      sx={{
        
        overflow: "hidden",
        position: "relative",
      // border: '1px dashed grey'

      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} style={{zIndex:-1}}>
          <Container style={{ marginTop: "10px", paddingTop: "50px", marginLeft: "50px"}}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5" style={{ color: "#181818" }}>
                HOUSEA
              </Typography>

              <Typography variant="h3" style={{ color: "#181818" }}>
                TU INVERSIÓN 
                
                INTELIGENTE
              </Typography>

              <Typography
                variant="body1"
                paragraph
                style={{ color: "#181818", paddingRight: "20px",maxWidth: "600px"}}
              >
                Nuestra plataforma combina el poder del crowdfunding con la
                precisión de la inteligencia artificial para llevar tus
                proyectos al siguiente nivel. Únete a nosotros y descubre un
                nuevo mundo de oportunidades financieras.
              </Typography>

              <Box sx={{ flexGrow: 1 }} style={{ marginBottom: "15px" }}>
                <Button
                  variant="contained"
                  href="/SignUp"
                  style={{
                    backgroundColor: "#28ac01",
                    color: "#FFFFFF",
                    marginBottom: "1px",
                  }}
                >
                  Empieza ahora
                </Button>
              </Box>

              {/* Download buttons */}

              <Grid container spacing={2}>
                <Grid item xs={12}>
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
                    // border: "1px dashed grey",
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
                    <Image
                      src={appstore}
                      alt="Descargar en App Store"
                    />
                  </a>

                </Grid>

                {/* Segunda imagen */}
                <Grid
                  item
                  xs={3}
                  style={{
                    // border: "1px dashed grey",
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
                    <Image
                      src={google}
                      alt="Descargar en Google Play Store"
                    />
                  </a>

                  

                </Grid>
              </Grid>
            </Box>
          </Container>
        </Grid>

        <Grid item xs={12} md={6} style={{ position: "relative" }}>
          {" "}
          {/*border: '1px dashed grey', */}
          <Container>
            <video
              src="/degradadoVid.mp4" // Notice the path here starts with a "/"
              alt="degradado"
              style={{
                position: "relative",
                top: 0,
                left: 130,
                width: "100%",
                opacity: 0.8,
                zIndex: -1,
              }}
              autoPlay
              loop
              muted
            />
            <Image
              src={phone_035}
              alt="phone"
              style={{ position: "absolute", top: 0, left: 0, width: "66%", zIndex: -1}}
            />
          </Container>
        </Grid>
      </Grid>
    </Box>
  
  );
}
