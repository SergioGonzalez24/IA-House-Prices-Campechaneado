'use client';


// import { NeuralAnimation } from "./LandingAnimation";
// import React, { useState } from 'react';
// import { Box, Typography, Paper, Button } from "@mui/material";

// export default function ThirdSection() {
//   const [showContent, setShowContent] = useState(false);

//   return (
//     <div style={{ border: "2px solid red", paddingTop: "16px", paddingBottom: "16px" }}>
//       {showContent && (
//         <div style={{ border: "2px solid black", paddingTop: "16px", paddingBottom: "16px", height: "100%", width: "auto" }}>
//           <Box
//             sx={{
//               height: "100%",
//               overflow: "hidden",
//               marginTop: "90px",
//               marginBottom: "90px",
//               marginLeft: "30px",
//               marginRight: "30px",
//               padding: "10px",
//               paddingBottom: "100px",
//               border: "2px solid black"
//             }}
//           >
//             <Paper elevation={3} sx={{ padding: "20px", borderRadius: "10px", backgroundColor: "#f9f9f9" }}>
//               <Typography variant="h4" sx={{ textAlign: "center", marginBottom: "20px" }}>
//                 Tecnología de Vanguardia
//               </Typography>
//               <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "20px" }}>
//                 En nuestra plataforma, utilizamos tecnología de punta para ofrecerte las mejores soluciones. Nuestra infraestructura está respaldada por una potente IA que procesa datos en tiempo real y aprende de manera continua para proporcionar predicciones precisas.
//               </Typography>
//               <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "20px" }}>
//                 Algunas de las tecnologías clave que utilizamos incluyen el aprendizaje automático, el procesamiento de lenguaje natural (NLP) y la computación en la nube para garantizar un rendimiento óptimo y una experiencia de usuario excepcional.
//               </Typography>
//               <Button
//                   variant="contained"
//                   size="large"
//                   href="/"
//                   style={{
//                     display: "block", 
//                     margin: "0 auto", 
//                     backgroundColor: "#28ac01",
//                     color: "#FFFFFF",
//                     marginBottom: "1px",
//                     borderRadius: "30px",
//                     width: "200px",
//                     height: "50px",
                    
//                   }}
//                 >
//                   <b>Descubre más</b>
//                 </Button>
//             </Paper>
//           </Box>
//         </div>
//       )}
//       <NeuralAnimation onAnimationComplete={() => setShowContent(true)} />
//     </div>
//   );
// }


import { NeuralAnimation } from "./LandingAnimation";
import React, { useState } from 'react';
import { Box, Typography, Paper, Button } from "@mui/material";

export default function ThirdSection() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div style={{ paddingTop: "16px", paddingBottom: "16px" }}>
      {showContent && (
        <div style={{ paddingTop: "16px", paddingBottom: "16px", height: "100%", width: "auto" }}>
          <Box
            sx={{
              height: "100%",
              overflow: "hidden",
              marginTop: "90px",
              marginBottom: "90px",
              marginLeft: "30px",
              marginRight: "30px",
              padding: "10px",
              paddingBottom: "100px",
            }}
          >
            <Paper elevation={3} sx={{ padding: "20px", borderRadius: "10px", backgroundColor: "#f9f9f9", zIndex:"-1"}}>
              <Typography variant="h4" sx={{ textAlign: "center", marginBottom: "20px" }}>
                Tecnología de Vanguardia
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "20px" }}>
                En nuestra plataforma, utilizamos tecnología de punta para ofrecerte las mejores soluciones. Nuestra infraestructura está respaldada por una potente IA que procesa datos en tiempo real y aprende de manera continua para proporcionar predicciones precisas.
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "20px" }}>
                Algunas de las tecnologías clave que utilizamos incluyen el aprendizaje automático, el procesamiento de lenguaje natural (NLP) y la computación en la nube para garantizar un rendimiento óptimo y una experiencia de usuario excepcional.
              </Typography>
              <Button
  variant="contained"
  size="large"
  href="/"
  sx={{
    display: "block",
    margin: "0 auto",
    backgroundColor: "#28ac01",
    color: "#FFFFFF",
    marginBottom: "1px",
    borderRadius: "30px",
    width: "200px",
    height: "50px",
    textAlign: "center", // Centra el texto horizontalmente
    zIndex:"0"
  }}
>
  <b>Descubre más</b>
</Button>

            </Paper>
          </Box>
        </div>
      )}
      <NeuralAnimation onAnimationComplete={() => setShowContent(true)} />
    </div>
  );
}

