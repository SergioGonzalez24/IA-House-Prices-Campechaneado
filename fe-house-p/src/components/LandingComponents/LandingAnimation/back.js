
'use client';
import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import * as THREE from 'three';

export default function NeuralAnimation({ onAnimationComplete }) {
  const containerRef = useRef();
  const [animationCompleted, setAnimationCompleted] = useState(false);

  const handleClick = () => {
    setAnimationCompleted(true);
  };

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight); // Cambia 400 y 300 a las dimensiones que desees
    renderer.setClearColor(0xffffff, 0); // Cambia el color de fondo a blanco
    containerRef.current.appendChild(renderer.domElement);

    // Create a neural network model
    const node_material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const node_geometry = new THREE.SphereGeometry(0.05, 32, 32); // Tamaño más pequeño

    const numNodes = 100; // Cantidad de nodos en el bosque
    const nodes = []; // Almacenar nodos en un arreglo
    const maxConnectionsPerNode = 2; // Máximo 2 conexiones por nodo

    for (let i = 0; i < numNodes; i++) {
      const node = new THREE.Mesh(node_geometry, node_material);
      // Genera posiciones aleatorias para los nodos dentro de un rango
      node.position.x = (Math.random() - 0.5) * 5;
      node.position.y = (Math.random() - 0.5) * 5;
      node.position.z = (Math.random() - 0.5) * 5;
      scene.add(node);
      nodes.push(node);
    }

    // Create lines (conectores) between nodes
    const line_material = new THREE.LineBasicMaterial({ color: 0xffffff });
    const lines = [];

    for (let i = 0; i < numNodes; i++) {
      let connectionsCount = 0;

      for (let j = 0; j < numNodes; j++) {
        if (i !== j && connectionsCount < maxConnectionsPerNode) {
          const geometry = new THREE.BufferGeometry();
          const positions = new Float32Array([
            nodes[i].position.x, nodes[i].position.y, nodes[i].position.z,
            nodes[j].position.x, nodes[j].position.y, nodes[j].position.z
          ]);
          geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
          const line = new THREE.Line(geometry, line_material);
          scene.add(line);
          lines.push(line);
          connectionsCount++;
        }
      }
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the neural network based on scroll
      nodes.forEach((node) => {
        node.rotation.x += 0.01;
        node.rotation.y += 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Scroll-based animation
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Define the animation properties
      anime({
        targets: scene.rotation,
        x: scrollY * 0.001, // Adjust the rotation based on scroll
        y: scrollY * 0.001,
        duration: 500, // Animation duration
        easing: 'easeOutQuad', // Easing function
      });
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (animationCompleted) {
      // Perform the exit animation when animationCompleted is true
      anime({
        targets: containerRef.current,
        opacity: 0,
        translateY: 100,
        duration: 1000,
        easing: 'easeOutQuad',
        complete: () => {
          onAnimationComplete();
        },
      });
    }
  }, [animationCompleted, onAnimationComplete]);

  return (
    <div
    ref={containerRef}
    className={`neural-animation ${animationCompleted ? '' : 'animate-entrance'}`}
    onClick={handleClick}
    style={{ backgroundColor: 'pink' }} // Cambiar el color de fondo a rosa
  >
    {/* Contenido del componente */}
  </div>
  );
}
