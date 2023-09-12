'use client';

import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import anime from "animejs";

export default function SecondSection() {
  useEffect(() => {
    // Configura la animación con Anime.js
    const sloganAnimation = anime.timeline({
      autoplay: false, // La animación se activará manualmente al hacer scroll
    });

    sloganAnimation
      .add({
        targets: ".slogan",
        translateY: [-30, 0], // Cambia el desplazamiento hacia arriba a -30px
        opacity: [0, 1],
        scale: [0.7, 1], // Agrega una pequeña escala para hacerlo más moderno
        duration: 1000, // Ajusta la duración para una animación más rápida
        easing: "easeOutExpo", // Cambia la función de aceleración para una sensación moderna
      });

    // Función para activar la animación cuando se haga scroll
    const handleScroll = () => {
      const sloganElement = document.querySelector(".slogan");
      const sloganOffset = sloganElement.getBoundingClientRect().top;

      // Activar la animación cuando el slogan esté en el viewport
      if (sloganOffset < window.innerHeight * 0.75) {
        sloganAnimation.play();
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
    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-60 flex flex-col justify-center items-center text-white my-8 mx-4 p-4 rounded-lg shadow-lg">
      {/* Añade margen (my-8), relleno (p-4) y esquinas redondeadas (rounded-lg) */}
      <Typography variant="h4" className="slogan">
        SLOGAN
      </Typography>
    </div>
  );
}
