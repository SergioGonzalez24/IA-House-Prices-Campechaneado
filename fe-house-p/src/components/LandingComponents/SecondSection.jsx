"use client";
import React, { useEffect, useRef } from "react";
import { Typography, Grid, Paper, Box} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BusinessIcon from "@mui/icons-material/Business";
import { useInView } from "react-intersection-observer";
import anime from "animejs";

const points = [
  {
    title: "Rendimiento Comprobado",
    description:
      "Descubre cómo nuestros usuarios han experimentado un aumento promedio del XX% en el rendimiento de sus inversiones. Nuestra plataforma utiliza inteligencia artificial para seleccionar proyectos de inversión de alta calidad.",
    icon: <TrendingUpIcon sx={{ fontSize: 90 }} />,
  },
  {
    title: "Acceso a Proyectos Exclusivos",
    description:
      "Únete a HOUSEA y accede a oportunidades de inversión exclusivas que no encontrarás en otro lugar. Nuestra plataforma utiliza el poder del crowdfunding para llevar proyectos al siguiente nivel.",
    icon: <BusinessIcon sx={{ fontSize: 90 }} />,
  },
  {
    title: "Facilidad y Seguridad",
    description:
      "Invertir con HOUSEA es fácil y seguro. Nuestra plataforma utiliza tecnología de vanguardia para proteger tus inversiones y ofrece una experiencia de usuario intuitiva para que puedas comenzar a invertir de manera inteligente en minutos.",
    icon: <CheckCircleIcon sx={{ fontSize: 90 }} />,
  },
];

export default function SecondSection() {

  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const paperRefs = useRef([]); // Referencias a los elementos Paper

  useEffect(() => {
    if (inView) {
      // Animar entrada cuando estén en el campo de visión
      anime({
        targets: paperRefs.current,
        translateY: [100, 0],
        opacity: [0.1, 1],
        duration: 1000,
        easing: "easeOutQuad",
        delay: anime.stagger(100),
      });
    } else {
      // Animar salida cuando se salgan del campo de visión
      anime({
        targets: paperRefs.current,
        translateY: [0, 100],
        opacity: [1, 0],
        duration: 100,
        easing: "easeInQuad",
        delay: anime.stagger(10),
      });
    }
  }, [inView]);

  return (
    <div
    className="bg-[#28ac01] bg-opacity-20 py-6 z-[-1]"
    style={{ position: "relative", height: "100%"}}
      
    >
      {/* Div con video de fondo */}
      <div className="video-background">
        <video autoPlay loop muted playsInline className="video">
          {/* Ruta al video en la carpeta "public" */}
          <source src="/fondo-div-seg.mp4" type="video/mp4" />
          Tu navegador no admite el elemento de video.
        </video>
      </div>
    
      <Box sx={{
      mx: "auto", // Equivalente a mx-auto
      textAlign: "center", // Equivalente a text-center
      height: "100%", // Equivalente a h-full
      width: "100%", // Equivalente a w-full
    
    }}>
        <Grid container spacing={4}>
          {points.map((point, index) => (
            <Grid key={index} item xs={12} md={4}>
              <div ref={(element) => (paperRefs.current[index] = element)}>
                <Paper
                  elevation={5}
                  ref={ref}
                  style={{ margin: "30px", padding: "10px", height: "100%" }}
                >
                  {point.icon}
                  <Typography variant="h5" className="text-black mb-2">
                    {point.title}
                    <br />
                  </Typography>
                  <br/>
                  <Typography
                    variant="body2"
                    className="text-black text-justify"
                  >
                    {point.description}
                  </Typography>
                </Paper>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>

      <style jsx>
        {`
          /* Estilo para el div de video de fondo */
          .video-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0.7; /* Baja opacidad */
          }

          /* Estilo para el video */
          .video {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </div>
  );
}
