import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import CertificadoNacimiento from "./pages/CertificadoNacimiento";
import CertificadoMatrimonio from "./pages/CertificadoMatrimonio";
import CertificadoDefuncion from "./pages/CertificadoDefuncion";
import PreguntasFrecuentes from "./pages/PreguntasFrecuentes";
import CambioNombre from "./pages/CambioNombre";
import CambioSexo from "./pages/CambioSexo";
import ConservacionNacionalidad from "./pages/ConservacionNacionalidad";
import ExpedienteMatrimonio from "./pages/ExpedienteMatrimonio";
import ExpedienteNacionalidadOpcion from "./pages/ExpedienteNacionalidadOpcion";
import FeVidaEstado from "./pages/FeVidaEstado";
import InscripcionCapitulaciones from "./pages/InscripcionCapitulaciones";
import InscripcionNacimientoFueraPlazo from "./pages/InscripcionNacimientoFueraPlazo";
import InscripcionRecienNacido from "./pages/InscripcionRecienNacido";
import JuraNacionalidad from "./pages/JuraNacionalidad";
import JuraNacionalidadOpcion from "./pages/JuraNacionalidadOpcion";
import ReconocimientoHijoNoMatrimonial from "./pages/ReconocimientoHijoNoMatrimonial";
import SimplePresuncionNacionalidad from "./pages/SimplePresuncionNacionalidad";
import RectificacionError from "./pages/RectificacionError";
import NotFound from "./pages/NotFound";

const App = () => (
  <HelmetProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Certificados */}
          <Route path="/certificado-nacimiento" element={<CertificadoNacimiento />} />
          <Route path="/certificado-matrimonio" element={<CertificadoMatrimonio />} />
          <Route path="/certificado-defuncion" element={<CertificadoDefuncion />} />
          {/* Cambios de estado */}
          <Route path="/cambio-nombre" element={<CambioNombre />} />
          <Route path="/cambio-sexo" element={<CambioSexo />} />
          {/* Nacionalidad */}
          <Route path="/conservacion-nacionalidad" element={<ConservacionNacionalidad />} />
          <Route path="/expediente-nacionalidad-opcion" element={<ExpedienteNacionalidadOpcion />} />
          <Route path="/jura-nacionalidad" element={<JuraNacionalidad />} />
          <Route path="/jura-nacionalidad-opcion" element={<JuraNacionalidadOpcion />} />
          <Route path="/simple-presuncion-nacionalidad" element={<SimplePresuncionNacionalidad />} />
          {/* Inscripciones */}
          <Route path="/inscripcion-recien-nacido" element={<InscripcionRecienNacido />} />
          <Route path="/inscripcion-nacimiento-fuera-plazo" element={<InscripcionNacimientoFueraPlazo />} />
          <Route path="/inscripcion-capitulaciones" element={<InscripcionCapitulaciones />} />
          <Route path="/reconocimiento-hijo-no-matrimonial" element={<ReconocimientoHijoNoMatrimonial />} />
          {/* Otros trámites */}
          <Route path="/expediente-matrimonio" element={<ExpedienteMatrimonio />} />
          <Route path="/fe-vida-estado" element={<FeVidaEstado />} />
          <Route path="/rectificacion-error" element={<RectificacionError />} />
          {/* Info */}
          <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </HelmetProvider>
);

export default App;
