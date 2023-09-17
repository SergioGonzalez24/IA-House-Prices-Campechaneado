"use client";
import React, { useState, useRef, useContext } from "react";
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
import { lista_proy } from "@/app/page";
import { useRouter } from "next/navigation"

export default function UploadProyects() {
  // Datos de casas
  const proyectos = useContext(lista_proy)

  // Navegación
  const router = useRouter();


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

  const [responseText, setResponseText] = useState("");

  // Definición de secciones del formulario

  const sections = [
    // Información básica
    [
      { id: "titulo", label: "Título" },
      { id: "descripcion", label: "Descripción" },
      { id: "fechaLimite", label: "Fecha Límite" },
      { id: "meta", label: "Meta" },
      { id: "precioEstimado", label: "Precio Estimado" },
    ],
    // Ubicación
    [
      { id: "calle", label: "Calle" },
      { id: "ciudad", label: "Ciudad" },
      { id: "codigoPostal", label: "Código Postal" },
    ],
    // Características del lote
    [
      { id: "lotfrontage", label: "Frente del Lote" },
      { id: "lotarea", label: "Área del Lote" },
      { id: "overallqual", label: "Calidad General" },
      { id: "overallcond", label: "Condición General" },
      { id: "yearbuilt", label: "Año de Construcción" },
    ],
    // Año y remodelación
    [
      { id: "yearremodadd", label: "Año de Remodelación" },
      { id: "masvnrarea", label: "Área de Revestimiento de Mampostería" },
      { id: "bsmtfinsf1", label: "Acabado del Sótano 1" },
      { id: "bsmtfinsf2", label: "Acabado del Sótano 2" },
      { id: "bsmtunfsf", label: "Sótano sin Terminar" },
    ],
    // Superficie del sótano
    [
      { id: "totalbsmtsf", label: "Superficie Total del Sótano" },
      { id: "_1stflrsf", label: "Superficie del Primer Piso" },
      { id: "_2ndflrsf", label: "Superficie del Segundo Piso" },
      { id: "lowqualfinsf", label: "Superficie de Acabado de Baja Calidad" },
      { id: "grlivarea", label: "Superficie de Vivienda Sobre el Suelo" },
    ],
    // Baños y habitaciones
    [
      { id: "bsmtfullbath", label: "Baño Completo en el Sótano" },
      { id: "bsmthalfbath", label: "Medio Baño en el Sótano" },
      { id: "fullbath", label: "Baño Completo" },
      { id: "halfbath", label: "Medio Baño" },
      { id: "bedroomabvgr", label: "Dormitorios sobre el Grado" },
    ],
    [
      { id: "kitchenabvgr", label: "Cocinas sobre el Grado" },
      { id: "totrmsabvgrd", label: "Total de Habitaciones sobre el Grado" },
      { id: "fireplaces", label: "Chimeneas" },
      { id: "garageyrblt", label: "Año de Construcción del Garaje" },
      { id: "garagecars", label: "Cocheras del Garaje" },
    ],
    // Garaje
    [
      { id: "garagearea", label: "Área del Garaje" },
      { id: "wooddecksf", label: "Superficie del Deck de Madera" },
      { id: "openporchsf", label: "Superficie del Porche Abierto" },
      { id: "enclosedporch", label: "Porche Cerrado" },
      { id: "_3ssnporch", label: "Porche de Tres Temporadas" },
    ],
    // Espacios exteriores
    [
      { id: "screenporch", label: "Porche con Pantallas" },
      { id: "poolarea", label: "Área de la Piscina" },
      { id: "miscval", label: "Valor Misceláneo" },
      { id: "mosold", label: "Mes de Venta" },
      { id: "yrsold", label: "Año de Venta" },
    ],
    // Zonas y ubicación del lote
    [
      { id: "is_zone_lres", label: "Zona de Baja Densidad" },
      { id: "is_zone_mres", label: "Zona de Densidad Media" },
      { id: "is_zone_com", label: "Zona Comercial" },
      { id: "is_zone_float", label: "Zona Flotante" },
      { id: "is_zone_hres", label: "Zona de Alta Densidad" },
    ],
    [
      { id: "is_land_lvl", label: "Terreno Nivelado" },
      { id: "is_land_bk", label: "Terreno al Borde del Banco" },
      { id: "is_land_low", label: "Terreno Bajo" },
      { id: "is__land_hi", label: "Terreno Alto" },
      { id: "is_lot_in", label: "Lote Interior" },
    ],
    [
      { id: "is_lot_fr2", label: "Lote Frente a Dos Calles" },
      { id: "is_lot_cor", label: "Lote en Esquina" },
      { id: "is_lot_culdsac", label: "Callejón sin Salida" },
      { id: "is_fr3", label: "Frente a Tres Calles" },
    ],
    [
      { id: "is_bldg_singlef", label: "Edificio Unifamiliar" },
      { id: "is_bldg_twof", label: "Edificio de Dos Familias" },
      { id: "is_bldg_du", label: "Edificio de Duplex" },
      { id: "is_bldg_townend", label: "Edificio de Townhouse Extremo" },
      { id: "is_bldg_townins", label: "Edificio de Townhouse Interior" },
    ],
    [
      { id: "is_house_2story", label: "Casa de 2 Pisos" },
      { id: "is_house_1story", label: "Casa de 1 Piso" },
      { id: "is_house_15fstory", label: "Casa de 1.5 Pisos Frontal" },
      { id: "is_house_15ustory", label: "Casa de 1.5 Pisos sin Terminar" },
      { id: "is_house_splitfr", label: "Casa de Entrada Dividida" },
    ],
    [
      { id: "is_house_splitlvl", label: "Casa de Niveles Divididos" },
      { id: "is_house_25ustory", label: "Casa de 2.5 Pisos sin Terminar" },
    ],
    // Tipo de techo y mampostería
    [
      { id: "is_roof_gable", label: "Techo a Dos Aguas" },
      { id: "is_roof_hip", label: "Techo a Cuatro Aguas" },
      { id: "is_roof_gambrel", label: "Techo a Dos Aguas con Gablete" },
      { id: "is_roof_mansard", label: "Techo Mansarda" },
      { id: "is_roof_flat", label: "Techo Plano" },
    ],
    [
      { id: "is_roof_shed", label: "Techo a Un Agua" },
      { id: "is_masn_brkface", label: "Revestimiento de Mampostería de Ladrillo" },
      { id: "is_masn_none", label: "Sin Revestimiento de Mampostería" },
      { id: "is_masn_stone", label: "Revestimiento de Mampostería de Piedra" },
    ],
    [
      { id: "is_masn_brk", label: "Revestimiento de Mampostería de Ladrillo" },
      { id: "is_masn_na", label: "Revestimiento de Mampostería No Disponible" },
    ],
    // Fundación y garaje
    [
      { id: "is_foun_pconc", label: "Fundación de Hormigón Vertido" },
      { id: "is_foun_cblock", label: "Fundación de Bloque de Hormigón" },
      { id: "is_foun_brktil", label: "Fundación de Ladrillo y Teja" },
      { id: "is_foun_wood", label: "Fundación de Madera" },
      { id: "is_foun_slab", label: "Fundación de Losa" },
    ],
    [
      { id: "is_foun_stone", label: "Fundación de Piedra" },
      { id: "is_garage_attchd", label: "Garaje Adjunto" },
      { id: "is_garage_detchd", label: "Garaje Independiente" },
      { id: "is_garage_builtin", label: "Garaje Incorporado" },
    ],
    [
      { id: "is_garage_carport", label: "Cochera para Automóviles" },
      { id: "is_garage_none", label: "Sin Garaje" },
      { id: "is_garage_basement", label: "Garaje en el Sótano" },
      { id: "is_garage_2t", label: "Garaje de 2 Niveles" },
    ],
    // Venta y otras características
    [
      { id: "is_sale_wd", label: "Venta con Escritura de Garantía" },
      { id: "is_sale_new", label: "Venta Nueva" },
      { id: "is_sale_cod", label: "Venta por Orden del Oficial Judicial/Herencia" },
      { id: "is_sale_conld", label: "Venta con Contrato y Pago Inicial Bajo" },
      { id: "is_sale_conli", label: "Venta con Contrato y Interés Bajo" },
    ],
    [
      { id: "is_sale_cwd", label: "Venta con Contrato y Escritura de Garantía" },
      { id: "is_sale_conlw", label: "Venta con Contrato y Trabajo Bajo" },
      { id: "is_sale_con", label: "Venta con Contrato" },
      { id: "is_sale_oth", label: "Otro Tipo de Venta" },
      { id: "is_salec_nom", label: "Condición de Venta Normal" },
    ],
    [
      { id: "is_salec_anom", label: "Condición de Venta Anormal" },
      { id: "is_salec_p", label: "Condición de Venta Parcial" },
      { id: "is_salec_adland", label: "Compra de Terreno Adyacente" },
      { id: "is_salec_alloca", label: "Condición de Venta de Asignación" },
      { id: "is_salec_f", label: "Condición de Venta Familiar" },
    ],
    [
      { id: "mssubclass", label: "Clase de Edificio" },
      { id: "street", label: "Tipo de Calle" },
      { id: "lotshape", label: "Forma del Lote" },
      { id: "utilities", label: "Tipo de Utilidades" },
      { id: "landslope", label: "Inclinación del Terreno" },
    ],
    [
      { id: "exterqual", label: "Calidad Exterior" },
      { id: "extercond", label: "Condición Exterior" },
      { id: "bsmtqual", label: "Calidad del Sótano" },
      { id: "bsmtcond", label: "Condición del Sótano" },
      { id: "bsmtexposure", label: "Exposición del Sótano" },
    ],
    [
      { id: "bsmtfintype1", label: "Tipo de Acabado del Sótano 1" },
      { id: "bsmtfintype2", label: "Tipo de Acabado del Sótano 2" },
      { id: "heatingqc", label: "Calidad y Condición de la Calefacción" },
      { id: "centralair", label: "Aire Acondicionado Central" },
      { id: "electrical", label: "Sistema Eléctrico" },
    ],
    [
      { id: "kitchenqual", label: "Calidad de la Cocina" },
      { id: "functional", label: "Funcionalidad de la Vivienda" },
      { id: "fireplacequ", label: "Calidad de la Chimenea" },
      { id: "garagefinish", label: "Acabado del Garaje" },
      { id: "garagequal", label: "Calidad del Garaje" },
    ],
    [
      { id: "garagecond", label: "Condición del Garaje" },
      { id: "paveddrive", label: "Entrada Pavimentada" },
      { id: "fence", label: "Calidad de la Cerca" },
      { id: "ext_id_2", label: "Identificador Externo 2" },
      { id: "cond_id_2", label: "Identificador de Condición 2" },
    ],
    [
      { id: "neigh_id", label: "Identificador de Vecindario" },
      { id: "cond_id_1", label: "Identificador de Condición 1" },
      { id: "ext_id_1", label: "Identificador Externo 1" },
    ],
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

  // Manejador para enviar el formulario
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

      try {
        const url = "http://127.0.0.1:8080/modelo";
        const requestData = JSON.stringify(formDataWithLinks, null, 2);

        const response = await fetch(url, {
          method: "POST",
          body: requestData,
          headers: {
            "Content-Type": "application/json", // Especifica el tipo de contenido JSON
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          setResponseText(responseData);
          console.log("respuesta", responseData);
          // Agregar el proyecto 
          let longi = Object.keys(proyectos).length
          proyectos[longi + 1] = responseData;

          // Regresar a /home
          router.push("/home")

          // Aquí puedes realizar cualquier acción adicional después de una respuesta exitosa
        } else {
          console.error(
            "Error en la solicitud:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        // Manejar errores aquí
        console.error("Error:", error);
      }
    }
  };

  // Añade una función para abrir la vista previa de una imagen al hacer clic en ella
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpenPreview(true);
    console.log(image);
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
    <lista_proy.Provider value={proyectos}>
    <Paper elevation={3} sx={{ margin: "20px", padding: "20px", zIndex: -1 }}>
      <Grid container spacing={2} justifyContent="center">
        {/* Sección de indicador de paso */}
        {/* <Grid item xs={12} md={16} sx={{ mb: 3 }}>
          <Stepper activeStep={currentSection - 1} alternativeLabel>
            {sections.map((section, index) => (
              <Step key={index}>
                <StepLabel>{`Sección ${index + 1}`}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid> */}

        <Grid item xs={12} md={16} sx={{ mb: 3 }}>
          <Stepper
            activeStep={Math.min(9, currentSection - 1)}
            alternativeLabel
          >
            {sections.slice(0, 10).map((section, index) => (
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
    </lista_proy.Provider>
  );
}
