'use client';

import { NeuralAnimation } from "./LandingAnimation";
import React, { useState } from 'react';
import { Box, Grid, Typography, Button, Container } from "@mui/material";

export default function ThirdSection() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div style={{border: "2px solid black", overflow:"hidden", paddingTop:"16px"}}>
      {showContent && (
        <div style={{border: "2px solid black", overflow:"hidden",paddingTop:"16px"}}>
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
        <h1>SDFGHJKL</h1>
    </Box>
          
        </div>
      )}
      <NeuralAnimation onAnimationComplete={() => setShowContent(true)} />
    </div>
  );
}
