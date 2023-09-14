"use client";
import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

export default function UploadProyects() {
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    fechaLimite: "",
    meta: "",
    precioEstimado: "",

    calle: "",
    ciudad: "",
    codigoPostal: "",
    
    lotarea: "",
    overallqual: "",
    overallcond: "",
    yearbuilt: "",
    yearremodadd: "",
    bsmtfinsf1: "",
    bsmtfinsf2: "",
    bsmtunfsf: "",
    totalbsmtsf: "",
    _1stflrsf: "",
    _2ndflrsf: "",
    lowqualfinsf: "",
    grlivarea: "",
    bsmtfullbath: "",
    fullbath: "",
    halfbath: "",
    bedroomabvgr: "",
    kitchenabvgr: "",
    totrmsabvgrd: "",
    fireplaces: "",
    garagecars: "",
    garagearea: "",
    wooddecksf: "",
    openporchsf: "",
    enclosedporch: "",
    _3ssnporch: "",
    screenporch: "",
    poolarea: "",
    miscval: "",
    mosold: "",
    yrsold: "",
  });

  // Estado para los archivos
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef();

  // Estado para la sección actual del formulario
  const [currentSection, setCurrentSection] = useState(1);

  // Estado para la vista previa de la imagen
  const [selectedImage, setSelectedImage] = useState(null);
  const [openPreview, setOpenPreview] = useState(false);

  const [responseText, setResponseText] = useState('');

  // Definición de secciones del formulario
  const sections = [
    [
        { id: "titulo", label: "Título" },
        { id: "descripcion", label: "Descripción" },
        { id: "fechaLimite", label: "Fecha Límite" },
        { id: "meta", label: "Meta" },
        { id: "precioEstimado", label: "Precio Estimado" },
    ],
    [
        { id: "calle", label: "Calle" },
        { id: "ciudad", label: "Ciudad" },
        { id: "codigoPostal", label: "Código Postal" },
    ], 
    [
      { id: "lotarea", label: "Lot Area" },
      { id: "overallqual", label: "Overall Quality" },
      { id: "overallcond", label: "Overall Condition" },
      { id: "yearbuilt", label: "Year Built" },
      { id: "yearremodadd", label: "Year Remodeled" },
    ],
    [
      { id: "bsmtfinsf1", label: "Basement Finish 1" },
      { id: "bsmtfinsf2", label: "Basement Finish 2" },
      { id: "bsmtunfsf", label: "Unfinished Basement" },
      { id: "totalbsmtsf", label: "Total Basement SF" },
      { id: "_1stflrsf", label: "First Floor SF" },
    ],
    [
      { id: "_2ndflrsf", label: "Second Floor SF" },
      { id: "lowqualfinsf", label: "Low Quality Finish SF" },
      { id: "grlivarea", label: "Above Ground Living Area" },
      { id: "bsmtfullbath", label: "Basement Full Bath" },
      { id: "fullbath", label: "Full Bath" },
    ],
    [
      { id: "halfbath", label: "Half Bath" },
      { id: "bedroomabvgr", label: "Bedrooms Above Grade" },
      { id: "kitchenabvgr", label: "Kitchens Above Grade" },
      { id: "totrmsabvgrd", label: "Total Rooms Above Grade" },
      { id: "fireplaces", label: "Fireplaces" },
    ],
    [
      { id: "garagecars", label: "Garage Cars" },
      { id: "garagearea", label: "Garage Area" },
      { id: "wooddecksf", label: "Wood Deck Area" },
      { id: "openporchsf", label: "Open Porch Area" },
      { id: "enclosedporch", label: "Enclosed Porch Area" },
    ],
    [
      { id: "_3ssnporch", label: "Three Season Porch Area" },
      { id: "screenporch", label: "Screen Porch Area" },
      { id: "poolarea", label: "Pool Area" },
      { id: "miscval", label: "Miscellaneous Value" },
      { id: "mosold", label: "Month Sold" },
    ],
    [{ id: "yrsold", label: "Year Sold" }],
  ];

  // Manejador de cambio de entrada en el formulario
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejador para subir archivos
  const handleFileUpload = (event) => {
    const fileArray = Array.from(event.target.files);

    // Verificar el tamaño de las imágenes antes de guardarlas
    const validFiles = fileArray.filter(
      (file) => file.size <= 10 * 1024 * 1024
    ); // 10MB

    // Mostrar una alerta para los archivos que exceden el límite de tamaño
    const oversizedFiles = fileArray.filter(
      (file) => file.size > 10 * 1024 * 1024
    );
    if (oversizedFiles.length > 0) {
      alert(
        `Los siguientes archivos son demasiado grandes: ${oversizedFiles
          .map((file) => file.name)
          .join(", ")}`
      );
    }

    setFiles([...files, ...validFiles]);

    // Guardar imágenes válidas en sessionStorage
    validFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        sessionStorage.setItem(file.name, e.target.result);
      };
      reader.readAsDataURL(file);
    });

    fileInputRef.current.value = null;
  };

  // Manejador para eliminar archivos
  const handleFileDelete = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  // Manejador para pasar a la siguiente sección
  const handleNextSection = () => {
    setCurrentSection(currentSection + 1);
  };

  // Manejador para volver a la sección anterior
  const handlePrevSection = () => {
    setCurrentSection(currentSection - 1);
  };

  const handleSubmit = async () => {
    // Crear un objeto para almacenar los enlaces de las imágenes
    const imageLinks = {};
  
    const dataToStore = {
      lotarea: formData.lotarea,
      overallqual: formData.overallqual,
      // Agrega todas las propiedades que quieras guardar
    };
  
    // Obtener enlaces de la sessionStorage y agregarlos al objeto
    for (let i = 0; i < files.length; i++) {
      const fileName = files[i].name;
      const imageLink = sessionStorage.getItem(fileName);
      if (imageLink) {
        imageLinks[fileName] = imageLink;
      }
    }
  
    // Combinar los datos del formulario con los enlaces de las imágenes
    const formDataWithLinks = {
      ...formData,
      imageLinks,
    };
  
    // Mostrar un mensaje de confirmación
    const confirmed = window.confirm("¿Estás seguro de enviar tus datos?");
  
    if (confirmed) {
      // Enviar los datos como JSON a la consola
      // console.log(JSON.stringify(formDataWithLinks, null, 2));
  
      try {
        const url = 'http://10.48.90.166:8080/modelo';
        const requestData = JSON.stringify(formDataWithLinks);
  
        const response = await fetch(url, {
          method: 'POST',
          body: requestData,
          headers: {
            'Content-Type': 'application/json', // Especifica el tipo de contenido JSON
          },
        });
  
        if (response.ok) {
          const responseData = await response.text();
          setResponseText(responseData);
          //console.log("respuesta",responseData);
          // Aquí puedes realizar cualquier acción adicional después de una respuesta exitosa
        } else {
          console.error('Error en la solicitud:', response.status, response.statusText);
        }
      } catch (error) {
        // Manejar errores aquí
        console.error('Error:', error);
      }
    }
  };
  


  // Añade una función para abrir la vista previa de una imagen al hacer clic en ella
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpenPreview(true);
  };

  // Añade una función para cerrar la vista previa de la imagen
  const handleClosePreview = () => {
    setOpenPreview(false);
  };

  // Obtener el contenido de la sección actual
  const getStepContent = (step) => {
    return (
      <div>
        {sections[step - 1].map((field) => (
          <TextField
            key={field.id}
            margin="normal"
            fullWidth
            id={field.id}
            label={field.label}
            name={field.id}
            value={formData[field.id]}
            onChange={handleInputChange}
            sx={{ marginBottom: "16px" }}
          />
        ))}
      </div>
    );
  };

  return (
    <Paper elevation={3} sx={{ margin: "20px", padding: "20px", zIndex:-1}}>

<Grid container spacing={2} justifyContent="center">
        {/* Sección de indicador de paso */}
        <Grid item xs={12} md={16} sx={{ mb: 3 }}>
          <Stepper activeStep={currentSection - 1} alternativeLabel>
            {sections.map((section, index) => (
              <Step key={index}>
                <StepLabel>{`Sección ${index + 1}`}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>

        {/* Sección de imágenes */}
        <Grid
          item
          xs={12}
          md={5}
          name="images"
          sx={{
            backgroundColor: "#f5f5f5",
            p: 2,
            borderRadius: "10px",
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ color: "black" }}>
            Vista previa de archivos
          </Typography>
          <input
            type="file"
            accept=".jpg, .jpeg, .png, .pdf"
            multiple
            ref={fileInputRef}
            onChange={handleFileUpload}
            style={{ display: "none" }}
          />
          <Button
            variant="contained"
            component="label"
            sx={{
              backgroundColor: "#28ac01",
              "&:hover": { backgroundColor: "#28ac01" },
              margin: "6px 6px 6px 6px",
              padding: "8px 8px 8px 8px",
            }}
          >
            Subir Archivos
            <input
              type="file"
              accept=".jpg, .jpeg, .png, .pdf"
              multiple
              ref={fileInputRef}
              onChange={handleFileUpload}
              style={{ display: "none" }}
            />
          </Button>
          <br />

          <Grid container spacing={1}>
            {files.map((file, index) => (
              <Grid item xs={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    backgroundColor: "white",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#fff",
                      width: "100px",
                      height: "100px",
                      marginBottom: "8px",
                      backgroundImage: `url(${sessionStorage.getItem(
                        file.name
                      )})`,
                      backgroundSize: "cover",
                    }}
                  />
                  <span
                    style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                  >
                    {file.name}
                  </span>
                  <div>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleFileDelete(index)}
                      sx={{
                        mt: 1,
                        margin: "6px 6px 6px 6px",
                        padding: "8px 8px 8px 8px",
                      }}
                    >
                      <DeleteIcon fontSize="small" />
                    </Button>

                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleImageClick(file.name)}
                      sx={{ mt: 1 }}
                    >
                      <VisibilityIcon fontSize="small" />
                    </Button>
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Modal para la vista previa */}
        <Dialog open={openPreview} onClose={handleClosePreview} maxWidth="md">
          <DialogContent>
            {selectedImage && (
              <img
                src={sessionStorage.getItem(selectedImage)}
                alt={selectedImage}
                style={{ width: "100%" }}
              />
            )}
          </DialogContent>
        </Dialog>

        {/* Sección de formulario */}
        <Grid item xs={12} md={5} sx={{ p: 2 }}>
          <Typography variant="h5" gutterBottom>
            Información Requerida - Sección {currentSection}
          </Typography>
          <form>
            {getStepContent(currentSection)}
            <div
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "16px",
              }}
            >
              {currentSection > 1 && (
                <Button
                  onClick={handlePrevSection}
                  variant="contained"
                  component="label"
                  sx={{
                    mt: 1,
                    backgroundColor: "#28ac01",
                    "&:hover": { backgroundColor: "#28ac01" },
                    margin: "6px 6px 6px 6px",
                    padding: "8px 8px 8px 8px",
                    height: "100%",
                  }}
                >
                  Anterior
                </Button>
              )}
              <Button
                onClick={
                  currentSection < sections.length
                    ? handleNextSection
                    : handleSubmit
                }
                variant="contained"
                component="label"
                sx={{
                  mt: 1,
                  backgroundColor: "#28ac01",
                  "&:hover": { backgroundColor: "#28ac01" },
                  margin: "6px 6px 6px 6px",
                  padding: "8px 8px 8px 8px",
                  height: "100%",
                }}
              >
                {currentSection < sections.length ? "Siguiente" : "Enviar"}
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
}
