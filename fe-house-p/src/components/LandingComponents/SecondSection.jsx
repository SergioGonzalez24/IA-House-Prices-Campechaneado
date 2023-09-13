'use client';
import React, { useEffect, useRef } from "react";
import { Typography, Grid, Paper } from "@mui/material";
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
    icon: <TrendingUpIcon fontSize="large" />,
  },
  {
    title: "Acceso a Proyectos Exclusivos",
    description:
      "Únete a HOUSEA y accede a oportunidades de inversión exclusivas que no encontrarás en otro lugar. Nuestra plataforma utiliza el poder del crowdfunding para llevar proyectos al siguiente nivel.",
    icon: <BusinessIcon fontSize="large" />,
  },
  {
    title: "Facilidad y Seguridad",
    description:
      "Invertir con HOUSEA es fácil y seguro. Nuestra plataforma utiliza tecnología de vanguardia para proteger tus inversiones y ofrece una experiencia de usuario intuitiva para que puedas comenzar a invertir de manera inteligente en minutos.",
    icon: <CheckCircleIcon fontSize="large" />,
  },
];

export default function SecondSection() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animar solo una vez cuando el elemento entre en el campo de visión
  });

  const paperRefs = useRef([]); // Referencias a los elementos Paper

  useEffect(() => {
    if (inView) {
      // Animar los elementos Paper cuando estén en el campo de visión
      anime({
        targets: paperRefs.current,
        translateY: [100, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: "easeOutQuad",
        delay: anime.stagger(100),
      });
    }
  }, [inView]);

  return (
  <div className="bg-[#28ac01] bg-opacity-20 py-6" style={{ position: "relative", overflow: "hidden" }}>
      {/* Div con video de fondo */}
      <div className="video-background">
        <video autoPlay loop muted playsInline className="video">
          {/* Ruta al video en la carpeta "public" */}
          <source src="/fondo-div-seg.mp4" type="video/mp4" />
          Tu navegador no admite el elemento de video.
        </video>
      </div>

      <div className="container mx-auto text-center" style={{ position: "relative" }}>
        <Grid container spacing={4}>
          {points.map((point, index) => (
            <Grid key={index} item xs={12} md={4}>
              <div ref={(element) => (paperRefs.current[index] = element)}>
              <Paper elevation={5} className="py-4 px-6 rounded-lg h-full" ref={ref} style={{ height: "100%" }}>
                {point.icon}
                <Typography variant="h6" className="text-white mb-2">
                  {point.title}
                </Typography>
                <Typography variant="body2" className="text-black text-justify">
                  {point.description}
                </Typography>
              </Paper>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>

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
