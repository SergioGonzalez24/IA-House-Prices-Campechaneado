"use client";
import React, { useEffect } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BusinessIcon from "@mui/icons-material/Business";
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

export default function Home() {
  useEffect(() => {
    // Configura la animación con Anime.js
    const pointsAnimation = anime.timeline({
      autoplay: false, // La animación se activará manualmente al hacer scroll
    });

    pointsAnimation.add({
      targets: ".point",
      translateY: [-30, 0],
      opacity: [0, 1],
      scale: [0.7, 1],
      duration: 800,
      easing: "easeOutExpo",
      delay: anime.stagger(200),
    });

    // Función para activar la animación cuando se haga scroll
    const handleScroll = () => {
      const pointsElements = document.querySelectorAll(".point");
      const lastPoint = pointsElements[pointsElements.length - 1];

      if (lastPoint) {
        const lastPointOffset = lastPoint.getBoundingClientRect().top;

        // Activar la animación cuando el último punto esté en el viewport
        if (lastPointOffset < window.innerHeight * 0.75) {
          pointsAnimation.play();
        }
      }
    };

    // Agregar el evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpia el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-500 to-black min-h-screen py-12">
      <div className="container mx-auto text-center">
        <Grid container spacing={4}>
          {points.map((point, index) => (
            <Grid key={index} item xs={12} md={4}>
              <Paper className="py-4 px-6 rounded-lg hover:shadow-lg point">
                {point.icon}
                <Typography variant="h6" className="text-white mb-2">
                  {point.title}
                </Typography>
                <Typography variant="body2" className="text-black">
                  {point.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
